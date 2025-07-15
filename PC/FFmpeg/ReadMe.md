<li>Windows安装ffmpeg最简单的方式windows安装ffmpeg最简单的方式，打开cmd执行（需要科学上网）  - <a href="https://juejin.cn/post/7485285611730780179" title="windows安装ffmpeg最简单的方式windows安装ffmpeg最简单的方式，打开cmd执行（需要科学上网） w - 掘金">@掘金</a>
</li>
<details>
<summary>打开cmd执行（需要科学上网）:
<queto>winget install --id Gyan.FFmpeg --source winget</queto>
        </summary>
C:\Users> winget show FFmpeg <br>
已找到 FFmpeg [Gyan.FFmpeg] <br>
版本: 7.1.1 <br>
发布者: Gyan <br>
发布服务器 URL: https://www.gyan.dev/ <br>
发布服务器支持 URL: https://www.gyan.dev/ffmpeg/builds/#discussion <br>
作者: Gyan Doshi <br>
绰号： ffmpeg <br>
描述: <br>
  FFmpeg 是领先的多媒体框架,能够解码、编码、转码、复用、解复用、流式传输、过滤和播放人类和机器创建的几乎所有内容。它支持从最晦涩的古老格式到最前沿的格式。 <br>
 <br>
  FFmpeg 64 位静态完整版本来自 www.gyan.dev。包含大多数库。 <br>
主页: https://www.gyan.dev/ffmpeg/builds/ <br>
许可证: GPL-3.0 <br>
许可证 URL: https://www.ffmpeg.org/legal.html <br>
版权所有: Copyright (c) 2000-2024 the FFmpeg developers <br>
发行说明 URL: https://raw.githubusercontent.com/FFmpeg/FFmpeg/release/7.1/Changelog <br>
文档: <br>
  文档: https://ffmpeg.org/documentation.html <br>
  关于: https://www.gyan.dev/ffmpeg/builds/#about-these-builds <br>
  GitHub 问题: https://github.com/GyanD/codexffmpeg/issues <br>
标记： <br>
  ffmpeg <br>
  多媒体 <br>
  媒体 <br>
  录制 <br>
  推流 <br>
  流媒体 <br>
  视频 <br>
  编解码器 <br>
  解码 <br>
  转换 <br>
  转码 <br>
  过滤器 <br>
  音视频 <br>
  音频 <br>
安装： <br>
  安装程序类型： portable (zip) <br>
  安装程序 URL： https://github.com/GyanD/codexffmpeg/releases/download/7.1.1/ffmpeg-7.1.1-full_build.zip <br>
  安装程序 SHA256： d760e1b3574402ed18b4865851f87d87e73965a982e6453212df8621fed1c508 <br>
  发布日期: 2025-03-12 <br>
  支持脱机分发: true <br>
 <br>
C:\Users>winget install --id Gyan.FFmpeg --source winget <br>
已找到 FFmpeg [Gyan.FFmpeg] 版本 7.1.1 <br>
此应用程序由其所有者授权给你。 <br>
Microsoft 对第三方程序包概不负责，也不向第三方程序包授予任何许可证。 <br>
正在下载 https://github.com/GyanD/codexffmpeg/releases/download/7.1.1/ffmpeg-7.1.1-full_build.zip <br>
  ▋                               4.00 MB /  169 MB
</details>

<details>
<summary>如何将mp4视频转成m3u8方式在线播放？</summary>

好的，将 MP4 视频转换为 M3U8 格式以实现在线播放，是现代流媒体技术的核心。这个过程不仅仅是文件格式的转换，更是将一个大视频文件分解为一系列小视频片段（.ts 文件）和一个索引文件（.m3u8 文件）的过程。

这种方式被称为 **HLS (HTTP Live Streaming)**，是目前最主流的视频流协议。

### 为什么选择 M3U8/HLS？

  * **自适应码率 (Adaptive Bitrate Streaming)**: 可以根据用户的网络状况（快或慢）自动切换不同清晰度的视频流，保证播放的流畅性。
  * **兼容性好**: 在 iOS 和 Android 移动端上是原生支持的，在桌面浏览器上可以通过 JavaScript 库（如 HLS.js）轻松播放。
  * **更好的播放体验**: 用户可以快速拖动进度条（seek），因为播放器只需要加载对应时间点的小视频片段，而不是整个大文件。
  * **CDN 友好**: 小文件片段可以被 CDN (内容分发网络) 高效缓存和分发，降低源服务器压力，加速全球用户的访问。

-----

### 核心步骤概览

整个过程可以分为四个主要步骤：

1.  **准备工具**: 安装核心转换软件 FFmpeg。
2.  **视频切片**: 使用 FFmpeg 命令将 MP4 文件切成 `.ts` 片段和 `.m3u8` 索引文件。
3.  **上传文件**: 将所有生成的文件上传到你的 Web 服务器或对象存储（如阿里云 OSS、腾讯云 COS、AWS S3）上。
4.  **网页播放**: 在 HTML 页面中使用支持 HLS 的播放器来加载 `.m3u8` 文件进行播放。

-----

### 详细操作指南

#### 步骤 1: 安装 FFmpeg

FFmpeg 是一个功能强大的开源音视频处理工具，是完成此任务的首选。

  * **Windows**:
    1.  访问 [FFmpeg 官网下载页面](https://ffmpeg.org/download.html)。
    2.  下载适用于 Windows 的编译版本（通常来自 gyan.dev 或 BtbN）。
    3.  解压下载的文件（例如 `ffmpeg-release-full.7z`）。
    4.  将解压后文件夹中的 `bin` 目录（里面包含 `ffmpeg.exe`）的路径添加到系统的环境变量 `Path` 中。这样你就可以在任何地方使用 `ffmpeg` 命令。
  * **macOS**:
    使用 Homebrew 安装是最简单的方式：
    ```bash
    brew install ffmpeg
    ```
  * **Linux (Ubuntu/Debian)**:
    ```bash
    sudo apt update
    sudo apt install ffmpeg
    ```

安装完成后，可以在终端或命令提示符中输入 `ffmpeg -version` 来验证是否安装成功。

#### 步骤 2: 使用 FFmpeg 进行视频切片

这是最核心的一步。打开你的终端或命令提示符，进入 MP4 文件所在的目录。

**场景一：单一码率转换（最简单）**

这个命令会将 `input.mp4` 转换为一系列 `.ts` 文件和一个 `output.m3u8` 文件。

```bash
ffmpeg -i input.mp4 -c:v libx264 -c:a aac -hls_time 10 -hls_list_size 0 -f hls output.m3u8
```

**命令参数解释:**

  * `-i input.mp4`: 指定输入文件。
  * `-c:v libx264 -c:a aac`: 指定视频编码器为 H.264，音频编码器为 AAC。这是 HLS 最兼容的编码组合。即使源视频就是这个编码，重新指定可以避免很多潜在问题。
  * `-hls_time 10`: 设置每个 `.ts` 视频片段的长度（秒）。通常设置为 5-10 秒。值越小，延迟越低，但文件碎片越多。
  * `-hls_list_size 0`: 设置 `.m3u8` 播放列表中包含的 `.ts` 文件数量。`0` 表示保留所有片段，适用于视频点播（VOD）。如果是直播，可以设置为一个正整数，比如 `5`。
  * `-f hls`: 指定输出格式为 HLS。
  * `output.m3u8`: 指定输出的 M3U8 索引文件名。FFmpeg 会自动生成 `output0.ts`, `output1.ts`, ... 等文件。

**场景二：自适应码率转换（推荐，体验更好）**

为了让不同网络的用户都能流畅观看，你可以提供多种清晰度（码率）的视频流。

这个过程稍微复杂一些，需要为每种码率生成一套 `.ts` 文件和对应的 `.m3u8` 文件，最后再创建一个主 `.m3u8` 文件来管理它们。

```bash
# 命令会生成 3 种码率的视频流：高清(1080p), 标清(720p), 流畅(480p)
# 并将它们输出到各自的目录中
ffmpeg -i input.mp4 \
-vf "scale=w=1920:h=1080:force_original_aspect_ratio=decrease" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -hls_segment_filename "1080p/stream_%03d.ts" -b:v 5000k -maxrate 5350k -bufsize 7500k -b:a 192k 1080p/stream.m3u8 \
-vf "scale=w=1280:h=720:force_original_aspect_ratio=decrease" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -hls_segment_filename "720p/stream_%03d.ts" -b:v 2500k -maxrate 2675k -bufsize 3750k -b:a 128k 720p/stream.m3u8 \
-vf "scale=w=854:h=480:force_original_aspect_ratio=decrease" -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -hls_segment_filename "480p/stream_%03d.ts" -b:v 1000k -maxrate 1070k -bufsize 1500k -b:a 96k 480p/stream.m3u8
```

执行后，会生成 `1080p`, `720p`, `480p` 三个文件夹，每个文件夹内都有一套 `.ts` 文件和 `stream.m3u8` 文件。

接下来，**手动创建**一个主索引文件，命名为 `master.m3u8`，内容如下：

```m3u8
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=638400,AVERAGE-BANDWIDTH=608000,RESOLUTION=854x480,CODECS="avc1.4d401f,mp4a.40.2"
480p/stream.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3128000,AVERAGE-BANDWIDTH=2928000,RESOLUTION=1280x720,CODECS="avc1.4d401f,mp4a.40.2"
720p/stream.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=6192000,AVERAGE-BANDWIDTH=5892000,RESOLUTION=1920x1080,CODECS="avc1.4d401f,mp4a.40.2"
1080p/stream.m3u8
```

  * `BANDWIDTH`: 该码率流的峰值带宽（比特/秒）。播放器根据这个值来决定切换哪个流。
  * `RESOLUTION`: 分辨率。
  * 下一行是对应码率的 `.m3u8` 文件的相对路径。

#### 步骤 3: 上传文件到服务器

将所有生成的文件和文件夹，按照原来的目录结构，上传到你的 Web 服务器或云存储空间。

例如，上传后的文件结构可能如下：

```
/videos/my-awesome-video/
  ├── master.m3u8
  ├── 1080p/
  │   ├── stream.m3u8
  │   ├── stream_000.ts
  │   ├── stream_001.ts
  │   └── ...
  ├── 720p/
  │   ├── stream.m3u8
  │   └── ...
  └── 480p/
      ├── stream.m3u8
      └── ...
```

**重要提示**: 确保你的服务器正确配置了 MIME 类型，以便浏览器能识别这些文件。

  * `.m3u8`: `application/x-mpegURL` 或 `vnd.apple.mpegURL`
  * `.ts`: `video/MP2T`

大多数现代 Web 服务器会自动处理。

#### 步骤 4: 在网页中播放

大多数桌面浏览器（如 Chrome, Firefox）的 `<video>` 标签本身不支持 HLS。你需要一个 JavaScript 库来帮助解码。**HLS.js** 是目前最流行、最优秀的选择。

下面是一个完整的 HTML 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HLS Player</title>
    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</head>
<body>

    <h1>我的视频播放器</h1>
    <video id="video" controls width="800"></video>

    <script>
      var video = document.getElementById('video');
      // 这是你在服务器上的 M3U8 文件 URL
      // 如果是自适应码率，就用 master.m3u8
      // 如果是单一码率，就用 output.m3u8
      var videoSrc = 'https://your-domain.com/videos/my-awesome-video/master.m3u8'; 

      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
          // video.play(); // 可选：加载完成后自动播放
        });
      } 
      // 对于原生支持HLS的设备（如iOS Safari）
      else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', function() {
          // video.play(); // 可选：加载完成后自动播放
        });
      }
    </script>

</body>
</html>
```

将 `videoSrc` 替换为你上传的 `master.m3u8`（或 `output.m3u8`）的 **完整 URL**。现在，在浏览器中打开这个 HTML 文件，你就可以看到可以在线播放的视频了！

### 总结与替代方案

  * **手动DIY (FFmpeg)**:
      * **优点**: 免费、灵活、功能强大，完全控制转换过程。
      * **缺点**: 需要命令行操作，对新手有一定学习曲线。
  * **云服务平台**:
      * 如 **阿里云视频点播**、**腾讯云点播**、**AWS Elemental MediaConvert** 等。
      * **优点**: 上传一个 MP4 文件，云平台会自动完成切片、转码（多种码率）、存储和 CDN 分发，并提供播放器代码。非常省心，稳定可靠。
      * **缺点**: 付费服务，成本会随着流量和存储增加而增加。

对于个人项目或学习，使用 FFmpeg 是一个很好的选择。对于商业项目，强烈推荐使用云服务平台来保证稳定性和效率。
</details>
