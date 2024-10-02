/*
 * @Author: wy
 * @Date: 2023-10-12 15:29:35
 * @LastEditors: wy
 * @LastEditTime: 2023-10-12 17:51:27
 * @FilePath: /笔记/song-demo/js/play.js
 * @Description:
 */

const doms = {
  container: document.querySelector('.container'),
  ul: document.querySelector('.word-container'),
  audio: document.querySelector('audio'),
};

let wordsList = [];

function getWords(str) {
  const strList = str.split('\n');
  let words = [];
  for (let i = 0; i < strList.length; i++) {
    wordObj = getTimeAndWord(strList[i]);
    words.push(wordObj);
  }
  return words;
}

// 获取时间和歌词
function getTimeAndWord(str) {
  const strList = str.split(']');
  return {
    time: parseTime(strList[0].substring(1)),
    word: strList[1],
  };
}
// 把时间转化成秒
function parseTime(timeStr) {
  const list = timeStr.split(':');
  return +list[0] * 60 + +list[1];
}

// 渲染歌词
function renderWords() {
  const fragment = document.createDocumentFragment();
  wordsList = getWords(lrc);
  for (let i = 0; i < wordsList.length; i++) {
    const li = document.createElement('li');
    li.classList.add('word-li');
    li.textContent = wordsList[i].word;
    fragment.appendChild(li);
  }
  doms.ul.appendChild(fragment);
}

renderWords();

// 获取当前播放的歌词下标
// 因为要获取歌词的下标。所以需要知道当前播放器的时间
function getWordIndex() {
  const currentTime = doms.audio.currentTime;
  for (let i = 0; i < wordsList.length; i++) {
    if (wordsList[i].time > currentTime) {
      return i - 1; // 如果时间还没到，那就是上一句歌词
    }
  }

  return wordsList.length - 1; // 都循环完了，还没找到就是最后一句
}

const containerHeight = doms.container.clientHeight;
const liHeight = document.querySelector('li').clientHeight;
const maxOffset = doms.ul.clientHeight - containerHeight;

// 歌曲播放，结算移动的位置
function setOffset() {
  const activeIndex = getWordIndex();
  const allLiHeight = activeIndex * liHeight; // 从开始到现在所有的li的高度和
  const halfHeight = containerHeight / 2; // 容器的一半高度
  // 当前播放的歌词，需要显示在容器的中间位置
  // 因该向上的位置就是所有播放过的li+当前li的一半，减去容器的一半
  let offset = allLiHeight + liHeight / 2 - halfHeight;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }

  doms.ul.style.transform = `translateY(-${offset}px)`;

  let li = document.querySelector('.active');

  if (li) {
    li.classList.remove('active');
  }
  // 为li设置高亮
  li = doms.ul.children[activeIndex];

  if (li) {
    li.classList.add('active');
  }
}
// 监听当前歌曲的播放
doms.audio.addEventListener('timeupdate', setOffset);
