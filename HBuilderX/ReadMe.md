# <a href="https://dcloud.io/hbuilderx.html" title="HBuilderX-高效极客技巧">HBuilder X</a> - 高效极客技巧 - Release Notes | <a href="https://dcloud.io/" title="DCloud - HBuilder、HBuilderX、uni-app、uniapp、5+、5plus、mui、wap2app、流应用、HTML5、小程序开发、跨平台App、多端框架">DCloud</a>（数字天堂）
======================================

<a href="https://coding.imooc.com/class/521.html" title="(￥348元)实战课程:**uni-app从入门到进阶 系统完成项目实战**_慕课网">实战课程:uni-app从入门到进阶 系统完成项目实战_慕课网</a>(￥348元)
<blockquote>uni-app从入门到进阶 系统完成项目实战
<blockquote>专门为小程序0基础学员而设，让你拥有能上线的作品</blockquote></blockquote>

# HBuilder X - Release Notes
======================================
## 3.94.2023102613
### HBuilder
* 【重要】新增 uni-app-x ，不再使用js和webview，编译为纯原生App，目前仅支持Android [详情](https://uniapp.dcloud.net.cn/uni-app-x/)
* 调整 HBuilderX和uni-app的版本号改为数字 [详情](https://uniapp.dcloud.net.cn/tutorial/version.html)
* 新增 HBuilderX 版本升级 支持差量更新 提升更新速度
* 新增 HBuilderX 支持搜索设置项（快捷键: `Alt+Shift+,`)
* 优化 项目管理器 鼠标拖拽移动文件 增加确认弹窗
* 优化 字符替换操作的性能
* 优化 大文件 注释上千行代码的性能
* 修复 .editorconfig 文件存在扩展的设置项时，误报格式错误的Bug
* 修复 菜单【视图】来回切换控制台，再按下`Alt+Tab`，出现一个新的空白无title的控制台Bug
* 修复 MacOSX 某些情况下，点击顶部视图或帮助菜单，HBuilderX出现崩溃的Bug
* 修复 多文件字符搜索 首次激活搜索视图 搜索输入框没有自动置焦的Bug
* 修复 格式化 vue/uvue文件template区域写条件编译时，格式化后条件编译缩进不对的Bug
* 修复 格式化 TS文件选中区域格式化时，当选中区域小于一行时，格式化结果可能不对的Bug
* 修复 某些情况下 HBuilderX plugin-manager Node进程无法退出的Bug
* 修复 Markdown 图片悬浮预览时闪烁的Bug
* 修复 Markdown 表格格式化后，需要多次撤销才能还原的Bug
* 新增 uni-app manifest.json App模块配置，Facebook登录，增加配置项client_token
* 修复 uni-app manifest.json App模块配置->定位->高德定位，只勾选Android，校验appkey_ios的Bug
* 修复 uni-app manifest.json 点击某些元素时偶发崩溃的Bug
* 【重要】调整 App项目全系列调整为默认64位，即manifest.json的Android平台支持CPU类型默认值为`arm64-v8a`。如需32位需手动配置manifest打包后生效
* 修复 uni-app 新建页面 页面在pages.json插入时缩进以及换行符和当前编辑器设置不一致的Bug
* 修复 App真机运行 Android设备选择窗口，设备列表刷新慢的Bug
* 修复 App真机运行 Android设备选择窗口，Windows下有时手机列表显示异常数据的Bug
* 修复 App真机运行 5+项目 修改js、css、图片等文件时，不会自动刷新引用这些资源的页面的Bug
* 新增 uni_modules插件 上传插件补充uni-app x分类
* 修复 uni_modules插件 上传到插件市场时，当更新日志中出现${}特殊标记时，引发HBuilderX崩溃的Bug
### uni-app插件
* 新增 条件编译 提供 uniVersion 用于区分编译器版本。可用于插件适配不同版本的uni-app [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#uniVersion)
* 新增 条件编译 static目录支持app、web子目录 [详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#static)
* App平台 修复 云端打包 Storage 相关接口设置和获取内容异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4556)
* App-Android平台 修复 uni.downloadFile 下载 wgt 文件可能没有文件后缀的Bug [详情](https://ask.dcloud.net.cn/question/176447)
* App-iOS平台 修复 nvue 页面在 iOS17 设备可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/179220)
* App-iOS平台 修复 应用语言设置为英文时，nvue map 组件仍然显示中文的Bug [详情](https://ask.dcloud.net.cn/question/178833)
* 微信小程序平台 修复 subscribe 组件属性无效的Bug [详情](https://ask.dcloud.net.cn/question/178893)
* 支付宝小程序平台 修复 lottie 组件属性无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4510)
* 抖音小程序平台 修复 Vue2 项目运行到抖音 27.2.0 版本以上 $refs 失效的Bug [详情](https://github.com/dcloudio/uni-app/pull/4555)
### uts插件
* 调整 通过数字字面量定义变量未申明类型时默认推导为 number 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#autotypefornumber)
* 调整 typeof 获取实例对象类型支持平台专有数字类型 Int、Float、Double等 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#typeof)
* 调整 instanceof 不再支持判断基础类型 number、string、boolean [详情](https://uniapp.dcloud.net.cn/uts/operator.html#instanceof)
* 调整 JSON.parse 解析json字符串支持返回 Array、number、boolean、string 等数据类型 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/json.html#parse)
* 新增 JSON.parse 支持传入泛型解析为指定 type 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E6%8A%8Ajson%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%BAtype)
* 新增 UTSJSONObject 通过 getBoolean、getString、getNumber、getJSON 等方法访问属性，并支持传入 keyPath 格式参数 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E8%AE%BF%E9%97%AE-utsjsonobject-%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7%E6%95%B0%E6%8D%AE)
* 新增 UTSJSONObject 支持 hasOwnProperty [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/utsjsonobject.html#hasOwnProperty)
* 新增 number 类型支持与平台专有数字类型相互转换方法 toInt、toFloat、toDouble、from 等 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/number.html)
* 新增 type 自定义类型支持 for...in 遍历 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#type)
* 新增 Regexp 正则表达式支持 flags 属性 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/regexp.html#flags)
* 新增 支持 encodeURI、decodeURI、encodeURIComponent、decodeURIComponent 等全局方法 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/global.html#encodeuri)
* 新增 支持使用数值字面量和字符串字面量用作类型注解 [详情](https://uniapp.dcloud.net.cn/uts/literal.html)
* 新增 uni.request 请求的 method 支持 OPTIONS [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/request.html)
* 新增 await 支持与 Promise 一同使用 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#await)
* 修复 parseInt 解析超过整型数据范围返回值为 NaN 的Bug
* 修复 for 循环中包含复杂continue、break时，执行不正确的Bug
* 修复 class 中无法访问外部定义的与类内部属性、方法同名的变量的Bug
* 新增 App-Android平台 Promise [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/promise.html)
* 新增 App-Android平台 支持 Array.fromNative 方法将原生 ByteArray/LongArray/ShortArray 类型转换为 Array
* 更新 App-Android平台 编译使用的 Android SDK 为 33
* 修复 App-Android平台 部分场景下位运算符异常的Bug
* 修复 App-Android平台 number 的 toFixed 方法返回结果可能异常的Bug
* 修复 App-Android平台 number 数据类型的位运算操作可能引起崩溃的Bug
* 修复 App-Android平台 console 输出对象信息中包含 private 属性和方法的Bug
* 修复 App-Android平台 number 数据类型在某些情况除法运行结果不正确的Bug
* 修复 App-Android平台 vue 页面调用 API 传参对象中包含`Any`类型字段时可能出现异常的Bug
* 修复 App-iOS平台 class 实例对象调用带参数标签的方法编译报错的Bug
* 补齐 App-iOS平台 支持 parseInt、parseFloat、isNan、isFinite 等全局方法
* 补齐 App-iOS平台 string 类型支持 toString、valueOf 等方法
* 补齐 App-iOS平台 Array 类型支持 toString、sort 等方法
* 补齐 App-iOS平台 Date 类型支持 toString、 valueOf、toUTCString、toTimeString、toDateString、parse 等方法
* 修复 App-iOS平台 函数参数不支持 class 数组类型的Bug
* 修复 App-iOS平台 vue 页面中调用 API 参数不支持 null 的Bug
### App插件(含5+App和uni-app的App端)
* 更新 uni-AD SDK，对接双11预算，其中腾讯优量汇SDK Android为 4.542.1412 版，iOS为 4.14.45 版；穿山甲&GroMore SDK Android为 5.6.1.6 版，iOS为 5.7.0.4 版；快手广告SDK Android为 3.3.53.3 版，iOS为 3.3.53 版；快手内容联盟SDK Android为 3.3.53 版；Sigmob广告联盟SDK Android为 4.12.7 版，iOS为 4.10.0 版；百度百青藤广告SDK Android为 9.322 版，iOS为 5.324 版；华为广告SDK Android为 13.4.66.300 版
* Android平台 更新 Google 统计 SDK 为 21.3.0 版；Google 推送 SDK 为 23.2.1 版
* Android平台 更新 Facebook 登录 SDK 为 16.1.3 版，解决登录异常的问题 [详情](https://ask.dcloud.net.cn/question/175402)
* Android平台 调整 默认支持CPU类型为arm64-v8a，解决在华为新设备（如Mate60、X5）应用启动慢的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#default)
* Android平台 修复 targetSdkVersion 设置为 33 在 Android13 设备保存图片到相册失败的Bug
* Android平台 修复 上架 OPPO 应用市场可能提示`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/174958)
* Android平台 修复 uni-AD 红包广告可能不展示的Bug
* iOS平台 修复 3.7.12版更新个验SDK引出的 一键登录弹窗模式下点击关闭不会触发 fail 回调的Bug [详情](https://ask.dcloud.net.cn/question/177253)
### uniCloud插件
* 优化 阿里云 callFunction、url化方式调用云函数最大超时时间由60秒调整为120秒
* 新增 uni-app x 项目支持 [详情](https://uniapp.dcloud.net.cn/uni-app-x/unicloud/)

## 3.8.12.20230817
### HBuilder
* 新增 Git插件 在工具栏内的地址栏里，项目名称左侧新增Git分支名称，点击后可以方便的进行Git相关操作
* 新增 语言服务 JS、TS支持错误校验自动修复 [详情](https://hx.dcloud.net.cn/Tutorial/Language/auto-fixed)
* 新增 语言服务 支持在ts方法上敲`/**`自动提取方法参数信息到tsdoc上
* 修复 语言服务 悬浮框内文字不支持`ctrl + c`复制的Bug
* 修复 语言服务 悬浮框偶发悬浮到其他应用窗口上的Bug
* 修复 语言服务 TS文件块注释内敲`@`不提示注释标签的Bug
* 修复 语言服务 Vue文件JS块注释内敲`@`提示注释标签，回车后替换内容不对的Bug
* 修复 语言服务 Vue/nvue文件标签事件内没有代码提示的Bug
* 修复 语言服务 Vue 箭头函数内this无法访问vue实例的Bug
* 修复 语言服务 Vue API描述国际化失效的Bug
* 修复 语言服务 某些情况下uniCloud目录下的文件代码提示慢的Bug
* 修复 语言服务 开启js语法校验后，vue文件内js报错不正确的Bug
* 修复 语言服务 uni-app项目 无法识别pinia模块的Bug
* 修复 语言服务 uni-app项目 模块名提示时不会提示内置模块（eg：@dcloudio/uni-app）的Bug
* 修复 语言服务 Vue、html文件 偶发大纲不生效的Bug
* 修复 语言服务 html文件 部分模版语法可能导致代码无法提示的Bug
* 修复 代码助手 某些情况下列表不能翻到下一页时下一页按钮仍然不置灰的Bug
* 修复 某些情况下HBuilderX退出后，部分node进程CPU100%无法正确退出的Bug
* 修复 多文件搜索 指定搜索范围后，切换编辑器标签卡导致搜索范围改变的Bug
* 修复 单行注释 光标在行首时，执行反注释不生效的Bug
* 修复 uni-app 真机运行时，拔掉手机后再插上，重新运行会导致控制台日志重复及编译进程多个的Bug
* 修复 uni-app 真机运行 某些情况下运行控制台工具栏`重启应用`按钮点击后不生效的Bug
* 优化 uni-app 运行到抖音小程序工具时，自动打开项目进入Lite模式
### uni-app插件
* App-Android平台 修复 UniPush1.0 指定格式透传消息不会创建推送消息的Bug [详情](https://ask.dcloud.net.cn/question/173602)
* App-iOS平台 修复 tabBar 使用 iconfont 字体图标时，样式可能不正常的Bug [详情](https://ask.dcloud.net.cn/question/173375)
* App-iOS平台 修复 uni.setTabBarItem 动态设置 gif 后再设置普通图片可能不生效的Bug
* 抖音小程序平台 新增 支持运行到指定页面
* uts插件 App-Android平台 调整 UTSAndroid.getSystemPermissionDenied 返回值类型为Array [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#getsystempermissiondenied)
* uts插件 App-iOS平台 新增 CocoaPods 依赖支持配置git地址 [详情](https://uniapp.dcloud.net.cn/plugin/uts-ios-cocoapods.html#usecocoapods)
* uts插件 App-iOS平台 修复 调用方法参数中有多个自定义类型时会导致应用崩溃的Bug
### uniCloud插件
* 调整 uni-ai 非uni-ai计费网关调用百度接口由内测接口调整为[文心千帆大模型接口](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11)
* 新增 uni-map-common 聚合多家地图供应商的云能力的公共模块 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-map-common.html)
* 新增 unicloud-map 云端一体组件，简化地图业务开发，数据库的POI直接渲染在地图上。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map.html)
* 新增 unicloud-map 地图管理的 uni-admin插件，可视化的管理POI。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-map-admin.html)
* 新增 unicloud-city-select 城市选择组件，方便用户在应用中快速选择目标城市的组件。 [详情](https://uniapp.dcloud.net.cn/uniCloud/unicloud-city-select.html)
* 新增 阿里云定时触发时云函数入参对齐腾讯云 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#trigger-param)
* 新增 云对象定时触发方法_timing增加入参 [详情](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
* 新增 uni-ai支持通过开发者自己的key调用讯飞星火大模型 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
* 新增 类似uni.request的http请求接口uniCloud.request [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#unicloud-request)
* 新增 类似uni.connectSocket的websocket客户端接口uniCloud.connectSocket [详情](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#websocket-client)
### App插件(含5+App和uni-app的App端)
* 【重要】Android平台 适配 支持 Android14 系统
* Android平台 更新 云端打包环境 compileSdkVersion 为 33
* Android平台 修复 隐私政策提示框在部分设备横屏状态下按钮显示不全的Bug [详情](https://ask.dcloud.net.cn/question/173749)
* Android平台 修复 扫码界面拒绝权限提示文字默认语言不正确的Bug [详情](https://ask.dcloud.net.cn/question/174032)
* Android平台 修复 通过 scheme 可唤起应用打开外部链接的Bug [详情](https://ask.dcloud.net.cn/question/173349)
* Android平台 修复 双击返回键退出应用后接收不到个推通道的推送消息的Bug
* iOS平台 补齐 一键登录 icon 支持 width、height 属性设置 logo 图片的宽高 [文档](https://uniapp.dcloud.net.cn/univerify.html)
* iOS平台 更新 uni-AD模块 腾讯优量汇广告联盟SDK 为 4.14.32 版；快手广告联盟SDK 为 3.3.46 版；穿山甲广告联盟SDK 为 5.5.0.3 版本；穿山甲GroMore SDK 为 5.3.6.0 版；百度百青藤广告联盟SDK 为 5.31 版；Sigmob广告联盟SDK 为 4.9.3 版
* iOS平台 修复 uni-AD模块 穿山甲GroMore激励视频 close 事件返回的 isEnded 属性返回值可能不正确的Bug
* iOS平台 修复 wgt热更新后整包覆盖安装引起应用启动白屏的Bug [详情](https://ask.dcloud.net.cn/question/163393)

## 3.8.7.20230703
### HBuilder
* 新增 `Ctrl + Tab` 快速切换视图（macOS快捷键：Alt + Tab）
* 新增 `clogvar`代码块自动填充距离最近的变量
* 新增 Markdown编辑器 代码块区域支持折叠
* 新增 uni-app 支付宝发行 支持自动上传到支付宝后台 [详情](https://hx.dcloud.net.cn/cli/publish-mp-alipay)
* 修复 语言服务 某些情况下HTML标签和属性提示较慢的Bug
* 修复 语言服务 某些情况下导致CPU 100%的Bug
* 修复 语言服务 全局定义的class和id存在局部重新定义时，无法跳转到局部定义的Bug [详情](https://ask.dcloud.net.cn/question/170668)
* 修复 语言服务 vue文件引用的路径以`@/`开头时无法转到定义的Bug
* 修复 语言服务 vue cli ts项目vue文件误报错的Bug
* 修复 `Ctrl + /` 选中多行触发注释，当最后一行光标在行首时，最后一行也被注释的Bug
* 修复 `Ctrl + Shift + Enter` 向上插入空行 某些情况下缩进不对的Bug
* 修复 控制台日志 无法使用`Shift + Up`、`Shift + Down`等快捷键选中文字的Bug
* 修复 多文件字符搜索 搜索结果出来后，点击`重置`后编辑器中的高亮没有清理掉的Bug
* 优化 多文件字符搜索 小屏幕下搜索结果显示区域太小的Bug
* 修复 多文件字符搜索 包含/排除目录中输入内容，点击`搜索`按钮过滤条件不生效的Bug
* 修复 多文件字符搜索 某些情况下，搜索过程中，HBuilderX出现闪退的Bug
* 修复 内置浏览器 多次切换预览和关闭时，偶发崩溃的Bug
* 修复 多个运行控制台时，切换左侧视图（项目管理器等）会导致控制台顶部按钮错乱的Bug
* 新增 插件API `languages.registerInlineCompletionItemProvider` 支持行内代码提示 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/languages/registerInlineCompletionItemProvider)
* 新增 插件API `window.createStatusbarItem` 扩展底部状态栏 [详情](https://hx.dcloud.net.cn/ExtensionDocs/Api/windows/createStatusBarItem)
* 优化 插件API `console.appendLine` 打印日志的性能
### uni-app插件
* App平台、Web平台 修复 vue 页面 textarea 组件高度渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/169380)
* App平台 优化 Vue2 项目 nvue 文件事件编译 [详情](https://ask.dcloud.net.cn/question/170516)
* App平台 修复 Vue3 项目部分情况下 VideoContext 方法失效的Bug [详情](https://ask.dcloud.net.cn/question/168476)
* App平台 修复 nvue 文件中文本节点无法使用 \n 换行的Bug [详情](https://github.com/dcloudio/uni-app/issues/4215)
* App平台 修复 指纹认证部分提示语未支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/168473	)
* App-iOS平台 修复 uni.setTabBarItem 动态设置 gif 图片不生效的Bug [详情](https://ask.dcloud.net.cn/question/171342)
* App-iOS平台 修复 nvue rich-text 组件循环渲染时文字可能随机出现白色背景的Bug [详情](https://ask.dcloud.net.cn/question/171090)
* App-iOS平台 修复 nvue video 组件高度设置 rpx 单位时可能导致 controls 不显示的Bug [详情](https://ask.dcloud.net.cn/question/171037)
* App-iOS平台 修复 uni原生插件Hook系统事件 applicationMain:argv: 获取参数为空的Bug
* App-iOS平台 修复 tabBar 图标宽高不一致时显示会变形的Bug [详情](https://ask.dcloud.net.cn/question/172418)
* Web平台 优化 uni.showToast 文本换行样式 [详情](https://github.com/dcloudio/uni-app/pull/4373)
* Web平台 修复 部分情况下选择位置界面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/167071)
* Web平台 修复 高德地图地址名称丢失的Bug [详情](https://ask.dcloud.net.cn/question/171013)
* Web平台 修复 darkmode 配置不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4317)
* 小程序平台 修复 嵌套列表部分情况下事件编译报错的Bug [详情](https://ask.dcloud.net.cn/question/171043)
* 小程序平台 修复 部分情况下 eventChannel 错乱的Bug
* 小程序平台 修复 自定义属性名称无法使用 name、value 的Bug [详情](https://github.com/dcloudio/uni-app/pull/4257)
* 微信小程序平台 修复 使用 requirePlugin 报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4301)
* 抖音小程序平台 新增 支持 consume-card、pay-button、rate-button、member-button 组件 [详情](https://ask.dcloud.net.cn/question/167927)
* 抖音小程序平台 新增 showToast 支持 mask 配置 [详情](https://ask.dcloud.net.cn/question/154332)
* Web平台、小程序平台、App平台在线推送 修复 uni-push2.0 修复 高频调用推送，导致客户端内存不足，从而引起客户端卡住的问题（小程序平台，需添加新的socket合法域名 wshzn.getui.net:5223 进白名单，[详情](https://uniapp.dcloud.net.cn/unipush-v2.html#useinmp)）
* uts插件 App-Android平台 调整 内置`XXPermissions`库为仓储引用，避免与其它插件产生冲突
* uts插件 App-Android平台 Math.round 返回结果为浮点数的Bug
* uts插件 App-Android平台 console.log 修复部分类型打印异常的Bug
* uts插件 App-iOS平台 新增 CocoaPods 依赖 [文档](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#config-json-2)
* uts插件 App-iOS平台 修复 uts页面组件调用 $emit 方法无响应的Bug
* uts插件 App-iOS平台 修复 函数参数类型为 UTSJSONObject 时传入的参数值总是为空的Bug
* uts插件 App-iOS平台 修复 Hello UTS 中腾讯定位插件没有网络时调用 getLocation 导致应用闪退的Bug [详情](https://ask.dcloud.net.cn/question/172744)
### uniCloud插件
* 【重要】新增 uni-ai 计费网关，可低门槛的采购ai能力 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-buy.html)
* 新增 阿里云 云存储支持目录 [详情](https://uniapp.dcloud.net.cn/uniCloud/storage.html#storage-dir)
* 优化 阿里云 云函数调用云函数超时时间由10秒调整为60秒
* 新增 本地调试支持使用push扩展库
* 修复 本地调试调用redis服务的multi方法时未正确返回结果的Bug [详情](https://ask.dcloud.net.cn/question/171188)
* 修复 jql语法 geoNear方法不传query参数时返回结果不正确的Bug [详情](https://ask.dcloud.net.cn/question/172404)
* 新增 uni-ai chatCompletion 接口流式响应支持 optimizedMessage 事件，优化 message 触发频率，减少客户端卡顿 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
### App插件(含5+App和uni-app的App端)
* Android平台 新增 enableOAID 配置不使用云端打包机默认版本 OAID SDK，避免通过uts插件或uni原生插件调用自己的 OAID SDK 引起的冲突 [详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#enableoaid)
* Android平台 优化 plus.runtime.install 安装apk功能剥离为独立模块，云端打包勾选 google play 渠道时不包含此模块，解决上架 google play 审核报 DCloud SDK 包含从未知来源下载或安装应用的问题 [详情](https://ask.dcloud.net.cn/question/172533)
* Android平台 更新 AndroidX依赖库为 1.1.0 版，解决上架 google play 报 androidx.fragment:fragment:1.0.0 SDK 版本已老的问题
* Android平台 更新 uni-AD 今日头条穿山甲 SDK 为 5.3.4.1 版；穿山甲GroMore广告 SDK 为 5.3.4.1 版
* Android平台 修复 3.8.4引出的 软键盘弹出时输入框可能被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/172135)
* Android平台 修复 3.8.4引出的 同时勾选友盟统计模块和个推推送模块打包冲突报错的Bug [详情](https://ask.dcloud.net.cn/question/172844)
* Android平台 修复 3.8.4引出的 Android 4.4 设备运行崩溃的Bug [详情](https://ask.dcloud.net.cn/question/173032)
* iOS平台 更新 云端打包环境 XCode 为 14.3.1 版、iOS SDK 为 16.4 版
* iOS平台 更新 一键登录使用的个验基础库SDK为 3.0.6.0 版，解决上传 AppStore 可能报 ITMS-90683:Missing purpose string in info.plist 的Bug
* iOS平台 调整 allowsInlineMediaPlayback 默认值为 ture，允许 H5 视频全屏播放 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
* iOS平台 调整 mediaPlaybackRequiresUserAction 默认值为 false，允许 H5 音视频通过 API 控制自动播放 [文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#full-manifest)
* iOS平台 修复 setTitleNViewButtonStyle 动态设置标题栏按钮样式可能导致无法正常显示的Bug [详情](https://ask.dcloud.net.cn/question/172191)
* iOS平台 修复 视频播放控件 video 画面方向可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/171484)
### uni小程序SDK
* Android平台 修复 动态设置胶囊按钮全局项菜单可能不生效的Bug
* iOS平台 优化 push 方式打开小程序设置 autoControlNavigationBar 为 false 时不接管 navigationController 的 delegate，减少对宿主的影响

## 3.8.4.20230531
### HBuilder
* 修复 3.8.3引出的 当电脑连接外接显示器，激活多文件字符搜索功能后，切换到其它屏幕的Bug [详情](https://ask.dcloud.net.cn/question/170787)
* 修复 语言服务 某些情况下，Vue文件，无法提示class的Bug
* 修复 某些情况下，语言服务出现异常，提示`The TypeScript language service died unexpectedly 5 times in the last 5 Minutes.`的Bug
* 修复 某些情况下，语言服务Node进程，CPU占用100%的Bug
### uni-app插件
* 【重要】App-Android平台 修复 3.8.3引出的 在部分设备启动白屏，报`Uncaught SyntaxError: Invalid or unexpected token at __uniappview.html:2`错误的Bug 请所有使用3.8.3的开发者重新打包[详情](https://ask.dcloud.net.cn/question/170588)
* App平台 修复 Vue2 项目在 nvue 页面 style 中使用 border-radius 样式解析不准确的Bug [详情](https://ask.dcloud.net.cn/question/168877)
* 小程序平台 修复 Vue2 项目在模板中使用 JSON.stringify 等全局变量编译报错的Bug [详情](https://ask.dcloud.net.cn/question/170722)
### App插件(含5+App和uni-app的App端)
* Android平台 修复 3.8.3引出的 输入框焦点切换可能引起页面显示异常的Bug [详情](https://ask.dcloud.net.cn/question/170689)

## 3.8.3.20230526
### HBuilder
* 【重要】调整 Windows 64位系统，HBuilderX内置Node调整为64位Node.exe
* 优化 多文件字符搜索 从工具栏改为在HBuilderX左侧视图实现 [详情](https://hx.dcloud.net.cn/Tutorial/UserGuide/node-multi-file-search)
* 优化 HBuilder 左侧视图 右上角下拉菜单 支持切换项目管理器、多文件字符搜索、调试等视图
* 新增 查找引用 文件被哪些代码引用 (对文件点右键菜单【文件查找引用】)
* 新增 查找引用 Html和Vue中 ID和Class的查找引用
* 新增 查找引用 uni-app项目中 组件的查找引用
* 新增 语言服务 Html中引入Vue.js 支持Vue代码提示
* 优化 语言服务 javascript/typescript 函数重载提示
* 修复 语言服务 设置px转upx/rpx提示比例，代码助手提示自定义比例没有生效的Bug
* 修复 语言服务 js文件，某些情况下，require无法提示其它js文件路径的Bug
* 修复 语言服务 代码助手排序规则，修复uni-app项目下敲unic第一项不是uniCloud的Bug
* 修复 语言服务 uni-app 某些情况下，项目不存在uni_module目录，语言服务报错的Bug
* 修复 语言服务 uni-app /开头的路径提示，在中间输入补全项不正确的Bug
* 修复 语言服务 uts插件 Android 系统API部分类型继承关系出错导致语法校验报错的Bug
* 修复 语言服务 uts插件 iOS 部分类型缺失默认构造函数导致语法校验报错的Bug
* 修复 语言服务 uts插件 iOS String类型方法不全导致语法校验报错的Bug
* 修复 语言服务 Vue文件 template标签，无法提示lang的Bug
* 修复 语言服务 Vue文件 template标签，当lang属性为空时, html标签无法提示的Bug
* 修复 语言服务 Vue文件 SCSS @语法，某些情况下，代码助手回车后@符号替换位置错误的Bug
* 修复 语言服务 Vue文件 SCSS，某些情况下，!default和!global没有提示的Bug
* 修复 格式化 无法对1M以上的文件进行格式化的Bug
* 修复 格式化 当js文件第一行存在缩进时，格式化会导致缩进整体按第一行缩进的Bug
* 修复 某些情况下，开启项目管理器与编辑器总是关联时，打开子项目或者父项目下的文件会导致项目管理器滚动错误的Bug
* 优化 Alt+Tab切换标签卡，列表项图标和项目管理器图标保持一致
* 新增 MacOSX App项目 支持选择自定义基座运行到iOS模拟器 [详情](https://uniapp.dcloud.net.cn/tutorial/run/run-custom-base-ios-simulator.html)
* 修复 uni-app 项目运行，下载编译器插件，某些情况下，控制台不提示重新运行的的Bug
* 新增 uni-app 支持多个项目同时运行到微信开发者工具
* 新增 uni-app app云打包和manifest配置支持 uniMP激励视频广告 [详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
* 调整 uni-app uts项目，运行到iOS模拟器，控制台屏蔽uts调试入口，暂不支持对iOS模拟器进行uts调试
* 调整 uni-app uts项目，uts Android开发扩展，增加gradle版本限制，仅支持7.6.1及以下版本
* 修复 uni-app 当项目包含uts授权版插件，提交服务器制作自定义调试基座失败的Bug
* 【重要】调整 uni-app manifest.json和打包窗口 删除互动游戏(变现猫)入口，此广告业务将于5月31日正式下线
* 修复 uniCloud 阿里云 前端网页托管 自定义域名时上传文件后无法自动刷新CDN的Bug
### uniCloud插件
* 新增 uni-ai 微软azure openai接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#get-llm-manager)
* 新增 uni-ai 新增文字生成图片接口 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#ai-media)
* 修复 jql语法 部分请求执行缓慢的Bug [详情](https://ask.dcloud.net.cn/question/170035)
### uni-app插件
* 新增 uni.addInterceptor 回调增加第二个参数 params [详情](https://ask.dcloud.net.cn/question/129195)
* App平台、Web平台 优化 socket 连接 onClose 事件信息增加 code、reason 属性
* App平台、Web平台 优化 navigationBarBackgroundColor、navigationBarTextStyle 默认值 [详情](https://uniapp.dcloud.net.cn/collocation/pages.html#globalstyle)
* App平台 修复 Vue3 项目使用纯 nvue 开发时热重载跳转到首页的Bug [详情](https://ask.dcloud.net.cn/question/164673)
* App平台 修复 国际化配置新增语言兼容性不佳的Bug [详情](https://ask.dcloud.net.cn/question/165884)
* App平台 修复 Vue3 项目 nvue 页面配置 flex-direction 默认值无效的Bug [详情](https://ask.dcloud.net.cn/question/165497)
* App平台 修复 Vue3 项目 picker-view 组件使用 v-if 切换报错的Bug [详情](https://ask.dcloud.net.cn/question/166884)
* App平台 修复 Vue3 项目 vue 页面 text 组件嵌套 text 组件显示异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4215)
* App平台 修复 nvue 页面 switch 组件配置 type="checkbox" 后点击报错的Bug [详情](https://ask.dcloud.net.cn/question/168894)
* App-Android平台 修复 uni.onSocketClose 监听 WebSocket 关闭时 code 值为 1001 可能不触发回调的Bug
* App-Android平台 修复 实人认证 progressBarColor 设置为非法颜色值导致应用重启的Bug
* App-Android平台 修复 nvue 页面中存在特殊字符可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/166447)
* App-Android平台 修复 nvue 页面在App悬浮窗口模式下可能渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/156014)
* App-Android平台 修复 nvue text 组件中特殊字符不显示Bug [详情](https://ask.dcloud.net.cn/question/166014)
* App-Android平台 修复 反复进入退出App偶发 js 进程崩溃的Bug
* App-Android平台 修复 nvue 页面 map 组件在特定场景未自动回收销毁可能导致黑屏的Bug [详情](https://ask.dcloud.net.cn/question/168133)
* App-iOS平台 修复 uni.scanCode 扫码后跳转页面可能引起应用卡死的Bug [详情](https://ask.dcloud.net.cn/question/160090)
* Web平台 修复 浏览器启用隐私模式报错的Bug [详情](https://ask.dcloud.net.cn/question/164775)
* Web平台 修复 Vue3 项目 script setup 中 onError 无效的Bug [详情](https://ask.dcloud.net.cn/question/164798)
* Web平台 修复 高德导航目的地名称显示异常的Bug [详情](https://ask.dcloud.net.cn/question/165669)
* Web平台 修复 高德无定位权限未触发 fail 回调的Bug [详情](https://ask.dcloud.net.cn/question/166298)
* Web平台 修复 高德地图 callout 排版异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4230)
* Web平台 优化 使用 IP 定位时取消坐标系转换 [详情](https://github.com/dcloudio/uni-app/issues/4248)
* Web平台 修复 Vue3 项目 input 组件使用 v-model 时输入过快失焦的Bug [详情](https://ask.dcloud.net.cn/question/166821)
* Web平台 修复 Vue3 项目 longpress 事件对象缺少 touches 字段的Bug [详情](https://ask.dcloud.net.cn/question/166956)
* 小程序平台 优化 Vue2 项目增加 slotMultipleInstance 配置，支持作用域插槽渲染多个实例 [详情](https://github.com/dcloudio/uni-app/issues/3503)
* 小程序平台 优化 Vue2 项目 v-for 遍历对象时支持 index 参数 [详情](https://ask.dcloud.net.cn/question/163685)
* 小程序平台 修复 Vue2 项目事件表达式包含多个函数语句时编译后无效的Bug [详情](https://ask.dcloud.net.cn/question/147342)
* 小程序平台 修复 Vue3 项目页面样式文件编译后缺失的Bug [详情](https://ask.dcloud.net.cn/question/163867)
* 小程序平台 修复 Vue2 项目使用高版本 CopyWebpackPlugin 时 static 目录条件编译无效的Bug [详情](https://github.com/dcloudio/uni-app/issues/4181)
* 百度小程序平台、支付宝小程序平台 新增 支持运行到指定页面
* 微信小程序平台 新增 支持企业小程序 onNFCReadMessage 生命周期 [详情](https://ask.dcloud.net.cn/question/166024)
* 微信小程序平台 修复 Vue3 项目混合分包部分情况下接口调用报错的Bug [详情](https://github.com/dcloudio/uni-app/issues/4175)
* 支付宝小程序平台 优化 组件 styleIsolation 默认配置为 apply-shared
* 支付宝小程序平台 修复 Vue3 项目 page-meta 组件 foot-font-size 属性无效的Bug
* 字节跳动小程序平台 修复 aweme-data 组件渲染不正常的Bug [详情](https://ask.dcloud.net.cn/question/165295)
* uni统计2 新增 uniStatPageLog 参数，是否开启页面数据采集，默认为开启
* uts插件 App-Android平台 修复 console.log 无法输出对象中包含的 any 类型字段的Bug
* 【重要】新增 uts插件内可支持部分 uni 的 api，如`uni.showModel` [详情](https://uniapp.dcloud.net.cn/plugin/uts-uni-api.html)
* uts插件 App-Android平台 修复 函数参数不支持 boolean 类型的Bug
* uts插件 App-iOS平台 修复 console.log 输出 json 对象可能不正确的Bug
* uts插件 App-Android平台 新增 UTSAndroid.requestSystemPermission 申请系统权限 [详情](https://uniapp.dcloud.net.cn/plugin/uts-for-android.html#requestsystempermission)
* uts插件 App-Android平台 升级 kotlin-stdlib 为 1.8.10 版
* uts插件 App-Android平台 修复 Math.random() 返回数据精度不足的Bug
* uts插件 App-Android平台 修复 UTSAndroid.offAppActivityRequestPermissionsResult 传入参数不生效的Bug
* uni-ad 管理后台页面调整，调整App的基础广告、增强广告的分类概念 [详见](https://uniapp.dcloud.net.cn/uni-ad/release.html)
### App插件(含5+App和uni-app的App端)
* 【重要】新增 uni-AD 支持 uniMP激励视频广告，提升CPM、提升填充率 [详情](https://uniapp.dcloud.net.cn/uni-ad.html#unimp)
* 新增 一键登录支持 isCenterHint 参数设置未勾选服务条款时点击登录按钮的提示信息是否垂直居中显示 [详情](https://uniapp.dcloud.net.cn/univerify.html#%E5%AE%A2%E6%88%B7%E7%AB%AF-%E8%AF%B7%E6%B1%82%E7%99%BB%E5%BD%95%E6%8E%88%E6%9D%83)
* 更新 uni-AD SDK，对接618预算，其中优量汇SDK Android为 4.530.1400 版，iOS为 4.14.30 版；穿山甲SDK iOS为 5.4.0.0 版；穿山甲GroMore广告SDK iOS为 5.1.7.0 版；快手广告SDK Andoird为 3.3.44 版，iOS为 3.3.44 版；快手内容联盟SDK Android为 3.3.42 版；Sigmob广告联盟SDK Android为 4.12.1 版，iOS为 4.9.0 版；百度百青藤广告SDK Android为 9.29 版，iOS为 5.14 版
* Android平台 更新 友盟统计SDK为 9.6.1 版，适配华为应用市场审核政策调整
* Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.4.0 版；个推SDK为 3.2.17.0 版；适配华为应用市场审核政策调整
* Android平台 修复 部分场景下真机运行同步文件失败的Bug [详情](https://ask.dcloud.net.cn/question/169374)
* Android平台 修复 扫码界面拒绝权限提示文字不支持国际化的Bug [详情](https://ask.dcloud.net.cn/question/169217)
* Android平台 修复 安全检测可能报`存在数据库注入漏洞`的问题 [详情](https://ask.dcloud.net.cn/question/152576)
* Android平台 修复 蓝牙设备信息 BluetoothDeviceInfo 的 advertisData 字段可能会丢失数据的Bug [详情](https://ask.dcloud.net.cn/question/165119)
* Android平台 修复 App切换语言后重启可能出现闪屏的Bug [详情](https://ask.dcloud.net.cn/question/166730)
* Android平台 修复 某些情况下可能出现软键盘弹出后立即收起的Bug [详情](https://ask.dcloud.net.cn/question/161957)
* Android平台 修复 plus.navigator.updateSplashscreen 可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/164023)
* iOS平台 新增 配置 privacyRegisterMode 应用启动时是否获取 idfv，解决应用合规检测可能报同意隐私政策前读取 idfv 的问题 [详情](https://uniapp.dcloud.net.cn/collocation/manifest-app.html#privacyRegisterMode)
* iOS平台 更新 UniPush 使用的个推SDK为 2.7.4.2 版，解决默认获取定位权限的Bug
* iOS平台 更新 一键登录使用的个验SDK为 3.0.4.1 版，解决某些情况下会获取本地网络权限可能导致苹果审核被拒的Bug [详情](https://ask.dcloud.net.cn/question/166587)
* iOS平台 修复 plus.runtime.restart 后苹果应用内支付 IAP 无响应的Bug
* iOS平台 修复 进入包含视频播放控件 video 页面会打断音乐播放的Bug [详情](https://ask.dcloud.net.cn/question/165329)
* iOS平台 修复 导航栏 titleNView 设置 splitLine 样式可能显示不正常的Bug [详情](https://ask.dcloud.net.cn/question/164906)
* iOS平台 修复 从微信中唤起App时 plus.runtime.arguments 获取的参数可能不正确的Bug [详情](https://ask.dcloud.net.cn/question/166211)
### uni小程序SDK
* Android平台 修复 releaseWgtToRunPathFromPath 部分场景下可能阻塞的Bug

## 3.7.11.20230427
### uni-app插件
* 新增 UTS插件 在插件市场加密和计费销售，并支持源码销售 [详情](https://uniapp.dcloud.net.cn/plugin/publish.html#uts)
### uniCloud插件
* 修复 vue3项目 发布到web端后 uniCloud.SSEChannel的open方法报错的Bug

## 3.7.10.20230425
### uniCloud插件
* 【重要】新增 uni-ai 聚合多家ai引擎，帮助开发者快速将AI能力应用到自己的应用中 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html)
* 【重要】新增 uni-cms，全端的、云端一体的开源CMS内容管理系统，内置ai生成内容和广告解锁变现 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)
* 新增 基于uni-push构建sse通道，在云函数 return 前也可以给客户端发消息 [详情](https://uniapp.dcloud.net.cn/uniCloud/sse-channel.html)
* 新增 uni-ai 聊天接口支持steam流式响应 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai.html#chat-completion-stream)
* 新增 uni-ai-chat云端一体页面模板，开源的ai聊天示例。比uni-im更简单 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html)
* 新增 jql支持in语法，查询某字段和另一个表指定字段匹配的记录 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#enhanced-in)
* 新增 JQL语法 触发器内副表读取事件增加 primaryCollection 参数，值为本次联表查询的主表表名
* 调整 JQL语法 schema 内配置的动态 enum 校验数据时移除仅枚举500条的限制
* 调整 HBuilder新建opendb表时，如该表含有schema扩展js，会同时自动创建schema扩展js

## 3.7.9.20230324
### HBuilder
* 修复 语言服务 因Vue域名变更，导致代码助手中帮助文档URL跳转后显示404的Bug
* 修复 js-beautify格式化插件，缩进设置成`tab`时，ts文件格式化导致注释内的缩进不对的Bug
* 修复 3.7.8引出的 uniCloud schema.json文件，右键菜单点击下载DB Schema，HBuilderX闪退的Bug
* 修复 3.7.8引出的 MacOSX 某些低版本的操作系统，无检测到iOS手机的Bug

## 3.7.8.20230323
### HBuilder
* 新增 内置格式化插件 支持使用项目下.jsbeautifyrc配置文件 [详情](https://hx.dcloud.net.cn/Tutorial/extension/js-beautify)
* 修复 内置格式化插件 Vue文件ts代码不支持格式化的Bug
* 修复 语言服务 Vue文件 `this.xxx = ...`, xxx无法转到定义的Bug
* 修复 语言服务 uni-app cli ts项目，使用npm安装模块后，打开项目下vue文件导致语言服务崩溃的Bug
* 修复 语言服务 某些情况下ts语法校验不生效的Bug
* 优化 设置 语言服务配置 启用代码助手，修改配置项后，无需重启HBuilderX即可生效
* 修复 启用.editorconfig支持，当配置`insert_final_newline`时，偶发保存时误触代码助手的Bug
* 修复 启用.editorconfig支持，Vue文件如果最后一行未换行，保存时会导致文件内容错误的Bug
* 修复 MacOSX 运行到iOS App基座，设备选择窗口，某些情况下，iOS设备重复显示的Bug
* 【重要】调整 App真机运行 标准基座不再支持Android4.4（因内置的实人认证sdk不支持）。如不使用实人认证，自定义基座或云打包仍然支持Android4.4
* 新增 uni-app uts插件 运行到iOS支持debug调试 (需MacOSX) [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-ios.html)
### uni-app插件
* 【重要】App平台 新增 uni实人认证，uni.startFacialRecognitionVerify，姓名身份证和人脸活体比对，金融级安全保障 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
* Web、App平台 修复 NodesRef 无法获取 properties 的Bug [详情](https://ask.dcloud.net.cn/question/163535)
* Web平台 修复 高德地图缩放时会触发 markertap 事件的Bug [详情](https://ask.dcloud.net.cn/question/162763)
* App平台 优化 video 组件支持 isLive 属性
* App平台 修复 uni.uploadFile 接口 timeout 配置无效的Bug [详情](https://ask.dcloud.net.cn/question/163747)
* App平台 修复 Vue2 项目使用组合式 API 时 onPageScroll、onReachBottom 无效的Bug [详情](https://ask.dcloud.net.cn/question/162503)
* App-Android平台 修复 使用安全网络在部分设备可能引起崩溃的Bug
* App-Android平台 修复 nvue 页面 map 组件使用高德地图 marker 被点击时 label 可能被遮挡的Bug [详情](https://ask.dcloud.net.cn/question/156062)
* App-Android平台 修复 nvue 页面 map 组件使用谷歌地图 marker 的 label 设置锚点时位置会出现偏差的Bug
* App-iOS平台 修复 nvue 页面组件设置 border 样式偶现崩溃的Bug [详情](https://ask.dcloud.net.cn/question/164236)
* App-iOS平台 修复 nvue 页面 loading 组件事件触发异常的Bug [详情](https://ask.dcloud.net.cn/question/163143)
* 小程序平台 修复 Vue2 项目部分情况下 v-for 嵌套 v-model 编译后无效的Bug
* 京东小程序平台 新增 支持编译 Vue3 项目 [详情](https://github.com/dcloudio/uni-app/pull/4023)
* 微信小程序平台 新增 支持 Skyline gesture [详情](https://ask.dcloud.net.cn/question/162700)
* 微信小程序平台 修复 share-element 等组件部分属性无效的Bug [详情](https://ask.dcloud.net.cn/question/163926)
* 支付宝小程序平台 修复 Vue3 项目 page-meta 组件 page-style 属性无效的Bug [详情](https://ask.dcloud.net.cn/question/163563)
* 字节跳动小程序平台 修复 uni.chooseImage 不支持 sizeType 配置的Bug [详情](https://ask.dcloud.net.cn/question/163986)
* uts插件 App-Android平台 修复 3.7.3版本引出的 返回 JSON 对象中 is 开头的属性名称会被修改的Bug
### uniCloud插件
* 【重要】新增 uni实人认证，云端一体，金融级安全保障，包括云函数扩展库、web控制台 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/intro)
* 【重要】uni-id-pages 新增实名认证功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#frv)
* 新增 uni-frv-external 云端一体模板，用于非uniCloud业务使用实名认证功能 [详情](https://uniapp.dcloud.net.cn/uniCloud/frv/dev.html#uni-frv-external)
* 新增 uni-cloud-s2s公共模块 用于解决uniCloud服务空间与传统服务器通讯时互相信任的问题 [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-cloud-s2s.html)
* 优化 安全网络 微信小程序端支持非uni-id的应用 [详情](https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#mp-weixin-without-uni-id-pages)
* 升级 阿里云 客户端连接云函数最大超时时间由20秒调整为40秒
* 升级 阿里云 云函数URL化的自带域名访问QPS限制由100调整为1000
* 升级 uniCloud控制台 阿里云 前端网页托管 cdn刷新次数限制由每小时3次调整为每小时10次
* 修复 uniCloud控制台 阿里云 创建数据表时达到集合数量上限后删除集合不能实时刷新数量限制的Bug
* 修复 阿里云 部分事务操作报错不清晰的Bug
* 修复 本地调试插件 部分情况下修改本地js文件不能实时生效的Bug
* 修复 本地调试插件 部分情况下修改云函数依赖 package.json 文件被改为错误的内容的Bug [详情](https://ask.dcloud.net.cn/question/165273)
* 调整 本地调试插件 调用本地云函数时由每个项目固定4个云函数实例调整为最小2个实例最大8个实例
* 调整 本地调试插件 调用本地云函数时当所有实例均被占用时不再等待实例空闲，直接拒绝本次调用请求
* 调整 客户端sdk开发调试时连本地网络的时机由应用启动时连接调整为访问本地云函数时才会连接
* 修复 客户端sdk uniCloud.init、uniCloud.database 方法在关联正式版阿里云服务空间时仍默认使用公测版 endpoint 的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 更新 微信登录、分享、支付 SDK 为 6.8.0 版
* Android平台 修复 上架华为应用市场审核误报集成了`com.netease(网易;网易IM;网易云信)`SDK的bug [详情](https://ask.dcloud.net.cn/question/163991)
* Android平台 修复 plus.io.FileReader 的 readAsDataURL 返回 base64 字符中包含换行符的Bug [详情](https://ask.dcloud.net.cn/question/164955)
* Android平台 修复 暗黑模式下 tabbar 页面切换可能出现异常的Bug [详情](https://ask.dcloud.net.cn/question/163416)
* Android平台 修复 一键登录 按钮阴影可能显示异常的Bug [详情](https://ask.dcloud.net.cn/question/163054)
* Android平台 修复 3.7.3版引出的 在小米 Android13 设备图片选择功能异常的Bug [详情](https://ask.dcloud.net.cn/question/163903)
* Android平台 修复 targetSdkVersion 设置为 33 时在 Android13 设备微信登录、分享不触发回调的Bug
* iOS平台 修复 视频播放控件 video 设置 controls 为 false 时全屏状态没有隐藏标题栏的Bug [详情](https://ask.dcloud.net.cn/question/160712)
* iOS平台 修复 调用 plus.runtime.restart 重启应用后导致一键登录无响应的Bug

## 3.7.3.20230223
### HBuilder
* 新增 代码块包围 在选区外包裹if等代码块 (菜单编辑->包围->代码块包围，快捷键win：`Ctrl+Alt+T`、mac：`Command+Alt+T`) [详情](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=surround)
* 新增 项目管理器 字体大小调节 (菜单设置->常用配置) [详情](https://hx.dcloud.net.cn/Tutorial/setting?id=project-explorer-font-size)
* 修复 语言服务 Vue3-ts项目 image src属性报错的Bug [详情](https://ask.dcloud.net.cn/question/162064)
* 修复 语言服务 uni-app main.js中通过Vue.prototype.xxx定义的Vue变量或方法，在vue文件中，this.无法提示的Bug [详情](https://ask.dcloud.net.cn/question/147190)
* 修复 语言服务 Vue文件，当只有script和style节点，没有template节点时，文档结构图显示空白的Bug
* 修复 多光标在同一行时，复制或剪切，会复制多行内容的Bug
* 修复 转到定义耗时较长时，可能无法转到定义的Bug
* 修复 某些情况下，因编辑器主题配置异常，导致HBuilderX无法启动的Bug
* 修复 Markdown code区域无法高亮显示空白字符的Bug
* 修复 Markdown 从WPS复制表格数据粘贴为Markdown表格语法转换错误的Bug
* 修复 查找索引符号 按下esc取消后，编辑器不会自动滚动到原来的光标所在位置的Bug
* 修复 设置界面和manifest.json界面，点击复选框控件上的文字右边空白区域也会导致选中/取消的Bug
* 修复 uniCloud 云函数 当云函数目录下存在中文文件时，上传并运行操作失败的Bug
* 新增 App真机运行 MacOSX 运行项目到iOS真机，自动启动App （需MacOSX安装跟iOS手机系统相匹配的Xcode）[详情](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#ios-app-automatically-open)
* 新增 App真机运行 Windows iOS标准基座 支持使用Apple证书签名，签名后可运行标准基座到iOS真机设备 [详情](https://uniapp.dcloud.net.cn/tutorial/run/ios-apple-certificate-signature.html)
* 新增 App真机运行 Windows 设备选择窗口 基座选择列表，自定义基座和标准基座支持使用&快捷键进行切换
* 新增 uni-app 微信小程序发行，自动上传到微信平台，支持配置微信ci机器人编号 [详情](https://uniapp.dcloud.net.cn/tutorial/build/publish-mp-weixin-cli.html)
* 新增 uni-app uts插件 运行到Android支持debug调试 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug.html)
* 优化 uni-app uts插件 iOS编译，提升编译速度
* 修复 uni-app 运行到Chrome 每次运行打开的都是新的Chrome实例的Bug
### uni-app插件
* 【重要】新增 uts 组件。可使用uts语言开发原生扩展组件 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html)
* 新增 uni-vue-devtools 插件，方便查看、修改 data 及审查自定义组件 [详情](https://uniapp.dcloud.net.cn/tutorial/debug/uni-vue-devtools.html)
* 修复 Vue3 项目 uni.scss 中变量条件编译无效的Bug [详情](https://ask.dcloud.net.cn/question/162271)
* Web平台、App平台 新增 page-meta 组件支持 scroll-top 属性
* Web平台 修复 video 组件 show-progress 属性不生效的Bug [详情](https://github.com/dcloudio/uni-app/issues/3908)
* Web平台 修复 input 组件 type=digit 时清空输入框后 placeholder 不显示的Bug [详情](https://ask.dcloud.net.cn/question/160726)
* Web平台 修复 Vue3 项目 onNavigationBarSearchInputConfirmed 无效的Bug [详情](https://ask.dcloud.net.cn/question/154740)
* Web平台 修复 Vue3 项目切换 tabbar 页面不触发 onTabItemTap 的Bug
* Web平台 修复 标题栏按钮文字在国际化后显示异常的Bug [详情](https://ask.dcloud.net.cn/question/162369)
* Web平台 修复 Vue3 项目 picker 打包后卡死的Bug [详情](https://ask.dcloud.net.cn/question/162091)
* Web平台 修复 Vue2 项目 内置浏览器高德地图 uni.getLocation 报错的Bug [详情](https://ask.dcloud.net.cn/question/156303)
* App平台 新增 animation-view 组件 即 lottie [详情](https://uniapp.dcloud.net.cn/component/animation-view.html)
* App平台 修复 Vue3 项目中原生导航栏 type 为 transparent 时，自定义 buttons 在导航栏上滑至顶端时颜色不改变的Bug [详情](https://ask.dcloud.net.cn/question/154074)
* App平台 修复 Vue3 项目 movable-area 组件改变高度后可移动区域的高度不会更新的Bug [详情](https://ask.dcloud.net.cn/question/159723)
* App平台 修复 Vue3 项目 preloadPage 生命周期触发异常的Bug [详情](https://ask.dcloud.net.cn/question/160416)
* App-Android平台 修复 3.6.17版升级fastjson引出的 uni.sendSocketMessage 无法发送 ArrayBuffer 数据的Bug [详情](https://ask.dcloud.net.cn/question/161872)
* App-Android平台 修复 nvue 页面 cell 组件高度超过 list 自身高度会频繁触发 loadmore 事件的Bug [详情](https://ask.dcloud.net.cn/question/161972)
* App-Android平台 修复 nvue 页面 input 组件 placeholder 属性改变后 placeholder-style、placeholder-class 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/161678)
* App-Android平台 修复 nvue 页面 map 组件的 marker 设置 anchor 时气泡显示异常的Bug [详情](https://ask.dcloud.net.cn/question/161180)
* App-Android平台 修复 nvue 页面 map 组件更新 marker 时 cover-view 不显示的Bug [详情](https://ask.dcloud.net.cn/question/161998)
* App-Android平台 修复 uni.getSystemInfo 在部分设备获取 deviedId 值可能相同的Bug [详情](https://ask.dcloud.net.cn/question/163174)
* 小程序平台 新增 pages.json 支持配置 entryPagePath 属性 [详情](https://ask.dcloud.net.cn/question/126216)
* 小程序平台 修复 Vue3 项目 页面作为组件引用，导航栏标题配置无效的Bug [详情](https://ask.dcloud.net.cn/question/162745)
* 小程序平台 修复 Vue2 项目部分情况下 v-for 嵌套 v-model 编译后无效的Bug
* 微信小程序平台 修复 Vue2 项目中使用 uni.env 时返回值不正确的Bug [详情](https://ask.dcloud.net.cn/question/159865)
* 支付宝小程序平台 修复 钉钉小程序使用 uni.saveImageToPhotosAlbum 报错的Bug [详情](https://ask.dcloud.net.cn/question/159183)
* 支付宝小程序平台 修复 uni.getSystemInfo 返回的 platform 属性在模拟器中不正确的Bug
* QQ小程序平台 修复 Vue3 项目 video 组件 ended 事件在真机不触发的Bug [详情](https://ask.dcloud.net.cn/question/155602)
* 快手小程序平台 修复 Vue3 项目 button getPhoneNumber 触发异常的Bug [详情](https://github.com/dcloudio/uni-app/issues/4113)
* uts插件 App平台 新增 Math 相关函数支持
* uts插件 App-Android平台 修复 Array.sort函数不生效的Bug
* uts插件 App-iOS平台 新增 支持调用 .a 静态库 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#ios-libs)
* uts插件 App-iOS平台 修复 使用多层嵌套复杂对象时格式化不正确的Bug
* uts插件 App-iOS平台 修复 调用方法时参数大于实际数量时功能可能异常的Bug
* uts插件 App-iOS平台 修复 组件热刷新后属性初始值不生效的Bug
### uniCloud插件
* 新增 schema扩展js支持引入公共模块及扩展库 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql.html#deps-of-jql)
* 新增 JQL触发器 方法新增一些参数 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* 新增 JQL触发器 支持联表查询时副表的读取触发器，beforeReadAsSecondaryCollection 和 afterReadAsSecondaryCollection [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-timing)
* 调整 JQL触发器 参数内的 subCollection 改为 secondaryCollection。老参数仍可访问但会给出警告 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-param)
* 修复 JQL语法字符串格式查询语句内使用数组且其中包含负数时报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
* 修复 云对象未返回值时客户端报错的Bug [详情](https://ask.dcloud.net.cn/question/161852)
* 修复 阿里云正式版删除文件出错未返回错误信息的Bug
* 本地调试插件 修复 云函数内使用 console.warn 打印日志输出到控制台颜色不正确的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 新增 隐私政策提示框支持 backToExit 配置是否响应点击系统返回键退出应用，解决部分应用市场上架审核可能提示`系统返回键失灵`的问题 [详情](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html)
* Android平台 更新 uni-AD 腾讯优量汇广告SDK 为 4.500.1370 版；Sigmob广告联盟SDK 为 4.9.0 版
* Android平台 更新 云端打包环境 compileSdkVersion 为 32
* Android平台 修复 隐私合规检测可能报`隐私弹窗中处理超链接的过程中调用到了获取设备sim卡国家信息的api`的Bug [详情](https://ask.dcloud.net.cn/question/161479)
* Android平台 修复 图片选择在 Android13 设备提示没有权限的Bug [详情](https://ask.dcloud.net.cn/question/160879)
* Android平台 修复 plus.io.FileReader 的 readAsDataURL 读取数据时未按 slice 分割位置读取的Bug [详情](https://ask.dcloud.net.cn/question/160467)
* Android平台 修复 视频播放控件 VideoPlayer 在视频缓冲时触发 timeupdate 事件的Bug
* Android平台 更新 Paypal SDK 为 0.8.8 版，修复无法正常支付的Bug [详情](https://ask.dcloud.net.cn/question/154976)
* Android平台 修复 3.6.17版引出的 一键登录 全屏模式下配置其他登录按钮可能引起显示异常的Bug
* Android平台 修复 plus.downloader.clear 无法清除持久化存储的下载任务的Bug [详情](https://ask.dcloud.net.cn/question/162099)
* Android平台 修复 使用 UniPush 上架应用市场审核可能报`频繁自启动或关联启动第三方App`的Bug [详情](https://ask.dcloud.net.cn/question/162680)
* Android平台 修复 真机运行时应用沙盒目录 _doc 中的文件会被清除的Bug
* iOS平台 新增 苹果应用内支付 IAP 支持订阅促销优惠 [详情](https://uniapp.dcloud.net.cn/api/plugins/payment.html#%E4%BF%83%E9%94%80%E4%BC%98%E6%83%A0%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)
* iOS平台 更新 一键登录使用的个验SDK为 3.0.3.0 版
* iOS平台 修复 音频播放 AudioPlayer seekTo 跳转指定位置不支持毫秒的Bug
### uni小程序SDK
* Android平台 新增 适配支持暗黑模式
* Android平台 修复 打开uni小程序切换应用到后台运行一段时间后可能引起崩溃的Bug [详情](https://ask.dcloud.net.cn/question/141868)

## 3.6.18.20230117
### uni-app插件
* Web平台 修复 3.6.17版引出的 Vue3 项目 scroll-view 组件插槽部分情况下渲染异常的Bug [详情](https://ask.dcloud.net.cn/question/149557)
* 微信小程序平台 修复 3.6.17版引出的企业版微信运行报错的Bug
* 微信小程序平台 修复 3.6.17版引出的 Vue2 项目部分情况下作用域插槽中访问 length 属性报错的Bug
### App插件(含5+App和uni-app的App端)
* Android平台 修复 3.6.17版引出的 系统导航栏按键颜色与背景颜色相同的Bug [详情](https://ask.dcloud.net.cn/question/161501)
* Android平台 修复 3.6.17版引出的 自定义隐私政策提示框时启动应用可能出现卡死的Bug [详情](https://ask.dcloud.net.cn/question/161634)

## 3.6.17.20230112
### HBuilder
* 修复 内置终端 绿柔主题下，选中终端文本，选中颜色没有显示的bug
* 优化 Markdown一键分享，网页所需的css资源和js资源，同步上传到uniCloud前端网页托管
* 修复 uni-app 运行到iOS模拟器，开启uni调试，打开后调试窗体显示空白的Bug
* 优化 原生App-云打包 Android打包 打包窗口不再显示`使用DCloud老版证书`（2022年11月30日以后创建的应用及以前未使用过老版本证书的应用不能再使用DCloud老版证书）
### uni-app插件
* App-Vue平台、Web平台 优化 input 组件支持 inputmode 属性 [详情](https://uniapp.dcloud.net.cn/component/input.html#inputmode)
* App平台 修复 Vue3 项目 image 组件使用 base64 显示异常的Bug [详情](https://ask.dcloud.net.cn/question/158368)
* App-Android平台 修复 使用 tabbar 后页面多次跳转可能导致底部系统导航栏颜色变化的bug
* App-Android平台 修复 nvue 页面 live-pusher 组件拒绝相机权限后再手动开启，回到应用后可能无法调用相机预览的Bug [详情](https://ask.dcloud.net.cn/question/158518)
* App-iOS平台 修复 nvue 页面 map 组件使用自定义地图样式后切换卫星图无效的Bug [详情](https://ask.dcloud.net.cn/question/159316)
* App-iOS平台 修复 使用模拟器开启调试后启动应用白屏的Bug [详情](https://ask.dcloud.net.cn/question/160363)
* App-iOS平台 修复 Vue3 项目中 input 组件 disabled 无法动态修改的Bug [详情](https://ask.dcloud.net.cn/question/157958)
* Web平台 修复 input 组件输入负数带出上次结果的Bug [详情](https://ask.dcloud.net.cn/question/159447)
* Web平台 修复 Vue3 项目 uni.navigateTo eventChannel 只会调用一次的Bug [详情](https://ask.dcloud.net.cn/question/155922)
* Web平台 修复 Vue3 项目 scroll-view 组件滚动频繁触发视图更新的Bug [详情](https://ask.dcloud.net.cn/question/149557)
* Web平台 修复 Vue3 项目 picker 组件 end 属性读取错误的Bug [详情](https://github.com/dcloudio/uni-app/issues/4075)
* Web平台 修复 uni.setTabBarItem 导致 tab 切换生命周期异常的Bug [详情](https://ask.dcloud.net.cn/question/160739)
* 微信小程序平台 修复 Vue2 项目 模板中无法观测数组长度变化的Bug [详情](https://github.com/dcloudio/uni-app/issues/1827)
* 支付宝小程序平台 修复 Vue3 项目 使用内联样式运行报错的Bug [详情](https://ask.dcloud.net.cn/question/159362)
### uniCloud插件
* JQL语法 修复 使用 setUser 方法未传 permission 参数且使用触发器时报错的Bug
* JQL语法 修复 add 方法传递的字段值为对象且其中包含null值时报错的Bug
* JQL语法 新增 数据库触发器增加 triggerContext 参数，用于在 before 和 after 内共享数据 [详情](https://uniapp.dcloud.net.cn/uniCloud/jql-schema-ext.html#trigger-context)
* 阿里云 调整 正式版云存储单文件100MB限制调整为5GB
### App插件(含5+App和uni-app的App端)
* Android平台 更新 fastjson SDK为 1.2.83 版，解决安全检测可能报`Fastjson反序列化远程代码执行漏洞`的问题
* Android平台 更新 一键登录使用的个验SDK为 3.1.0.0 版，优化初始化和预登录速度
* Android平台 更新 UniPush 使用的个推核心组件SDK为 3.2.1.0 版；谷歌渠道个推 sdk-for-gj 为 4.4.3.1 版；解决发布到 Google Play 商店可能被下架的问题 [详情](https://ask.dcloud.net.cn/question/160249)
* Android平台 修复 3.6.13版引出的 一键登录 登录完成后自动关闭登录界面，以及登录按钮 loading 动画效果缺失的Bug [详情](https://ask.dcloud.net.cn/question/159898)
* Android平台 修复 3.6.13版引出的 使用 record 模块后 wgt 升级提示没有配置 record 模块的Bug [详情](https://ask.dcloud.net.cn/question/161167)
* Android平台 修复 上架应用市场审核可能报`频繁自启动或关联启动第三方应用`的Bug [详情](https://ask.dcloud.net.cn/question/160965)
* Android平台 修复 连续多次调用 createBLEConnection 连接蓝牙设备，无法连接设备也可能触发成功回调的Bug [详情](https://ask.dcloud.net.cn/question/113070)
* Android平台 修复 上架OPPO应用市场可能提示`含数字天堂(dcloud)广告插件`的Bug [详情](https://ask.dcloud.net.cn/question/160501)
* Android平台 修复 隐私政策提示框在未适配 disagreeMode 模式情况下仅显示一次的Bug [详情](https://uniapp.dcloud.net.cn/tutorial/app-disagreemode.html)
* iOS平台 修复 自定义基座真机运行可能导致 setStorage 保存的数据丢失的Bug [详情](https://ask.dcloud.net.cn/question/159903)
* iOS平台 修复 plus.nativeUI.toast 设置 style 为 inline 时 iconWidth/iconHeight 属性失效的Bug [详情](https://ask.dcloud.net.cn/question/160192)
* iOS平台 修复 uni-AD 优量汇开屏广告展示期间弹出提示框可能导致开屏界面不会关闭的Bug
* iOS平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备返回数据没有 advertisData 字段的Bug [详情](https://ask.dcloud.net.cn/question/160178)

## 历史更新日志
[https://update.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_release_archive_2022.html](https://update.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_release_archive_2022.html)

