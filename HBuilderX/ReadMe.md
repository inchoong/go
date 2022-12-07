# <a href="https://dcloud.io/hbuilderx.html" title="HBuilderX-高效极客技巧">HBuilder X</a> - 高效极客技巧 - Release Notes | <a href="https://dcloud.io/" title="DCloud - HBuilder、HBuilderX、uni-app、uniapp、5+、5plus、mui、wap2app、流应用、HTML5、小程序开发、跨平台App、多端框架">DCloud</a>（数字天堂）
======================================

<a href="https://coding.imooc.com/class/521.html" title="(￥348元)实战课程:**uni-app从入门到进阶 系统完成项目实战**_慕课网">实战课程:uni-app从入门到进阶 系统完成项目实战_慕课网</a>(￥348元)
<blockquote>uni-app从入门到进阶 系统完成项目实战
<blockquote>专门为小程序0基础学员而设，让你拥有能上线的作品</blockquote></blockquote>

## 3.6.5.20221121
* 修复 内置浏览器 Windows 某些电脑上，拖动内置浏览器，HBuilderX出现闪退的Bug
* 修复 uni-app 运行到内置浏览器 某些情况下，Cookie不一致的Bug
* 【uni-app插件】
  + 修复 Vue2 项目中 TypeScript 使用 onLoad 等生命周期报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/157035)
  + App-Android平台 修复 uni.getStorageSync 在某些情况下可能报`SyntaxError`错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/154284)
  + 百度小程序平台 修复 onInit 生命周期不触发的Bug [(**详情**)](https://ask.dcloud.net.cn/question/154352)
  + 支付宝小程序平台 修复 uni.showToast 不支持 duration 参数的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147279)
  + 支付宝小程序平台 修复 uni.showLoading 提示 mask 参数无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/156944)
* 【uniCloud插件】
  + 【重要】阿里云商用版正式上线 [(**详情**)](https://ask.dcloud.net.cn/article/40144)

## 3.6.4.20220922
* 修复 语言服务 CSS大文件 CSS代码提示速度过慢的Bug
* 修复 语言服务 uni-app项目(非CLI) 当项目下存在tsconfig.json时，某些情况下，语法校验误报的Bug
* 修复 语言服务 某些情况下，语言服务频繁报错崩溃，HBuilderX窗口右下角频繁弹窗报错的Bug
* 修复 3.6.2引出的 App真机运行 Android Studio制作的自定义基座，运行到Android设备报错的Bug
* 修复 3.6.2引出的 App真机运行 uni-app 运行到iOS模拟器，修改nvue文件，无法同步修改的Bug
* 修复 3.6.2引出的 App真机运行 uni-app 运行到手机，某些情况下，控制台显示编译成功之后没有反应的Bug
* 修复 3.6.2引出的 App真机运行 uni-app 运行到Android 4.4模拟器，提示找不到基座的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153826)
* 修复 App-云打包 新版支付宝SDK更新，导致Android 安心打包失败的Bug
* 【uni-app插件】
  + 修复 uni-app App调试插件 运行空白的Bug 
  + 修复 HBuilderX 3.6.3 版本引出的 uni.onPushMessage 监听不到推送消息及通知栏消息的点击事件 [(**详情**)](https://ask.dcloud.net.cn/question/153964)
  + App-Android平台 修复 3.6.2版本引出 input 组件自动获取焦点可能失效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153481)
* 【uniCloud插件】
  + 修复 HBuilderX 3.6.2 版本引出的客户端连接本地腾讯云云函数时在云函数内调用云函数报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 本地打包生成的自定义基座可能无法识别安装的Bug
  + Android平台 修复 3.6.2版本引出的 在 Android4.4 设备无法正常运行的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153910)
  + iOS平台 更新 uni-AD 今日头条穿山甲SDK更新为 4.8.0.3 版，穿山甲Gromore SDK更新为 3.7.0.0 版
  + iOS平台 修复 uni-AD 穿山甲Gromore 激励视频偶现可能无法显示的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153717)
  + iOS平台 修复 3.6.2版本引出的 uni原生语言插件Hook不到applicationWillEnterForeground、applicationDidEnterBackground等系统事件的Bug
  + iOS平台 修复 安全检测可能报获取设备idfv的Bug

## 3.6.3.20220917
* 修复 3.6.2引出的 HBuilderX 关闭标签卡，某些情况下出现闪退的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153398)
* 修复 3.6.2引出的 Windows 内置浏览器 手机设备模式 无法选择元素的Bug
* 修复 HBuilderX 代码提示过程中切换到其它程序，某些情况下，代码提示窗口会覆盖在其它程序上面的Bug
* 修复 3.6.2引出的 语言服务 uni-app CLI项目 px转rpx失效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153384)
* 修复 3.6.2引出的 控制台日志 某些类型的日志输出错误的Bug
* 修复 3.6.2引出的 uni-app 运行到iOS模拟器，控制台日志被截断或输出不全的Bug
* 修复 3.6.2引出的 uni-app 运行到Android模拟器，Windows上某些Android模拟器运行失败的Bug
* 【uni-app插件】
  + 小程序平台 修复 onReady 生命周期触发两次的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153422)
  + App平台 修复 UniPush 2.0 在vue2项目中 启用离线推送后，获取不到 pushClientId 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/153322)
* 【uniCloud插件】
  + 【重要】uni-starter 升级2.0版，支持uni-id-pages和uni-id-co，并大幅重构 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-starter.html)
  + 【重要】uni-admin 升级2.0版，支持uni-id-pages和uni-id-co [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/admin.html)
  + uni-id-pages 新增 管理员注册页面，并提供配置项`isAdmin`区分是否为管理端 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=8577)
  + uni-id-pages 新增 登录成功后三种自动跳转行为；优先级依次为：路由携带(`uniIdRedirectUrl`参数) > 返回上一路由 > 跳转首页 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=8577)

## 3.6.2.20220914
* 【重要】App真机运行 iOS真机不再支持使用标准基座，请使用自定义基座运行真机或使用iOS模拟器 [(**详情**)](https://ask.dcloud.net.cn/article/40041)
* 【重要】新增 uts语法支持。使用ts开发原生 [(**详情**)](https://uniapp.dcloud.io/tutorial/syntax-uts.html)
* 新增 查找引用功能。支持对js、ts变量方法点右键查找
* 优化 Windows 内置浏览器 升级Cef版本到90.6.7
* 新增 HBuilderX设置 插件配置 增加配置项 启用JavaScript校验、启用TypeScript校验
* 新增 语言服务 内置语法校验 支持warning级别
* 新增 语言服务 vue、js内变量语法实时校验（js校验，需要在【设置 - 插件配置】中开启）
* 新增 语言服务 vue3 `style module`支持代码提示
* 新增 语言服务 vue2&3 `插槽`支持代码提示
* 新增 语言服务 vue2&3 script 区域支持自动导包
* 修复 语言服务 vuedoc 在 script setup 内不生效的bug
* 修复 语言服务 vue3 在 script setup 内 import 的自定义组件，在 template 区域无法提示的Bug
* 修复 语言服务 修改函数调用的名称时，会重复生成`()`的Bug
* 修复 语言服务 特殊String 不支持 `if(idstr === '|')` 写法的Bug
* 修复 语言服务 vue template 内变量悬浮不生效的Bug
* 修复 语言服务 vue cli项目，vue script 区域无法识别项目下 tsconfig.json 的Bug
* 修复 语言服务 uniCloud.importObject()，云对象修改后，代码提示、悬浮不能实时生效的Bug
* 优化 语言服务 uniCloud.importObject()，调用云对象上的方法时参数及返回值的代码提示
* 修复 语言服务 遵循 vetur 规范的 framework包 安装卸载的时候不能实时生效的Bug
* 修复 语言服务 html script 中引用其他文件的变量和函数悬浮不生效的Bug
* 修复 语言服务 html script 中引用其他文件的函数时解析返回值和参数类型不正确的Bug
* 修复 语言服务 底部状态栏框架语法库，移除时无法生效的Bug
* 优化 语言服务 设置px转rem后，转换提示放到代码提示的第一项
* 修复 语言服务 JavaScript `Object.`不提示es6+新增方法的Bug
* 修复 语言服务 `import xxx from 'XXX.vue'` 当不带vue后缀，提示模块找不到，以及无法转到定义的Bug
* 修复 语言服务 jsx和tsx文件 敲字符`.`时无法自动触发代码提示的Bug
* 修复 编辑器 关闭选项卡 某些情况下，没有记忆折叠状态的Bug
* 新增 标签卡 右键菜单 增加菜单 向左移动标签卡、向右移动标签卡
* 修复 Windows HBuilderX未启动的情况下，导入插件市场插件，首次导入UI视图显示空白的Bug
* 修复 多文件字符搜索 某些情况下，跳转位置错误的Bug
* 修复 转到定义到另一个文件后，后退时，光标跳转到该文件开始，而不是转到定义前的位置的Bug
* 新增 新建项目 HBuilderX插件 增加国际化示例模板
* 修复 调试视图 变量 Global节点 某些情况下，UI显示错乱的Bug
* 修复 HBuilderX 保存文件 utf-8 格式文件无文件头标识字节 0xEFBBBF的Bug [(**详情**)](https://ask.dcloud.net.cn/question/112186)
* 新增 HBuilderX英文 发行 H5发行及小程序发行窗口 窗口UI文本国际化
* 修复 App-云打包 某些情况下 项目下单个静态资源文件过大(比如超过100M)时 无法提交打包的Bug
* 修复 App-云打包 Windows 某些情况下，提交打包，HBuilderX出现闪退的Bug
* 优化 App真机运行 使用Node运行，不再依赖Java
* 新增 App真机运行 设备选择窗口 增加选择基座功能
* 修复 App真机运行 Windows 当项目路径存在中文，运行到 iOS设备，App页面显示异常的Bug
* 修复 App真机运行 某些情况下，安装自定义基座失败的Bug
* 修复 uni-app manifest.json uniPush字段 某些情况下变成 null 的Bug
* 修复 uni-app manifest.json 应用名称国际化后，打包界面，应用名称显示%%的Bug
* 调整 uni-app manifest.json 左侧“H5配置”改名为“Web配置
* 【uni-app插件】
  + 【重要】新增 uts Android版插件 [(**详情**)](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)
  + 修复 项目路径包含括号时编译异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150173)
  + App平台 优化 vue2 项目 web-view 组件通过 webviewStyles 设置更多样式 [(**详情**)](https://ask.dcloud.net.cn/question/149212)
  + App平台 优化 vue 页面 web-view 组件内页面默认支持绘制到安全区外 [(**详情**)](https://ask.dcloud.net.cn/question/149472)
  + App平台 修复 openLocation、chooseLocation 在应用语言改变时没有跟随变化的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149216)
  + App平台 修复 vue 页面 cover-view 组件 flex 布局无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151697)
  + App平台 修复 vue3 项目 uni.getSystemInfo 获取 windowHeight 值不准确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150862)
  + App平台 修复 vue3 项目 vue 页面 map 组件更新中心坐标后显示错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151438)
  + App平台 修复 vue3 项目切换 tabbar 页面时调用 uni.createVideoContext 的 pause 无法暂停播放的Bug[(**详情**)](https://ask.dcloud.net.cn/question/151933)
  + App-Android平台 新增 uni.scanCode autoZoom 属性，可控制扫码时是否启用自动放大功能 [(**详情**)](https://uniapp.dcloud.net.cn/api/system/barcode.html)
  + App-Android平台 修复 nvue map 组件 maker 点聚合坐标重叠无法展现的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149665)
  + App-Android平台 修复 nvue map 组件 polyline、polygon 清空数据不生效的Bug
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 保存网络图片可能覆盖上次保存的图片的Bug [(**详情**)](https://ask.dcloud.net.cn/question/125357)
  + App-Android平台 修复 picker 组件获取焦点异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150454)
  + App-Android平台 修复 nvue 页面 map 组件 customCallout 设置图片可能引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150166)
  + App-Android平台 修复 bindingx 执行 evaluateColor 可能出现异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151759)
  + App-Android平台 修复 uni.reLaunch 打开非 tabbar nvue 页面可能依然显示 tabbar 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143792)
  + App-Android平台 修复 GooglePlay 渠道包无法正常使用高德地图的Bug [(**详情**)](https://ask.dcloud.net.cn/question/152668)
  + App-Android平台 修复 nvue 作为首页使用 picker 可能引起应用无响应的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151819)
  + App-iOS平台 修复 uni.setTabBarItem 动态更新 icon 可能不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149955)
  + App-iOS平台 修复 nvue map 组件使用 Google 地图时，多个页面中使用地图组件可能无法正常加载的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150080)
  + App-iOS平台 修复 uni.getSystemSetting 获取的 bluetoothEnabled、locationEnabled 值不准确的Bug
  + App-iOS平台 修复 nvue 页面 map 组件 marker 调用 moveAlong 方法没有中断前一次动画的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151411)
  + App-iOS平台 修复 3.5.2 引出的 nvue 页面 ad-content-page 组件在某些场景可能引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151778)
  + App-iOS平台 修复 uni.openLocation 底部安全区适配问题 [(**详情**)](https://ask.dcloud.net.cn/question/150074)
  + App-iOS平台 修复 uni.chooseLocation 可能引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/152367)
  + App-iOS平台 修复 nvue tabbar 页面 uni.reLaunch 不触发 onUnload 生命周期的Bug [(**详情**)](https://ask.dcloud.net.cn/question/152738)
  + Web平台 新增 支持配置和使用高德地图 [(**详情**)](https://uniapp.dcloud.io/collocation/manifest?id=h5sdkconfigmaps)
  + Web平台 优化 web-view 组件支持 fullscreen 属性 [(**详情**)](https://uniapp.dcloud.net.cn/component/web-view.html)
  + Web平台 修复 vue3 项目 canvas 组件 touch 事件 stop、prevent 修饰符无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148195)
  + Web平台 修复 vue3 项目 css 环境变量 --window-top 计算错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150842)
  + Web平台 修复 vue3 项目发行模式 showLoading 图标大小显示错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149819)
  + Web平台 修复 custom-tab-bar 组件使用 uni.setTabBarItem 设置 visible 无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/132947)
  + Web平台 修复 调用 uni.setClipboardData 会弹起键盘的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3569)
  + 小程序平台 优化 小程序组件内部支持使用 kebab-case 事件名 [(**详情**)](https://github.com/dcloudio/uni-app/issues/1802)
  + 小程序平台 修复 v-for 内使用复杂表达式后 v-model 失效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3173)
  + 支付宝小程序、百度小程序、快手小程序、字节小程序平台 优化 支持自动拷贝 ext.json 文件
  + 微信小程序平台 修复 wxs 内调用 triggerEvent 无法携带事件参数的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3829)
  + 支付宝小程序平台 优化 uni.saveImageToPhotosAlbum 接口不再使用旧版 saveImage 接口
  + 支付宝小程序平台 修复 配置全局小程序组件后编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3619)
  + 支付宝小程序平台 修复 启用小程序基础库2.0配置后访问 $slots 报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3529)
  + 字节小程序平台 新增 vue2 项目支持 onUploadDouyinVideo 生命周期 [(**详情**)](https://ask.dcloud.net.cn/question/151113)
  + 字节小程序平台 修复 vue2 项目 反复快速创建销毁页面时组件无法渲染的Bug
  + 快手小程序平台 修复 授权手机号的无回调信息的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143078)
* 【uniCloud插件】
  + 【重要】新增云函数ip防刷功能，避免大量无效请求导致云函数、数据库响应变慢 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/ip-filter.html)
  + 【重要】新增 uni-id-pages Web端支持微信登录（包括微信公众号内H5登录 和 普通浏览器内手机微信扫码登录）[(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#weixinlogin)
  + 调整 本地调试插件 云对象运行参数配置文件改为 ${objectName}.param.js [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#run-obj-param)
  + 优化 阿里云 数据库超时时间由3秒调整为5秒
  + 新增 阿里云 通过代理解决微信服务器需要固定IP的问题 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#http-proxy-client)
  + 新增 提供了一批新API，更优雅的处理同实例多并发请求
    - 新增 uniCloud.getRequestList 用于获取当前云函数实例内正在处理的请求的 requestId 列表 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-request-list)
    - 云函数 新增 context.requestId 用于获取当前请求id [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#context)
    - 云对象 新增 this.getUniCloudRequestId() 用于获取当前请求id [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-request-id)
  + 新增 云函数 uniCloud.getCloudInfos 获取云端信息。同时兼容有无并发请求的情况 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-cloud-infos)
  + 新增 云函数 uniCloud.getClientInfos 获取客户端信息。同时兼容有无并发请求的情况 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#get-client-infos)
  + 修复 客户端sdk 未关联 uniCloud 服务空间时使用 uniCloud 对象导致报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3758)
  + 修复 JQL 一个表内多个包含 parentKey 字段时树查询报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151834)
  + 修复 本地调试插件 部分情况下全局对象复用导致的扩展库提示不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150357)
  + 优化 本地调试插件 持续调试会导致内存占用过高并且响应缓慢的Bug
  + 优化 uniIdRouter 支持对首页、直达页面进行拦截并跳转到登录页面
  + 优化 uni-id-co 密码规则调整，废除之前的简单校验，允许配置密码强度 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#password-strength)
  + 调整 uni-id-co 存储用户 openid（`wx_openid.${mp|h5|app|web}`）时同时在`wx_openid.${mp|h5|app|web}_${DCloudAppId}`存储了一份副本，参考：[微信登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-weixin)、[QQ登录](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#login-by-qq)
  + 调整 uni-id-co 依赖 uni-open-bridge-common 存储用户 `session_key`、`access_token` 等凭据 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#save-user-token)
  + 新增 uni-id-co 增加 beforeRegister 钩子用户在注册前向用户记录内添加一些数据 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-summary.html#before-register)
  + 新增 uni-id-pages 支持密码强度（是否必须包含大小写字母、数字和特殊符号以及长度）配置 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#config)
  + 新增 uni-id-pages 登录成功（全局）回调事件：`uni-id-pages-login-success`，支持通过[uni.$on](https://uniapp.dcloud.net.cn/api/window/communication.html#on)监听 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 新增 uni-open-bridge 开源库，统一管理微信等三方开放平台的凭据 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge.html)
  + 修复 部分场景下在 main.js 内使用 uniCloud 报错的Bug
  + 修复 uni-admin 在 vue3 项目中使用 uni.showLeftWindow 后组件上 showLeftWindow 值并没有更新的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149618)
  + uni统计2 新增 前端数据上报周期配置项 [(**详情**)](https://uniapp.dcloud.net.cn/uni-stat-v2.html#report-time)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 快手广告SDK Android为 3.3.29 版；快手内容联盟SDK Android为 3.3.31 版；百度百青藤广告SDK iOS为 4.891 版
  + 【重要】Android平台 新增 云端打包支持配置原生应用清单文件 AndroidManifest.xml 和应用资源目录 res、assets [(**详情**)](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android)
  + Android平台 更新 UniPush使用的个推SDK为 3.2.12.0 版，个推核心组件SDK为 3.1.10.0 版，OPPO厂商推送SDK为 3.1.0 版，华为厂商推送SDK为 6.5.0.300 版； 一键登录使用的个验SDK为 3.0.6.0 版；QQ 登录、分享SDK版本为 3.5.12 版；百度定位SDK为 9.3.5 版，百度地图SDK为 7.5.3 版；支付宝SDK为 15.8.11 版；新浪微博SDK为 12.5.0 版；友盟统计SDK为 9.5.2 版；解决提交应用市场可能隐私检测被拒的问题 [(**详情**)](https://ask.dcloud.net.cn/question/143573)
  + Android平台 修复 getVideoInfo 获取纵向视频文件的宽高值相反的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151205)
  + Android平台 修复 previewImage 预览图片时可能出现偏移的Bug [(**详情**)](https://ask.dcloud.net.cn/question/151966)
  + Android平台 修复 uni-AD Sigmob激励视频广告点击跳过按钮后关闭触发 onClose 事件返回的 isEnded 属性值可能不准确的Bug
  + Android平台 修复 腾讯云安全检测可能误报`含数字天堂(dcloud)广告插件,可读取设备信息,可能泄露您的个人隐私`的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150624)
  + Android平台 修复 安全检测可能报快手广告 SDK 频繁获取用户信息的Bug
  + Android平台 修复 UniPush 2.0 厂商推送通道不支持 payload 字段为非 json 字符串的Bug
  + Android平台 修复 plus.push.createMessage 创建本地消息 option 参数设置 when 字段无效的Bug
  + Android平台 修复 plus.runtime.install 升级 apk 可能报空指针的Bug
  + iOS平台 修复 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS平台 修复 uploader 上传文件获取 uploadedSize 值不准确的Bug
  + iOS平台 修复 从本地相册中选择慢动作视频显示的时长不准确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150531)
  + iOS平台 修复 3.5.0版本引出的 uni-AD 信息流广告设置宽度可能引起显示异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150789)
  + iOS平台 修复 3.5.0版本引出的 使用百度定位模块需要勾选IDFA的Bug
  + iOS平台 修复 3.5.0版本引出的 快手开屏广告点击打开落地页返回后无法进入应用首页的Bug [(**详情**)](https://ask.dcloud.net.cn/question/152441)
  + iOS平台 修复 3.5.0版本引出的 使用百度地图或百度定位时未勾选`使用广告标识（IDFA）`云打包报错的Bug
  + iOS平台 修复 3.5.3版本引出的 开通 uni-AD 开屏广告后台切前台可能导致页面回退不正常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/150053)
* 【uni小程序SDK】
  + Android平台 优化 默认菜单字体大小为20px
  + iOS平台 修复 uni.setStorage 存储数据可能出错的Bug

## 3.5.3.20220729
* 新增 uni-app 运行到 Web 时支持 debug 调试 [(**详情**)](https://uniapp.dcloud.io/tutorial/debug/debug-web-via-chrome.html)
* 新增 HBuilderX uniCloud前端网页托管 支持腾讯云
* 新增 HBuilderX 状态栏 右下角补充升级图标及新版本红点提示
* 新增 MarkDown 代码区块的语言着色高亮，支持提示下载对应语言着色扩展插件
* 新增 Markdown 支持跨文件转到#标题或标题的@别名 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/Language/markdown?id=goto-definition)
* 新增 TypeScript 实时语法校验 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/UserGuide/tsSyntaxCheck)
* 新增 语言服务 支持tailwindcss提示，需要安装tailwindcss插件 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=8560)
* 新增 语言服务 uni-app i18n国际化 pages.json和Vue页面 支持i18n代码提示、转到定义 [(**详情**)](https://uniapp.dcloud.io/tutorial/i18n.html#codeHints)
* 修复 语言服务 React 某些情况下，<App />回车后补充了`()`的Bug
* 修复 语言服务 React jsx文件 没有代码提示的Bug
* 修复 语言服务 CSS pointer-events缺少auto属性的Bug
* 修复 语言服务 Vue {{}}view后按tab，编辑器右下角弹窗提示Failed to expand abbreviation的Bug
* 修复 语言服务 uni-app项目，import x from ‘@/‘，`@/`开头的路径，某些情况下，转到定义失败的Bug
* 修复 代码块设置 自定义其它语言代码块 窗口列表出现两个JSON选项的Bug
* 修复 自定义代码块 注释中$DATE_TIME显示日期错误的Bug
* 修复 操作系统环境变量 配置NODE_OPTIONS --openssl-legacy-provider后，HBuilderX启动时失去响应的Bug
* 修复 打开内置终端后，插件API hx.window.showQuickPick() 窗口无法滚动的Bug
* 修复 首次打开文档并编辑，第一次撤销后光标位置不对的Bug
* 修复 单项目窗体 编辑器 选择语言关联窗口位置偏移的Bug
* 优化 插件安装 提示插件安装失败时给出详细原因和解决指南
* 调整 Git插件 pull操作 默认选项改为第四项，即git pull --rebase --autostash
* 修复 App安心打包 某些情况下，提交打包，提示大小超过40M的Bug
* 修复 App manifest.json 一键生成iOS通用链接功能，不能自动生成`apple-app-site-association`文件的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149006)
* 修复 Wap2App项目，提交打包，某些情况下，生成的App样式不正确的Bug
* 修复 未登录时点击菜单【发行 原生APP-查看云打包状态】闪退的Bug
* 新增 uni-app 新建页面 增加 uni-id-pages 模板 [(**详情**)](https://ext.dcloud.net.cn/plugin?name=uni-id-pages)
* 新增 uni-app pages_init机制，导入 uni-app 插件到项目下时，可合并新页面路由到项目的 pages.json 中 [(**详情**)](https://uniapp.dcloud.io/plugin/uni_modules.html#pages-init)
* 新增 uni-app manifest.json 可视化界面基础配置 增加国际化语言配置 [(**详情**)](https://uniapp.dcloud.net.cn/tutorial/i18n.html#manifest)
* 调整 uni-app manifest.json 可视化界面去除微信登录的 AppSecret 输入框，仍可在源码视图填写，但不推荐在前端暴露 AppSecret
* 调整 uni-app manifest.json App常用其它配置，生成 iOS符号表文件，将配置项调整到原生App-云打包窗口
* 修复 uniCloud项目 node_modules文件特别多时，运行项目，Node进程CPU占用率过高的Bug
* 新增 海外开发者可使用`HBuilderX国际区账号`进行云端打包 [(**详情**)](https://uniapp.dcloud.io/tutorial/internationalization.html)
* 【uni-app插件】
  + 编译器 新增 vue2 项目 支持使用 `@/pages.json` 引用条件编译后的 `pages.json` 文件
  + 编译器 修复 vue3 项目 编译器清空输出目录可能报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3650)
  + App、Web平台 优化 movable-view 组件触摸过程中支持设置 disabled 属性 [(**详情**)](https://github.com/dcloudio/uni-app/issues/2384)
  + App、Web平台 修复 vue3 项目 uni.openLocation 未配置 latitude longitude 时不触发 fail 回调的Bug
  + 【重要】App平台 新增 uni.getAppAuthorizeSetting 获取应用权限状态，是否被授予定位、相册等权限 [(**详情**)](https://uniapp.dcloud.io/api/system/getappauthorizesetting)
  + 【重要】App平台 新增 uni.openAppAuthorizeSetting 跳转系统授权管理页 [(**详情**)](https://uniapp.dcloud.io/api/system/openappauthorizesetting.html)
  + 【重要】App平台 新增 uni.getSystemSetting 获取手机系统的定位、蓝牙、wifi开关等设置 [(**详情**)](https://uniapp.dcloud.io/api/system/getsystemsetting)
  + App平台 新增 uni.createPushMessage 创建本地通知栏消息 [(**详情**)](https://uniapp.dcloud.io/api/plugins/push.html#createpushmessage)
  + App平台 优化 slot name 支持动态赋值 [(**详情**)](https://ask.dcloud.net.cn/question/95109)
  + App平台 修复 map 组件在部分设备显示黑色边框的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145449)
  + App平台 修复 vue3 项目 input 绑定动态 type 报错的Bug
  + App平台 修复 vue3 项目 nvue 页面组件插槽样式可能不正确的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3632)
  + App平台 修复 vue3 项目 vue 页面在 iOS 平台内存不足导致白屏未自动恢复的Bug [(**详情**)](https://ask.dcloud.net.cn/article/35913)
  + App平台 修复 vue3 项目 nvue 页面 webview 组件 onPostMessage 事件无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144731)
  + App平台 修复 vue3 项目 首次启动调用 uni.getPushClientId 获取不到cid的Bug
  + App平台 修复 vue2 项目 nvue 页面访问 process.env 报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147948)
  + App-Android平台 新增 manifest.json 支持最低要求 webview 配置，系统 webview 低于指定版本时，弹出提示或者下载 x5 内核后继续启动 [(**详情**)](https://uniapp.dcloud.net.cn/collocation/manifest.html#appwebview)
  + App-Android平台 修复 nvue 页面为首页时在部分特定手机启动界面关闭过慢的Bug
  + App-Android平台 修复 nvue image 组件在部分设备可能报空指针错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147965)
  + App-Android平台 修复 nvue map 组件放大地图时标记点气泡 callout 不显示的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148741)
  + 【重要】App-iOS平台 优化 IAP 支付逻辑 补充手动关闭订单策略，解决自动关单但后续报错可能造成丢单的Bug [(**详情**)](https://uniapp.dcloud.net.cn/api/plugins/payment.html#iap)
  + App-iOS平台 修复 uni.request 访问特定接口可能数据解析出现乱码的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145530)
  + App-iOS平台 修复 uni.getSystemInfo 获取某些设备型号不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148344)
  + App-iOS平台 修复 动态设置 tabBar 隐藏再显示后高斯模糊效果失效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146478)
  + App-iOS平台 修复 nvue bindingx 在滚动视图中使用 transform.translateY 结果有偏差的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144209)
  + App-iOS平台 修复 nvue input 组件嵌套在 list 中时，页面上下滑动 v-model 绑定的值会置空的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146246)
  + App-iOS平台 修复 nvue textarea 组件设置 auto-height 为 true 时初始高度不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146688)
  + App-iOS平台 修复 nvue image 组件 src 属性更新使用 gif 格式图片时无法切换的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148807)
  + App-iOS平台 修复 nvue 组件动态修改 border-radius 样式可能不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144709)
  + App-iOS平台 修复 https 请求配置自签名 p12 证书包含中间证书时请求报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149526)
  + App-iOS平台 修复 nvue box-shadow 样式设置 spread 参数无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148415)
  + Web平台 补齐 vue2 项目支持 uni.getLaunchOptionsSync [(**详情**)](https://uniapp.dcloud.net.cn/api/getLaunchOptionsSync.html)
  + Web平台 补齐 vue2 项目支持 uni.getEnterOptionsSync [(**详情**)](https://uniapp.dcloud.net.cn/api/getEnterOptionsSync.html)
  + Web平台 优化 hover-class 支持鼠标事件
  + Web平台 优化 map 组件 markertap 事件支持返回坐标信息
  + Web平台 修复 map 组件 tap 事件重复触发的Bug
  + 小程序平台 优化 vue2 项目 slot name 支持动态赋值 [(**详情**)](https://ask.dcloud.net.cn/question/82506)
  + 小程序平台 修复 vue3 项目部分情况下，编译后组件 js 文件名不正确的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3629)
  + 小程序平台 修复 vue3 项目部分情况下，数据更新后，页面未渲染的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3648)
  + 小程序平台 修复 vue2 项目命名插槽使用 v-if 编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/2635)
  + 微信小程序、支付宝小程序 新增 manifest.json 支持 mergeVirtualHostAttributes 配置，用于合并虚拟节点外部样式 [(**详情**)](https://uniapp.dcloud.io/collocation/manifest.html#mp-weixin)
  + 百度小程序、字节小程序平台 修复 vue3 项目 部分情况下，组件 ref 获取不到的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3615)
  + 百度小程序、字节小程序平台 修复 vue3 项目 组件事件名包含`-`或`:`时，无法触发的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3616)
  + 微信小程序平台 修复 vue3 项目 input 组件动态 type 在 iOS 平台不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147787)
  + 微信小程序平台 修复 vue3 项目 微信开发者工具中配置编译模式丢失的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3655)
  + 微信小程序平台 修复 vue3 项目 project.config.json 更新可能导致开发者工具报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3524)
  + 百度小程序平台 修复 vue3 项目 事件触发可能混乱的Bug[(**详情**)](https://github.com/dcloudio/uni-app/issues/3647)
  + 百度小程序平台 修复 vue3 项目 uni.login 失效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/117304)
  + 字节小程序平台 修复 vue3 项目 部分情况下，组件未更新的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3625)
* 【uniCloud插件】
  + 【重要】新增 JQL Cache Redis。将 MongoDB 查询结果缓存到 Redis [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/jql-cache-redis.html)
  + 【重要】新增 uni-push2.0 全端支持（App、小程序、web）的云端一体的统一推送服务 [(**详情**)](https://uniapp.dcloud.io/unipush-v2.html)
  + 【重要】调整 uni统计2 版本记录复用 uni升级中心 的 opendb-app-versions表，废弃 uni-stat-app-versions表 [(**详情**)](https://uniapp.dcloud.net.cn/uni-stat-v2.html#upgrade)
  + 【重要】uni-id重构。`uni-id公共模块` + `uni-id-cf云函数` 的组合不再更新，取而代之的是 `uni-id-common公共模块` + `uni-id-pages云端一体模板`
    - 新增 uni-id-common公共模块。更小巧的公共模块，负责 uni-id 的 token 管理和权限校验 [(**详情**)](https://uniapp.dcloud.io/uniCloud/uni-id-common.html)
    - 新增 uni-id-pages云端一体页面模板。包括一组前端页面 + uni-id-co云对象。包括用户注册、登录、忘记密码、个人中心等功能 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html)
  + 【重要】新增 uniIdRouter路由管理。在 pages.json 里直接定义哪些页面需要登录后才能访问 [(**详情**)](https://uniapp.dcloud.io/uniCloud/uni-id-summary.html#uni-id-router)
  + 新增 uniCloud.onNeedLogin/offNeedLogin 用于监听/移除监听需要登录事件，需搭配 `uniIdRouter` 使用 [(**详情**)](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-need-login)
  + 新增 uniCloud.onRefreshToken/offRefreshToken 用于监听/移除监听 token 更新事件 [(**详情**)](https://uniapp.dcloud.io/uniCloud/client-sdk.html#on-refresh-token)
  + 调整 HBuilderX 中创建 uniCloud 项目时默认导入 `uni-id-common公共模块`，不再导入老版 `uni-id公共模块`
  + 新增 腾讯云平台 数据万象，对云存储文件进行图片缩放、增加水印等计算功能 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/storage.html#%E6%95%B0%E6%8D%AE%E5%A4%84%E7%90%86)
  + 修复 本地调试插件 HBuilderX 3.4.12引出的运行项目时部分场景下访问非关联服务空间云函数报错的Bug
  + 修复 本地调试插件 部分app平台、web平台切换云端云函数/本地云函数无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147633)
  + 修复 JQL action 的 after 内抛出错误不能被另一个 action 的 after 接收到的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147099)
  + 修复 JQL 操作成功时新增返回`errCode: 0`，兼容uniCloud响应体规范
  + 调整 JQL 优先依赖 `uni-id-common`，在没有 `uni-id-common` 时依赖老版 `uni-id公共模块`
  + 【重要】新增 uniCloud控制台 Redis 数据可视化管理
  + 新增 uniCloud控制台 支持对服务空间进行成员管理。不再通过dev处理服务空间协作 [(**详情**)](https://uniapp.dcloud.io/uniCloud/concepts/space.html#collaboration)
  + 新增 Redis扩展库 增加 quit 接口用于断开 redis 连接 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/redis.html#quit)
  + 新增 JQL数据库管理 支持使用更新操作符 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/jql.html#update-command)
  + 修复 JQL数据库管理 项目内无 uni-id 时运行 jql 文件报错的Bug
  + 新增 云函数 支持通过 keepRunningAfterReturn 配置云函数是否能在 return 后继续运行，仅腾讯云 nodejs12 生效 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#keep-running)
  + 新增 云对象 支持URL化 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/http.html#cloudobject)
  + 新增 云对象 支持定时触发 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/trigger.html#cloudobject)
  + 调整 云函数 context 内增加 `uniIdToken`、`FUNCTION_TYPE` [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-callfunction.html#context)
  + 调整 云对象 cloudInfo 内增加 functionName、functionType [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-cloud-info)
  + 调整 云对象 clientInfo 内增加 source [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + 修复 本地调试插件 使用运行菜单运行云函数时可能出现日志顺序错误的Bug
  + 修复 本地调试插件 项目AppId由无权使用调整为有权使用时（重新获取AppId或获得所有者授权）重启项目不生效的Bug
  + 调整 本地调试插件 云函数本地运行时配置的运行参数clientInfo内字段调整 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/rundebug.html#mock-client-info)
  + 新增 HBuilderX opendb schema文件 右键菜单增加【opendb检查更新】，支持从云端更新 opendb schema文件，并生成 JQL 升级迁移文件用于数据迁移
  + 修复 HBuilderX 打开云对象子目录下的文件时按 Ctrl+r 运行菜单无运行云对象选项的Bug
  + uni统计2 新增 启动时上报设备各种参数入库 opendb-device 表（目前没有可视化报表，开通 uni-push2.0 与 uni统计2.0 自动上报 push_clientid 到 opendb-device表）
  + uni统计2 新增 admin端 app崩溃统计页面，补充崩溃率统计
  + uni统计2 新增 支持上传 sourceMap，报错可准确回溯源码 [(**详情**)](https://uniapp.dcloud.io/uni-stat-v2.html#sourcemap-parse-error)
  + uni统计2 修复 admin端 js报错统计页面，错误率计算不准确的Bug
  + uni统计2 修复 admin端 切换版本或者修改时间等操作后，趋势图状态显示不正确的Bug
  + uni统计2 修复 admin端 部分页面首次进入时界面闪烁的问题
  + 优化 uni-admin 应用管理模块可管理App下载地址、小程序二维码等更多应用信息 [(**详情**)](https://uniapp.dcloud.io/uniCloud/admin.html#app-manager)
  + 调整 uni-admin 内置 统一发布页（uni-portal）插件 [(**详情**)](https://uniapp.dcloud.io/uniCloud/admin.html#uni-portal)
  + 调整 uni-admin 内置 App升级中心（uni-upgrade-center）插件，并支持多应用商店更新 [(**详情**)](https://uniapp.dcloud.io/uniCloud/admin.html#uni-upgrade-center)
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】uni-AD 新增 激励视频广告支持实时竞价 [(**详情**)](https://uniapp.dcloud.io/uni-ad.html#bidding)
  + 新增 uni-AD 支持穿山甲GroMore广告 包括开屏、信息流、插屏、全屏视频、激励视频广告
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.480.1350 版，iOS为 4.13.80 版；快手广告SDK Android为 3.3.27 版，iOS为 3.3.27 版；快手内容联盟SDK Android为 3.3.30 版；今日头条穿山甲SDK iOS为 4.7.0.0 版；Sigmob广告联盟SDK Android为 4.4.0 版，iOS为 4.2.1 版；百度百青藤广告SDK Android为 9.223 版，iOS为 4.883 版；华为广告SDK Android为 13.4.54.300 版
  + 优化 uni-AD 激励视频和信息流广告支持并发请求
  + Android平台 新增 Google Pay 支持配置支付网关信息 buildTokenizationSpecification [(**详情**)](https://uniapp.dcloud.io/tutorial/app-payment-google.html#%E4%BD%BF%E7%94%A8google%E6%94%AF%E4%BB%98)
  + Android平台 新增 云端打包支持设置 dataBinding、viewBinding [文档](https://uniapp.dcloud.io/collocation/manifest.html#buildfeatures)
  + Android平台 更新 云端打包环境 Gradle 为 7.3.3，Android Gradle plugin 为 4.2.0，compileSdkVersion 为 31
  + Android平台 更新 UniPush 使用的个推SDK为 3.2.11.0 版，个推核心组件SDK为 3.1.9.0 版；谷歌渠道个推SDK为 3.2.10.8 版，个推核心组件SDK为 3.1.9.10 版；解决安全检测可能报个推SDK超频获取信息的问题 [(**详情**)](https://ask.dcloud.net.cn/question/149127)
  + Android平台 更新 腾讯X5内核为 4.3.0.299 版
  + Android平台 更新 Facebook 登录 SDK 为 12.0.0 版，解决登录受限的问题 [(**详情**)](https://ask.dcloud.net.cn/question/147788)
  + Android平台 修复 startBluetoothDevicesDiscovery 搜索附近蓝牙设备在 Android12 设备可能引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146849)
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [(**详情**)](https://ask.dcloud.net.cn/question/147319)
  + Android平台 修复 UniPush 调用 plus.runtime.restart 后无法创建本地通知消息的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146470)
  + Android平台 修复 从本地相册选择大图片预览时可能引起应用崩溃的Bug
  + Android平台 修复 uploader 上传文件请求返回错误响应码时，无法获取服务器返回数据的Bug
  + Android平台 修复 setBadgeNumber 设置角标在新荣耀设备不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140910)
  + Android平台 修复 上架某些应用市场审核检测可能报应用后台运行时存在获取任务列表行为的Bug
  + iOS平台 新增 IAP支付 手动关闭订单、获取未关闭订单列表等功能，以解决自动关闭订单在某些情况引发的订单丢失的Bug [(**详情**)](https://uniapp.dcloud.io/tutorial/app-payment-aip.html)
  + iOS平台 更新 百度定位SDK为 2.0.0 版，百度地图SDK为 6.5.0 版
  + iOS平台 修复 首次启动 App 获取安全区域高度可能不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148277)
  + iOS平台 修复 设备型号名称 model、deviceModel 返回值不规范的Bug
  + iOS平台 修复 5+App项目获取 5G 网络类型错误的Bug
  + iOS平台 修复 plus.runtime.openWeb 在 iOS15.4 及以上设备打开页面导航栏显示不正常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148585)
  + iOS平台 修复 标题栏 titleNView 更新按钮样式导致布局错位的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148542)
  + iOS平台 修复 plus.navigator.getOrientation 在设备横屏状态时返回值不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148843)
  + iOS平台 修复 sqlite 在应用 restart 后 executeSql 修改数据报`Attempt to write a readonly database`错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139765)
  + iOS平台 修复 从本地相册中选择慢动作视频引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/149219)
  + iOS平台 修复 视频播放 video 的 seek 方法传入小于当前播放时间值无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/148781)
  + iOS平台 修复 打开包含视频播放 video 控件的页面会打断其他App后台音乐播放的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146719)
* 【Uni小程序SDK】
  + Android平台 修复 启动小程序直达页面参数与文档规范不一致的Bug
  + Android平台 修复 getAppRuningForAppid 在部分场景可能报空指针错误的Bug
  + iOS平台 修复 小程序未开启后台运行，前台运行时调用 open 方法直达页面无效的Bug
  + iOS平台 修复 偶现内存泄漏可能引起应用崩溃的Bug
  + iOS平台 修复 直达二级页面后再打开此页面，关闭时会直接返回首页的Bug
  + iOS平台 修复 未开启后台运行，多次切换小程序和原生界面可能导致小程序返回按钮无效的Bug

## 3.4.18.20220630
* 修复 3.4.15引出的 html标签选中后，闭合标签没有虚线框的Bug
* 修复 JSON文件 查找索引符号导致崩溃的Bug
* 修复 Windows 终端开启时，工具栏搜索分类，鼠标移动上去后，悬停列表自动消失的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146695)
* 修复 App 原生App-云打包 某些情况下，点击打包没有提交到云端打包的bug
* 修复 uniCloud 前端网页托管 上传网站到服务器，非项目成员进行上传操作，编辑器闪退的Bug
* 【uni-app插件】
  + 修复 vue3 项目 onError 生命周期不生效的Bug
  + App、Web平台 修复 vue3 项目 uni.setTabBarItem 设置 pagePath 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3592)
  + App、Web平台 修复 3.4.14 版本引出的 vue2项目 image 组件 load 事件图像大小信息不准确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147174)
  + App平台 优化 video 组件支持 show-mute-btn 配置
  + App平台 优化 vue3 项目 rich-text 组件支持服务端渲染
  + App平台 修复 vue3 项目 nvue 页面 onPageScroll，onReachBottom 不触发的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145873)
  + App平台 修复 vue3 项目 uni.getVideoInfo 成功回调不执行Bug
  + App-Android平台 修复 nvue web-view 组件 user-agent 不正确导致加载H5页面显示异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146877)
  + App-Android平台 修复 nvue 组件同时设置 box-shadow、elevation 样式在部分特殊场景可能会出现渲染异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/147041)
  + App-Android平台 修复 tabbar 启用高斯模糊后获取 windowBottom 错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146583)
  + iOS平台 修复 nvue ad-content-page 组件暂停后展示其它视频类广告，关闭广告可能引起组件后台自动播放的Bug
  + Web平台 修复 vue3 项目 pc端 createSelectorQuery 获取 top 错误Bug
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用 slot 时，渲染不正确的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3587)
  + 微信小程序平台 修复 3.4.14 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146580)
  + 百度小程序平台 修复 vue3项目 组件嵌套使用时响应式可能失效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3612)
* 【uniCloud插件】
  + 修复 本地调试插件 3.4.0版本引出的客户端连接本地云函数时获取客户端 userAgent 为`HBuilderX`的Bug
  + 修复 本地调试插件 云函数内使用`console.timeEnd`输出日志错乱的Bug
  + 修复 本地调试插件 HBuilderX 3.4.14引出的运行项目时部分场景下访问非关联服务空间云函数报错的Bug
  + 修复 项目内无 uni-id 时运行 jql 文件报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug
  + Android平台 修复 UniPush 存在监听`ACTION_BOOT_COMPLETED`广播行为，可能违反应用市场上架合规检测问题 [(**详情**)](https://ask.dcloud.net.cn/question/147319)
  + iOS平台 更新 uni-AD 快手广告SDK为 3.3.25 版，快手内容联盟SDK为 3.3.29 版，解决调用系统相册可能引起崩溃的问题

## 3.4.15.20220610
* 修复 3.4.14引出的 PHP文件 注释快捷键 注释错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146594)
* 修复 3.4.14引出的 uni-app manifest.json 配置uniPush图标后，无法提交打包的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146716)
* 修复 3.4.14引出的 uni-app uniCloud项目 运行后，控制台右上角【开启调试按钮】不显示的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146710) 
* 【uni-app插件】
  + App平台 修复 3.4.14 版本引出的 scopeId 污染 slot 导致样式异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145366)
  + App平台 修复 调试时调用 uni.getSystemInfo 报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146611)
  + App平台 修复 vue3 项目 在 Windows 系统上，运行至手机或模拟器时，可能多次同步文件的Bug
  + 微信小程序平台 修复 3.4.14 版本引出的 manifest.json 文件缺少 mp-weixin 节点编译报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146580)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 uni-AD 开屏广告在部分小米手机可能会卡在启动界面的Bug

## 3.4.14.20220607
* 新增 Node程序 支持运行和调试 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/extension/node-development)
* 新增 可自主扩展新语言的语法高亮，可开发或下载语言高亮插件 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/Language/language_grammars)
* 调整 部分内置的语言语法高亮迁移到插件市场 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/Language/language_grammars?id=list)
* 新增 支持自定义项目级代码块（菜单【工具 代码块设置 自定义项目代码块】）[(**详情**)](https://hx.dcloud.net.cn/Tutorial/Language/Snippets?id=projectsnippets)
* 新增 语言服务 vue-cli项目 支持element-ui、bootstrap-vue等代码提示
* 新增 语言服务 JavaScript 支持document.getElementById、document.querySelector中id选择器的dom类型识别
* 新增 语言服务 scss 支持提示`!global` `!default`
* 修复 语言服务 Emmet语言 某些情况下，按下tab，没有反应的Bug
* 修复 语言服务 CSS 在同一行输入CSS代码，回车后，某些情况下，替换位置错误的Bug
* 修复 语言服务 CSS `{}`内，输入`mar`等，max-resolution等媒体查询出现在代码助手第一项的Bug
* 修复 语言服务 jsdoc代码块替换位置错误的Bug
* 修复 语言服务 vue3, template内，无法提示使用ref函数创建的对象数据的Bug
* 修复 语言服务 JavaScript JQuery代码提示，某些情况下，在`$("")`内输入`#`，回车后，出现两个`#`的Bug
* 修复 语言服务 Vue style节点，输入scoped后，自动补上了`=""`的Bug
* 修复 语言服务 uni-app项目，pages.json easycom不规范的写法，导致css class无法提示的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143800)
* 修复 语言服务 uni-app项目，pages.json easycom节点配置错误时，无法提示uView框架组件的Bug
* 修复 语言服务 uni-app项目，pages.json 条件编译产生语法不对的情况时，导致vue下class没有提示的Bug
* 修复 语言服务 uni-app项目，scss嵌套语法，无法提示uni-app相关标签的Bug
* 修复 语言服务 uni-app项目，import x from ‘@/‘，`@/`开头的路径，某些情况下，转到定义失败的Bug
* 修复 插件安装窗口 已安装插件 某些情况下，版本号显示错误的Bug
* 修复 多文件搜索 某些情况下，右侧栏显示的代码着色错误的Bug
* 修复 项目运行过程中，在项目管理器关闭项目可能引发的编辑器闪退的bug
* 调整 App 原生App-云打包 java库改为openjdk 11.0.14.1
* 优化 App MacOSX 运行到iOS模拟器的窗口增加搜索功能
* 【uni-app插件】
  + 【重要】新增 uni统计2.0版本发布，开源、私有部署、易定制 [(**详情**)](https://uniapp.dcloud.net.cn/uni-stat-v2.html)
  + 【重要】uniAD 支持微信小程序平台，更低的流量主门槛 [(**详情**)](https://uniapp.dcloud.net.cn/component/ad-weixin.html)
  + 【重要】App平台 优化 vue2 项目 view 组件实现方式，提高渲染性能。建议相关开发者升级
  + 新增 uni.getSystemInfo 添加 device、os、rom、host、browser、uni、app 等概念  [(**详情**)](https://uniapp.dcloud.io/api/system/info.html)
  + 优化 vue3 项目 兼容 pnpm@7.0.0
  + 修复 vue3 项目 部分情况下错误信息不准确的Bug
  + 修复 vue3 项目 vite.config.js 配置 build.minify 为 terser 不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144992)
  + App、H5平台 优化 image 组件减少网络请求
  + App、H5平台 新增 uni.getDeviceInfo [(**详情**)](https://uniapp.dcloud.io/api/system/getDeviceInfo.html)
  + App、H5平台 新增 uni.getAppBaseInfo [(**详情**)](https://uniapp.dcloud.io/api/system/getAppBaseInfo.html)
  + App、H5平台 新增 uni.getWindowInfo [(**详情**)](https://uniapp.dcloud.io/api/system/getWindowInfo.html)
  + App、H5平台 修复 uni.canIUse 获取某些 api 的返回值不正确的Bug [(**详情**)](https://uniapp.dcloud.io/api/caniuse.html)
  + App、H5平台 修复 canvas transform 渲染时没有使用高清处理的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144676)
  + App、H5平台 修复 canvas 组件画图裁剪异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142494)
  + App平台、微信小程序平台 新增 ad-rewarded-video 激励视频广告组件，更易用、安全、高收益 [(**详情**)](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html)
  + App平台、微信小程序平台 新增 ad-interstitial 插屏广告组件 [(**详情**)](https://uniapp.dcloud.net.cn/component/ad-interstitial.html)
  + App平台 新增 ad-fullscreen-video 全屏视频广告组件 [(**详情**)](https://uniapp.dcloud.net.cn/component/ad-fullscreen-video.html)
  + App平台 修复 nvue 页面 switch 组件切换状态无限闪动的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145272)
  + App平台 修复 纯 nvue 编译模式 uni_modules 内静态资源未拷贝的Bug
  + App平台 修复 vue3 项目使用录音时报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144821)
  + App平台 修复 vue3 项目 纯 nvue 项目编译报错的Bug
  + App平台 修复 nvue 页面列表删除渲染卡顿的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144110)
  + App平台 修复 nvue 页面 transition 包含多个属性时编译报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/89110)
  + App平台 修复 navigator 组件 animation-type、animation-duration 属性无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143377)
  + App平台 修复 vue3 nvue movable 组件使用异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143742)
  + App-Android平台 优化 补齐 tabBar 和 navigationBar 支持高斯模糊效果 [(**详情**)](https://uniapp.dcloud.io/tutorial/app-blureffect)
  + App-Android平台 修复 使用谷歌地图时，mapContext 对象调用 moveAlong 移动 marker 动画过程中拖拽地图会产生偏移的Bug
  + App-Android平台 修复 nvue view 组件 hover-class 属性动态改变组件大小时无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145677)  
  + App-Android平台 修复 bindingx 执行 getComputedStyle 方法返回异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143697)
  + App-iOS平台 修复 vue3 项目 nvue 页面 swiper 组件面板指示点无法隐藏的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145097)
  + App-iOS平台 修复 nvue 页面滚动视图中设置 position 属性为 sticky 样式显示不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144303)
  + App-iOS平台 修复 nvue textarea 组件默认换行不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143784)
  + App-iOS平台 修复 nvue map 组件开启标记点聚合时，调用 removeMarkers 移除所有 marker 引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143991)
  + App-iOS平台 修复 nvue swiper 组件与页面返回手势冲突的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137505)
  + H5平台 修复 vue3 项目 App.vue 使用 setup 不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144672)
  + H5平台 修复 rich-text 组件部分标签没有加上 scopeId 导致样式应用不上的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144042)
  + H5平台 修复 vue3 项目使用 picker 组件报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144073)
  + H5平台 修复 vue3 项目 当页面同时存在 vue、nvue 时，样式不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144687)
  + H5平台 修复 vue3 项目 使用 Vue.js devtools 查看页面状态不显示的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3492)
  + 小程序平台 修复 uni.getLocale 获取值不统一的Bug [(**详情**)](https://uniapp.dcloud.io/api/ui/locale.html)
  + 小程序平台 修复 vue3 项目 在模板中使用 wxs、sjs 插值表达式不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3527)
  + 小程序平台 修复 vue3 项目 部分情况下代码分割错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3491)
  + 小程序平台 修复 v-if 内连用多个逻辑表达式编译出错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/129122)
  + 微信小程序平台 调整 ad 广告组件 [(**详情**)](https://uniapp.dcloud.net.cn/component/ad.html#weixin)
  + 微信小程序平台 修复 vue3 项目 ad-custom 组件无法使用的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145883)
  + 微信小程序平台 修复 uni.getSystemInfoSync() 获取的 safeAreaInsets.bottom 为负数的Bug [(**详情**)](https://ask.dcloud.net.cn/question/133479)
  + 支付宝小程序平台 修复 vue3 项目 全局组件不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3525)
  + 支付宝小程序平台 修复 vue3 项目 sjs 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3527)
  + uni-ui 新增 uni-data-select 组件 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=7993)
  + uni-ui 新增 uni-breadcrumb 组件 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=7992)
  + uni-ui 新增 uni-tooltip 组件 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=8020)
* 【uniCloud插件】
  + 【重要】调整 vue2版本客户端App平台对应的`context.PLATFORM`值由 `app-plus` 改为 `app`。此调整对 uni-id 有影响，详情请参考文档：[uni-id preferedAppPlatform](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#prefered-app-platform)
  + 新增 HBuilder 云对象本地运行和调试 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#run-local)
  + 新增 HBuilder Redis本地云函数运行（仍连接云端Redis数据库） [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/redis.html#lcoal-function)
  + 新增 HBuilder 新建 `DB Schema` 模板列表 且支持搜索
  + 新增 unicloud-db 组件增加属性 ssr-key，支持ssr服务端渲染。限web平台vue3版本 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/unicloud-db.html#ssrkey)
  + 新增 uniCloud.onResponse/offResponse 接口用于监听云函数、云对象及clientDB的响应结果 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/client-sdk.html#on-response)
  + 新增 uniCloud响应体规范 添加 newToken 字段，用于token续期。云对象会自动将token持久化存储 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#resformat)
  + 新增 uni-cloud-jql 扩展库 databaseForJQL 方法支持传递 clientInfo，以便于在云对象中使用 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/jql-cloud.html#use-in-object)
  + 修复 云对象 _before 内抛出错误后 _after 不执行的Bug [(**详情**)](https://ask.dcloud.net.cn/question/145046)
  + 修复 云对象 自动展示交互界面时未能显示 loading 标题的Bug [(**详情**)](https://ask.dcloud.net.cn/question/144526)
  + 修复 云对象 自动展示错误提示界面时 toast 图标错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142246)
  + 调整 客户端将上报所有`getSystemInfoSync`返回的内容供云端使用，参考文档：[云函数内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#client-info)，[云对象内获取客户端信息](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj.html#get-client-info)
  + uniCloud控制台 新增 腾讯云云存储支持上传文件夹
  + uni-id 新增 getWeixinUserInfo 用于获取app平台微信登录用户的用户信息 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#get-weixin-user-info)
  + uni-id 新增 addUser 用于手动添加用户 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#add-user)
  + uni-id 新增 resetPwdBySms 用于使用短信验证码重置密码 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#reset-pwd-by-sms)
  + uni-id 调整 用户注册时记录用户注册环境到 register_env 字段 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id.html#user-table)
  + uni-id 调整 用户注册时将注册 ip 移至 register_env 内
  + uni-id 调整 绑定、解绑邮箱手机号接口，只要传递 code 参数就进行验证码校验即使传递的值为undefined
  + uni-id 修复 config 文件语法错误时报`this.t is not a function`的Bug
  + uni-captcha 优化 将公共模块升级为云端一体组件：创建、刷新、显示验证码 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=4048)
  + uni-starter 新增 短信验证码登陆、绑定手机号码，防刷逻辑；当短信验证码输入错误超过2次，弹出图形验证码进行人机校验。[(**详情**)](https://ext.dcloud.net.cn/plugin?id=5057)
  + uni-admin 新增 uni统计数据报表功能 [(**详情**)](https://ext.dcloud.net.cn/plugin?id=3268)
  + uni-admin 修复 系统设置中权限只能加载 20 条的 bug
  + uni-admin 优化 登录速度
  + uni-admin 修复 从「首页」跳转「概况」时，url 的 query 丢失的 bug  
  + uni-admin 修复 路由改变后面包屑未响应的 bug
* 【App插件(含5+App和uni-app的App端)】
  + 修复 音频播放 audio 暂停后设置播放倍速大于 0 会自动触发播放的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143757)
  + Android平台 新增 原生隐私政策提示框支持 hrefLoader 属性，配置提示框中点击 href 链接的打开方式 [(**详情**)](https://uniapp.dcloud.io/tutorial/app-privacy-android)
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.462.1332 版，iOS为 4.13.65 版；今日头条穿山甲SDK Android为 4.5.1.1 版，iOS为 4.4.0.5 版；快手广告SDK Android为 3.3.24 版，iOS为 3.3.24 版；快手内容联盟SDK iOS为 3.3.28 版；百度百青藤广告SDK Android为 9.212 版，iOS为 4.87 版；Sigmob广告联盟SDK Android为 3.5.9 版，iOS为 4.1.0 版
  + Android平台 修复 uni-AD 离线打包开通开屏广告可能引起应用崩溃的Bug
  + Android平台 修复 uni-AD 开屏广告开通腾讯优量汇可能引起应用启动白屏的Bug
  + Android平台 修复 uni-AD 腾讯优量汇广告联盟部分下载类广告下载成功之后无法安装的Bug
  + iOS平台 更新 一键登录 使用的个验SDK为 2.2.0.0 版，个推核心组件SDK为 1.2.7.0 版
  + iOS平台 修复 3.4.4版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug
  + iOS平台 修复 登录鉴权、分享的 authorize 方法传入认证参数 options 不生效的Bug
  + iOS平台 修复 音频播放 audio 设置 startTime 可能不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/146028)
  + iOS平台 修复 视频播放 video 播放 rtmp 协议直播流视频时声音只能通过扬声器播放的Bug [(**详情**)](https://ask.dcloud.net.cn/question/129703)
  + iOS平台 修复 视频播放 video 播放 rtmp/rtsp 协议视频时 timeupdate 事件返回当前播放时间 currentTime 始终为 0 的Bug
* 【Uni小程序SDK】
  + Android平台 修复 3.4.7版本引出的 宿主事件回调格式异常的Bug
  + Android平台 修复 多进程模式下微信分享过程中手动返回页面显示异常的Bug 
  + Android平台 修复 小程序应用资源更新可能引起页面卡顿的Bug
  + iOS平台 修复 调用 closeWithCompletion 方法关闭小程序后紧接着在打开小程序可能引起崩溃的Bug
  + iOS平台 修复 存在自定义 UIWindow 时 toast 可能无法显示的Bug

## 3.4.7.20220422
* 修复 语言服务 html a标签 target属性，没有自动拉出代码候选项的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143628)
* 修复 语言服务 html 引用js后不提示js全局变量方法的Bug
* 修复 语言服务 html 输入!+tab后，`<html lang="">`设置为en的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143531)
* 修复 语言服务 css属性 属性位置替换文本，替换内容错误的Bug
* 修复 语言服务 Vue script节点，无法提示vue某些代码块的Bug
* 修复 语言服务 Vue script节点，this.方法名，无法转到定义的Bug
* 修复 语言服务 uni-app pages.json提示的文件路径不区分大小写的Bug
* 修复 编辑器 撤销、恢复撤销操作，光标位置跳转错误的Bug
* 修复 项目运行过程中，项目管理器关闭项目可能引发的编辑器闪退的bug
* 修复 App安心打包 某些情况下提交安心打包失败的Bug
* 修复 App真机运行 某些情况下，因adb问题，查找模拟器设备失败的Bug
* 修复 App真机运行 当项目资源过大，引发的真机运行超时的Bug
* 【uni-app插件】
  + 新增 vue3 项目内置支持 pinia [(**详情**)](https://uniapp.dcloud.net.cn/tutorial/vue3-pinia.html)
  + 修复 3.4.6 版本引发的 vue3 项目使用 pinia 报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143578)
  + 修复 3.4.6 版本引发的 vue3 项目部分情况编译变慢的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3458)
  + App平台 修复 vue3 项目 nvue 页面引用的静态资源编译后可能不存在的Bug
  + App平台 修复 vue3 项目 nvue 页面事件无法冒泡的Bug
  + App平台 修复 vue3 项目 nvue 页面 input，textarea 组件的 v-model 不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143547)
  + App平台 修复 3.4.6 版本引发的 ArrayBuffer 类型判断错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143534)
  + App-Android平台 修复 3.4.6版本 引出的 nvue 页面在部分设备可能出现渲染闪烁的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143657)
  + H5平台 修复 vue3 项目 html 原生标签（如div）renderjs/wxs 事件监听无法获取 ownerInstance 的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 vue3 项目运行到浏览器，本地服务端口校验可能报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143504)
  + H5平台 修复 vue3 项目 map 组件 polyline、circles 颜色设置不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3433)
  + 小程序平台 修复 vue3 项目当 style 样式值为数字，部分情况下丢失的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3456)
  + 微信小程序平台 修复 vue3 项目当 input 事件函数返回 Promise 时，输入框显示错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3462)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 更新 高德地图SDK为 9.2.0 版， 解决在部分设备使用地图引起应用崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143573)
  + iOS平台 修复 3.4.6版本 引出的 获取底部安全区域高度不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143633)
  + iOS平台 修复 3.4.6版本 引出的 未使用Push模块上传 AppStore 报`ITMS-90078: Missing Push Notification Entitlement`警告的Bug

## 3.4.6.20220420
* 【重要】调整 HBuilderX语言服务 由Java切换为Node，减少内存占用、增强语法提示 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/update/lang_service)
* 调整 取消单独的App开发版安装包，统一为一个标准安装包。标准版也可以安装app相关插件。
* 新增 代码悬浮提示 支持着色
* 新增 新建uni-app项目时直接选择Vue2或3的版本（后续可在manifest里调整）
* 新增 文档保存时自动格式化，可通过【设置】-【编辑器配置】-【保存时自动格式化】开启
* 调整 App真机运行 不再长期监听手机，运行时检测，减少资源消耗
* 调整 安装HBuilderX核心插件时，由下载最新版插件调整为和当前HBuilderX版本匹配的插件
* 新增 HBuilderX CLI uni-app 制作应用wgt包 [(**详情**)](https://hx.dcloud.net.cn/cli/publish-app-wgt)
* 新增 HBuilderX CLI uni-app 生成本地打包App资源 [(**详情**)](https://hx.dcloud.net.cn/cli/publish-app-appResource)
* 修复 MacOSX 某些情况下，HBuilderX启动后，立即按下`command+w`关闭标签卡，编辑器闪退的Bug
* 修复 文档格式化后，撤销时光标位置不对的Bug
* 修复 某些情况，Git更新文件后，编辑器内文件不会自动刷新的Bug
* 修复 查找索引符号 搜索后，HBuilderX闪退的Bug
* 修复 某些情况，文档编辑后出现着色错乱的Bug
* 优化 markdown一键分享 网页内容适配移动端
* 优化 markdown一键分享 生成的html文件 调整代码区代码着色
* 优化 uni-app 发行 制作应用wgt包窗口样式
* 优化 uni-app 运行菜单和发行小程序的界面样式
* 修复 uni-app 新建页面，输入已存在的页面名称，不勾选创建同名目录，旧文件被覆盖的Bug
* 修复 uni-app manifest.json中`app-plus`-`compilerVersion`未配置时发行和运行会弹出设置微信开发者工具对话框的Bug
* 修复 uni-app manifest.json生成通用链接时，协作者选择服务空间时获取不到自定义域名的Bug
* 优化 uniCloud 新建公共模块界面 支持选择模板
* 【uni-app插件】
  + 新增 vue2 项目支持发布到 京东小程序
  + 优化 vue3 项目支持 vitest 测试框架 [(**详情**)](https://github.com/dcloudio/uni-app/issues/3398)
  + 优化 vue3 项目全平台支持使用 props 接收页面参数 [(**详情**)](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#url-search-params)
  + 优化 vue3 项目支持导出 onSaveExitState 生命周期 [(**详情**)](https://github.com/dcloudio/uni-app/issues/3427)
  + 修复 vue3 项目兼容 vite-plugin-eslint [(**详情**)](https://github.com/dcloudio/uni-app/issues/3247)
  + 修复 vue3 项目 App.vue 中的 provide 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3404)
  + 修复 vue3 项目错误信息行号可能不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143075)
  + App平台、H5平台 新增 map 组件支持 polygons [(**详情**)](https://uniapp.dcloud.io/component/map)
  + App平台、H5平台 新增 input 组件配置 ignoreCompositionEvent 属性 [(**详情**)](https://uniapp.dcloud.io/component/input?id=input)
  + App平台、H5平台 优化 取消全局 canvas 高清处理，支持配置单个 canvas 组件 hidpi 属性
  + App平台、H5平台 修复 自定义组件监听 tap.native 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3259)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139432)
  + App平台、H5平台 修复 vue3 项目 input 组件 类型为 number 时在低版本 webview 失去焦点时报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138088)
  + App平台、小程序平台 修复 vue3 项目配置 base 后资源路径可能错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3362)
  + 【重要】App平台 新增 海外SDK 支持 Google 地图 [(**详情**)](https://uniapp.dcloud.net.cn/app-maps)
  + 【重要】App平台 新增 海外SDK 支持 Paypal、Stripe、Google Pay 等支付SDK [(**详情**)](https://uniapp.dcloud.io/app-payment-paypal)
  + 【重要】App平台 新增 海外SDK  Google、Facebook 等登录SDK [(**详情**)](https://uniapp.dcloud.io/api/plugins/login?id=app-oauth)
  + App平台 新增 vue 页面 video 组件支持 vslide-gesture、vslide-gesture-in-fullscreen 属性 [(**详情**)](https://uniapp.dcloud.io/component/video)
  + App平台 新增 pages.json 支持在 style 配置 disableSwipeBack 以禁用 iOS 侧滑返回
  + App平台 新增 vue 页面支持 live-pusher 组件 [(**详情**)](https://uniapp.dcloud.net.cn/component/live-pusher)
  + App平台 新增 打开微信客服功能 [(**详情**)](https://uniapp.dcloud.io/api/plugins/share.html)
  + App平台 新增 nvue ad-content-page 组件 支持内容播放状态事件start、pause、resume、complete [规范](https://uniapp.dcloud.io/component/ad-content-page.html#%E7%9F%AD%E8%A7%86%E9%A2%91%E5%86%85%E5%AE%B9%E8%81%94%E7%9B%9F%E7%BB%84%E4%BB%B6)
  + App平台 新增 tabbar 支持配置字体图标 iconfont [(**详情**)](https://uniapp.dcloud.net.cn/api/ui/tabbar?id=settabbaritem)
  + App平台 新增 InnerAudioContext、BackgroundAudioManager 支持音频倍速播放
  + 【重要】App平台 优化 nvue 页面支持 vue3（需要项目的 Vue 版本切换为3）[(**详情**)](https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html)
  + App平台 修复 uni.addPhoneContact 重复添加联系人的Bug [(**详情**)](https://gitee.com/dcloud/uni-app/issues/I4NY6C)
  + App平台 修复 uni.getBackgroundAudioManager 的 onPrev onNext 事件无效Bug [(**详情**)](https://ask.dcloud.net.cn/question/107325)
  + App平台 修复 uni.request、uni.onSocketMessage 等接口返回的 ArrayBuffer 类型不可用 instanceof 做类型判断的Bug
  + App平台 修复 vue2 nvue 页面文本首尾回车符占用高度的Bug [(**详情**)](https://ask.dcloud.net.cn/question/95429)
  + App平台 修复 vue3 使用 html 原生标签（如 div）时，事件监听报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3240)
  + App平台 修复 vue3 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [(**详情**)](https://ask.dcloud.net.cn/question/140644)
  + App平台 修复 vue3 wxs/renderjs 监听事件运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3324)
  + App平台 修复 vue3 内联样式引用静态资源可能错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141278)
  + App平台 修复 vue3 picker-view 组件 调整列数据时渲染错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140609)
  + App平台 修复 vue3 uni.getSavedFileList、uni.getSavedFileInfo、uni.removeSavedFile、uni.getFileInfo 无效的Bug  [(**详情**)](https://ask.dcloud.net.cn/question/142428)
  + App平台 修复 vue3 App.vue 中的 css 可能编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3403)
  + App平台 修复 vue3 nvue map 组件 部分属性无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142159)
  + App平台 修复 vue3 使用 vue-i18n 运行报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142911)
  + App平台 修复 vue3 renderjs 在低版本手机可能运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3366)
  + App平台 修复 uni.getEnv 在 nvue webview 中返回值不准确的Bug [(**详情**)](https://uniapp.dcloud.net.cn/component/web-view.html#getenv)
  + App平台 修复 InnerAudioContext 某些情况下 paused 属性值不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141832)
  + App-Android平台 优化 nvue box-shadow 组件 渲染逻辑，解决在部分设备可能出现排版异常及闪烁的问题 [(**详情**)](https://uniapp.dcloud.io/tutorial/nvue-css.html#android-box-shadow)
  + App-Android平台 修复 nvue image 组件 mode 属性设置为 widthFix/HeightFix 时可能导致图片无法显示的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139541)
  + App-Android平台 修复 nvue list 组件插入列表项可能引起页面闪烁的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139424)
  + App-Android平台 修复 nvue web-view 组件 progress 颜色值不支持3位十六进制格式字符串的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138670)
  + App-Android平台 修复 nvue web-view 组件 无法正常加载使用非受信任证书网页的Bug [(**详情**)](https://ask.dcloud.net.cn/question/134287)
  + App-Android平台 修复 nvue animation 动画切到后台可能无法执行的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137868)
  + App-Android平台 修复 nvue map 组件 marker 设置 joinCluster 为 true 时导致 callouttap 事件不响应的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136381)
  + App-Android平台 修复 nvue text 组件 font-style 设置 italic 在部分设备可能无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/120801)
  + App-Android平台 修复 nvue 页面切换可能导致 plus.key.addEventListener 监听 keydown 事件不触发回调的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140203)
  + App-Android平台 修复 nvue map 组件 使用高德地图时，频繁调用 addMarkers 增加聚合点可能引起崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140461)
  + App-Android平台 修复 nvue map 组件 使用谷歌地图时，调用 moveAlong 移动 marker 可能出现偏移的Bug
  + App-Android平台 修复 nvue swiper 组件 设置 circular 为 true 时首次启动可能先显示最后一项的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140931)
  + App-Android平台 修复 nvue swiper 组件 在特定环境下可能出现页面空白的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140942)
  + App-Android平台 修复 nvue list 组件 横向滚动不会触发 loadmore 事件的Bug
  + App-Android平台 修复 nvue 页面 flex 布局在部分设备可能出现换行计算不正确的Bug
  + App-Android平台 修复 nvue 页面调用 dom.scrollToElement 滚动到 list 组件 指定元素位置可能无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143035)
  + App-Android平台 修复 连续调用 uni.chooseImage 在部分手机可能引起应用闪退的Bug
  + App-Android平台 修复 uni.saveImageToPhotosAlbum 在部分手机可能无法正常保存到系统相册的Bug [(**详情**)](https://ask.dcloud.net.cn/question/143125)
  + App-Android平台 修复 uni.getScreenBrightness 获取屏幕亮度始终返回 -1 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142726)
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + App-iOS平台 修复 nvue map 组件 marker 的 joinCluster 为 false 时 removeMarkers 方法不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140648)
  + App-iOS平台 修复 nvue rich-text 组件 text-overflow 样式不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140586)
  + App-iOS平台 修复 nvue 组件 userInteractionEnabled 属性无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140838)
  + App-iOS平台 修复 nvue refresh 组件 pullingdown 事件触发时机不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138962)
  + App-iOS平台 修复 nvue swiper 组件 内嵌 list-waterfall 时，横向滑动的同时列表还可以竖向滚动的Bug [(**详情**)](https://ask.dcloud.net.cn/question/134909)
  + App-iOS平台 修复 nvue 页面内存在可滚动子组件时，开启 enablePullDownRefresh 下拉刷新功能无效的Bug
  + App-iOS平台 修复 video 组件 vslide-gesture-in-fullscreen 属性无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138299)
  + App-iOS平台 修复 nvue image 组件 不支持 gif 图片中设置循环次数参数的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140176)
  + App-iOS平台 修复 在页面生命周期 onLoad 方法中调用 lockOrientation 锁定屏幕方向可能引起布局异常的Bug
  + App-iOS平台 修复 video 不支持 enable-play-gesture 属性的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141862)
  + App-iOS平台 修复 nvue input 组件 confirm-hold 属性默认值不正确的Bug
  + 【重要】H5平台 新增 ad 组件 [(**详情**)](https://uniapp.dcloud.io/component/ad.html)
  + H5平台 优化 vue3 navigator 组件 使用 a 标签渲染以利于SEO
  + H5平台 修复 vue3 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 renderjs 发行后不正常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 dataset 不支持对象类型错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 热刷新编译报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 text 组件 使用 v-if 时显示错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 vue3 wxs/renderjs 热刷新不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 特定情况下拉刷新后页面跳转的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3326)
  + H5平台 修复 vue3 配置 base 发行后资源路径可能错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3354)
  + H5平台 修复 vue3 同时使用 style 节点和 style scoped 节点时，样式可能错乱的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3410)
  + H5平台 修复 vue3 renderjs/wxs 部分事件监听无法获取 ownerInstance 的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3436)
  + H5平台 修复 map 组件 marker 不能设置 id 为 0 的Bug
  + H5平台 修复 部分情况下 input 组件 显示数值错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140366)
  + H5平台 修复 input 组件 启用 password 后在小米手机钉钉内置浏览器无法弹出键盘的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142834)
  + 小程序平台 优化 vue3 自定义组件支持 v-bind="" 语法 [(**详情**)](https://github.com/dcloudio/uni-app/issues/3330)
  + 小程序平台 优化 vue3 支持动态导入静态资源 [(**详情**)](https://github.com/dcloudio/uni-app/issues/3376)
  + 小程序平台 修复 vue3 uni.getSystemInfo 无法获取 deviceId 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 不支持 v-html 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 v-if 中使用 wxs 等模块时报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 setup 手动引入组件不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 v-for 嵌套使用时部分情况运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 wxs 调用 callMethod 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 全局组件路径解析错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140351)
  + 小程序平台 修复 vue3 部分情况下视图更新延迟的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3311)
  + 小程序平台 修复 vue3 模板中 style 属性包含换行符时编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3320)
  + 小程序平台 修复 vue3 v-model.number 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3381)
  + 小程序平台 修复 vue3 页面复杂时可能编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3397)
  + 小程序平台 修复 vue3 slot 在部分复杂情况运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3346)
  + 小程序平台 修复 vue2 v-if 中同时包含成员表达式和逻辑表达式编译出错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142293)
  + 小程序平台 修复 vue3 pages.json 配置国际化信息显示错误的Bug
  + 小程序平台 修复 vue3 在 Windows 系统上生成的依赖文件可能错乱的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3425)
  + 微信小程序平台 优化 uni.showActionSheet 支持 title 参数
  + 微信小程序平台 修复 vue2 v-for 遍历部分表达式时 stop 修饰符无效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138684)
  + 微信小程序平台 修复 vue3 canvas 监听 touch 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 部分情况下事件监听错乱的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 使用小程序插件组件无法传递属性的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3257)
  + 微信小程序平台 修复 vue3 input 事件 return 一个字符串没有同步到输入框的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3371)
  + 微信小程序平台 修复 vue3 发行为混合分包运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3416)
  + 支付宝小程序平台 优化 vue3 默认开启 es6=>es5 [(**详情**)](https://ask.dcloud.net.cn/question/140742)
  + 支付宝小程序平台 修复 vue2 小程序组件事件监听失效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/2273)
  + 支付宝小程序平台 修复 vue2 小程序插件中组件事件监听失效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/2410)
  + 支付宝小程序平台 修复 vue3 分包页面事件响应不正常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140742)
  + 支付宝小程序平台 修复 vue3 默认分享功能失效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3377)
  + 支付宝小程序平台 修复 vue3 部分情况下渲染错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3408)
  + 百度小程序平台 修复 vue3 项目 onInit 生命周期不触发的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3384)
  + 百度小程序平台 修复 vue3 项目 editor 组件 ready 事件监听可能失败的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3444)
  + QQ小程序平台 修复 vue3 项目 appid 配置不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3339)
  + QQ小程序平台 修复 vue3 项目部分情况运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3419)
  + 字节跳动小程序平台 修复 vue3 项目部分情况下数据不响应的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3340)
  + 字节跳动小程序平台 修复 vue3 项目 options 方式配置 provide/inject 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3360)
  + hello uniCloud 新增云对象使用示例[(**详情**)](https://ext.dcloud.net.cn/plugin?id=4082)
* 【uniCloud插件】
  + 【重要】阿里云 调整 单次数据库查询最大超时时间由1秒调整为3秒，重新上传云函数后自动生效
  + 【重要】新增`云对象`。将callfunction函数调用升级为模块化方式，网络不再传递json，前端对象化使用云API [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/cloud-obj)
  + 【调整】发送短信API 从内置库剥离为扩展库 uni-cloud-sms [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/send-sms?id=extension)
  + 【调整】一键登录API 从内置库剥离为扩展库 uni-cloud-verify [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/univerify?id=extension)
  + 【调整】uniCloud本地调试插件 云函数右键本地运行时，此云函数内的callFunction由调用云端云函数改为调用本地云函数
  + 修复 JQL语法 部分情况下过度限制了权限的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142457)
  + 新增 jql语法 允许在 getTemp 联表查询的虚拟联表内使用 groupBy distinct [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/jql?  id=lookup-with-temp)
  + 优化 HBuilderX新建云函数的界面支持选择模板和依赖
  + 修复 阿里云 云函数删除文件接口返回数据格式不正确的Bug
  + 修复 uni-cloud-jql扩展库 权限校验失败等场景未抛出错误的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】uni-AD 新增 百度百青藤广告联盟 包括开屏、信息流、插屏、激励视频广告 [(**详情**)](https://ask.dcloud.net.cn/article/36769)
  + 【重要】uni-AD 新增 支持华为广告联盟 包括开屏、信息流、插屏、激励视频广告（仅Android平台） [(**详情**)](https://ask.dcloud.net.cn/article/36769)
  + 【重要】uni-AD 修复 Android平台 穿山甲广告联盟在部分设备可能提示`应用的uni-AD业务状态异常`的Bug
  + 新增 支持Google地图 [(**详情**)](https://uniapp.dcloud.io/app-maps?id=google%e5%9c%b0%e5%9b%be)
  + 新增 音频播放 AudioPlayer 支持 playbackRate 设置倍速播放 [文档](https://www.html5plus.org/doc/zh_cn/audio.html#plus.audio.AudioPlayer.playbackRate)
  + Android平台 新增 Google支付支持 isReadyToPay 方法 [文档](https://www.html5plus.org/doc/zh_cn/payment.html#plus.payment.PaymentChannel.isReadyToPay)
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
  + Android平台 更新 高德定位SDK为 6.0.1 版，高德地图SDK为 9.0.1 版；UniPush 使用的个推SDK为 3.2.9.0 版，小米厂商推送库SDK为 3.1.1 版；Google地图SDK为 18.0.2 版
  + Android平台 优化 应用启动首页可能出现上下抖动的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138243)
  + Android平台 优化 二维码扫码检测到 QR 码时自动放大，提升扫码识别率 [(**详情**)](https://ask.dcloud.net.cn/question/142209)
  + Android平台 修复 uni-AD 腾讯优量汇插屏广告在 onLoad 回调中执行 show 可能引起广告无法正常显示的Bug
  + Android平台 修复 使用 X5 内核调用 plus.key.addEventListener 监听 keyup 事件不触发回调的Bug
  + Android平台 修复 Android8及以上设备 plus.navigator.createShortcut 无法创建桌面快捷图标的Bug [(**详情**)](https://ask.dcloud.net.cn/question/125119)
  + Android平台 修复 视频播放控件 video 边缘可能出现黑线的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138320)
  + Android平台 修复 在部分设备调用 plus.runtime.restart 可能引起应用闪退的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138965)
  + Android平台 修复 系统语言设置为土耳其语时，tabbar 切换选项可能导致不显示的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139313)
  + Android平台 修复 本地相册选择视频设置 compressed 为 false 时依然会压缩的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140417)
  + Android平台 修复 在部分设备识别国际化语言不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141688)
  + iOS平台 新增 uni原生插件 支持 applicationMain 获取 main 函数启动参数 argc、argv [文档](https://nativesupport.dcloud.net.cn/NativePlugin/course/ios?id=hook%e7%b3%bb%e7%bb%9f%e4%ba%8b%e4%bb%b6)
  + iOS平台 修复 Webview窗口标题栏 titleNView无法动态更新网络页面标题的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138958)
  + iOS平台 修复 compressVideo 视频压缩可能出现尺寸错乱的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138303)
  + iOS平台 修复 微博分享 type 为 web 时无法正常分享的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138830)
  + iOS平台 修复 播放背景音频时系统锁屏界面音乐播放器的进度条可能显示不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140101)
  + iOS平台 修复 音频播放 AudioPlayer 获取暂停状态不准确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141832)
  + iOS平台 修复 视频播放 video 播放视频音量与系统音量不一致的Bug
  + iOS平台 修复 视频播放 video 在刘海屏设备全屏播放时进度条可能无法拖动的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141862)
  + iOS平台 修复 视频播放 video 设置 show-fullscreen-btn 属性为 false 时可能显示不正确的Bug
  + iOS平台 修复 在 iOS15.4 及以上设备系统时间设置为12小时制 pickDate 返回值异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/141906)
  + iOS平台 修复 安心打包使用 swift 开发的uni原生插件时上传 AppStore 报`ITMS-90426: Invalid Swift Support`错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/142611)
* 【Uni小程序SDK】
  + Android平台 新增 支持自定义实现获取匿名设备标识符OAID
  + Android平台 优化 混淆配置规则，解决 zip4j 可能与其他的库冲突的Bug
  + Android平台 修复 3.3.5 引出的 微信支付回调可能会引起崩溃的Bug
  + Android平台 修复 多个小程序分别配置使用 vue2、vue3， 同时打开可能引起白屏的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138576)
  + Android平台 修复 关闭小程序后台运行模式，重复操作打开/关闭小程序可能导致小程序无法正常运行的Bug
  + Android平台 修复 小程序切换到后台，直达页面启动时出现闪屏的Bug
  + Android平台 修复 微信登录连续多次调用可能会导致失败的Bug
  + Android平台 修复 转场动画在 Android12 设备可能失效的Bug
  + Android平台 修复 调用 startActivityForUniMPTask 在 Android8 以下设备可能会引起应用崩溃的Bug
  + iOS平台 修复 关闭小程序后快速启动小程序并直达页面，重复操作偶现崩溃的Bug
  + iOS平台 修复 小程序SDK中设置 user-agent 影响宿主原生页面中 Webview 的Bug


## 3.3.13.20220314
* 修复 3.3.9引出的 App 安心打包 manifest.json 配置Google统计 安心打包没有提交相关文件的bug
* 修复 MacOSX iOS安心打包 操作系统钥匙串访问 登录项没有显示的Bug
* 【uni-app插件】
  + 修复 vue3 项目兼容 vite@2.8.x [(**详情**)](https://ask.dcloud.net.cn/question/139311)
  + 修复 vue3 项目兼容 vite-plugin-eslint [(**详情**)](https://github.com/dcloudio/uni-app/issues/3247)
  + App平台、H5平台 修复 vue3 项目两个开启了下拉刷新的页面跳转后返回，下拉刷新不触发 onPullDownRefresh 生命周期的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3187)
  + App平台、H5平台 修复 vue3 项目 uni.pageScrollTo 的 duration 为0时不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139432)
  + App平台 修复 vue3 项目 nvue 页面使用 map 组件时部分方法不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138515)
  + App平台 修复 vue3 项目使用 html 原生标签（如div）时，事件监听报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3240)
  + App平台 修复 vue3 项目 navigator 组件和 rich-text 组件嵌套使用时 scopeId 值不一致导致的样式Bug [(**详情**)](https://ask.dcloud.net.cn/question/140644)
  + App平台 修复 vue3 项目 wxs/renderjs 监听事件运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3324)
  + App-Android平台 修复 vue3 项目 安卓低版本时使用 type=number 的 input 组件输入报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138088)
  + App-iOS平台 修复 vue3 项目 canvas 组件绘制本地图像后无法导出到本地到Bug
  + App-iOS平台 修复 vue3 项目 调试时启动白屏的Bug
  + H5平台 优化 uni.chooseLocation 支持传入坐标
  + H5平台 优化 vue3 项目 navigator 组件使用 a 标签渲染以利于SEO
  + H5平台 修复 vue2 项目开启摇树后 ad 组件失效的Bug
  + H5平台 修复 vue3 项目 image 组件 mode=heightFix 图像大小显示错误的Bug
  + H5平台 修复 vue3 项目 button 组件发行后 loading 不显示的Bug
  + H5平台 修复 vue3 项目 html 中引入 static 目录的 js 文件包含 ifdef 编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3201)
  + H5平台 修复 vue3 项目 renderjs 发行后不正常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137832)
  + H5平台 修复 vue3 项目 dataset 不支持对象类型错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139181)
  + H5平台 修复 vue3 项目 禁用摇树后，uni.showModal 等弹窗缺少样式的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139593)
  + H5平台 修复 vue3 项目 热刷新编译报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/135765)
  + H5平台 修复 vue3 项目 text 组件使用 v-if 时显示错误的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3225)
  + H5平台 修复 vue3 项目 wxs/renderjs 热刷新不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140800)
  + H5平台 修复 vue3 项目特定情况下拉刷新后页面跳转的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3326)
  + 小程序平台 修复 vue3 项目 uni.getSystemInfo 无法获取 deviceId 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139733)
  + 小程序平台 修复 vue3 项目 不支持 v-html 的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138290)
  + 小程序平台 修复 vue3 项目 v-if 中使用 wxs 等模块时报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3199)
  + 小程序平台 修复 vue3 项目 defineEmits 事件名包含 - 分隔符时无法正常监听的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3210)
  + 小程序平台 修复 vue3 项目 setup 手动引入组件不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3213)
  + 小程序平台 修复 vue3 项目 v-for 嵌套使用时部分情况运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3263)
  + 小程序平台 修复 vue3 项目 wxs 调用 callMethod 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3218)
  + 小程序平台 修复 vue3 项目 全局组件路径解析错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138662)
  + 小程序平台 修复 vue3 项目 全局 mixin 分享 onShareAppMessage，onShareTimeline 不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/140351)
  + 小程序平台 修复 vue3 项目部分情况下视图更新延迟的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3311)
  + 小程序平台 修复 vue3 项目模板中 style 属性包含换行符时编译报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3320)
  + 微信小程序平台 修复 vue3 项目 canvas 监听 touch 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3209)
  + 微信小程序平台 修复 vue3 项目部分情况下事件监听错乱的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3228)
  + 微信小程序平台 修复 vue3 项目使用小程序插件组件无法传递属性的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3257)
  + 支付宝小程序平台 优化 vue3 项目默认开启 es6=>es5 [(**详情**)](https://ask.dcloud.net.cn/question/140742)
* 【App插件(含5+App和uni-app的App端)】
  + 更新 uni-AD 腾讯优量汇SDK Android为 4.450.1320 版，iOS为 4.13.50 版；今日头条穿山甲SDK Android为 4.3.0.1 版， iOS为 4.3.0.2 版；快手广告SDK Android为 3.3.21 版，iOS为 3.3.21 版
  + Android平台 更新 UniPush 使用的个推SDK版本为3.2.7.0，个推核心组件SDK版本为3.1.7.0，优化云端打包按需包含厂商通道SDK
  + Android平台 修复 一键登录 授权页面服务协议自定义复选框状态图片设置不正确的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139830)
  + iOS平台 修复 geitImageInfo 可能不触发回调的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139361)

## 3.3.11.20220210
* 修复 HBuilderX CLI发行微信小程序，某些情况下，HBuilderX出现出现闪退的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139189)
* 修复 3.3.10引出的 uni-app 运行到浏览器 某些情况下，HBuilderX出现闪退的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138828)
* 修复 3.3.9引出的 uni-app 运行 自定义条件编译没有生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/139125)
* 【uni-app插件】
  + H5平台 修复 3.3.9 引出的 uni.previewImage 预览图像无法拖动的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138972)
  + App-Android平台 修复 3.3.10版本引出的 picker 组件样式错误的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138748)
  + App-iOS平台 修复 3.3.9 版本引出的 nvue swiper-list 组件中的 list 组件设置 show-scrollbar 为 false 时吸顶效果异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138944)
* 【App插件(含5+App和uni-app的App端)】
  + Android平台 修复 3.3.9 版本引出的 一键登录 同时自定义 logo 与 closeIcon 可能导致显示异常的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137642)
  + iOS平台 修复 Downloader 下载图片文件可能失败的Bug [(**详情**)](https://ask.dcloud.net.cn/question/116101)

## 3.3.10.20220124
* 修复 3.3.9引出的 uni-app 自定义发行 运行错误的Bug
* 修复 uniCloud 当项目比较大时 控制台切换卡顿的Bug
* 【uni-app插件】
  + 支付宝小程序平台 修复 触发自定义事件报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138706)
* 【uniCloud】
  + 修复 3.3.9版本引发的 multiSend 报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138783)
* 【uni小程序SDK】
  + iOS平台 修复 动态切换横竖屏导致页面布局异常的Bug

## 3.3.9.20220121
* 新增 HBuilderX CLI 支持发行uni-app到微信小程序 [(**详情**)](https://hx.dcloud.net.cn/cli/publish-mp-weixin)
* 新增 HBuilderX CLI 支持发行uni-app到H5 [(**详情**)](https://hx.dcloud.net.cn/cli/publish-h5)
* 修复 MacOSX 某些情况下，项目管理器项目无法展开的Bug
* 调整 内置浏览器 地理位置设置 经纬度支持设置6位小数
* 修复 App 真机运行 部分Windows电脑运行App到iOS15以上手机失败的Bug
* 修复 App 真机运行 部分Android 11系统，同步文件失败的Bug
* 修复 uni-app 安心打包 没有生成iOS符号表文件的Bug
* 调整 uni-app 发行到微信小程序，支持自动上传代码到微信平台，无需再通过微信开发者工具上传发行 [(**详情**)](https://hx.dcloud.net.cn/Tutorial/App/uni-app-publish-mp-weixin)
* 【uni-app插件】
  + 优化 vue3 项目 vite.config.js 支持自定义 isCustomElement，isNativeTag  [(**详情**)](https://github.com/dcloudio/uni-app/issues/3133)
  + 优化 vue3 项目 vite.config.js 支持自定义 scss additionalData [(**详情**)](https://github.com/dcloudio/uni-app/issues/3135)
  + 修复 vue3 项目 static 目录不支持按平台编译的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3132)
  + App平台、H5平台 新增 textarea、input 组件支持 confirm-hold 属性 [(**详情**)](https://uniapp.dcloud.io/component/input)
  + App平台、H5平台 优化 image 组件 draggable 属性默认值改为 false
  + App平台 优化 uni.request 请求参数支持 ArrayBuffer 类型
  + App平台 修复 nvue 页面使用 scss/sass 时条件编译不生效的Bug
  + App平台 修复 vue3 项目 发行后 renderjs 调用 ownerInstance.callMethod 失效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137832)
  + App平台 修复 vue3 项目 picker 组件默认语言固定为英文的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136954)
  + App-Android平台 修复 picker 组件选择选项后同页面 input 组件可能无法正常获取焦点的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138237)
  + App-Android平台 修复 nvue input 组件不支持自定义字体的Bug [(**详情**)](https://ask.dcloud.net.cn/question/135514)
  + App-Android平台 修复 nvue list 组件不支持 click 事件的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136754)
  + App-iOS平台 修复 nvue swiper-list 组件滚动条无法隐藏的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136261)
  + App-iOS平台 修复 3.3.3 版本引出的支持多个音频同时播放引发iOS影响静音开关的问题，默认不支持同时播放多个文件，如果需要可手动设置 sessionCategory
  + H5平台 修复 vue3 项目 manifest.json 中配置 devServer 不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/133429)
  + H5平台 修复 右键单击事件 contextmenu 丢失 clientX、clientY 属性的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136530)
  + 小程序平台 修复 启用压缩后差量更新过慢的Bug
  + 小程序平台 修复 模板中包含转义引号时在小程序开发工具中编译报错或显示异常的Bug
  + 小程序平台 修复 vue3 项目 组件使用 id 属性不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3179)
  + 小程序平台 修复 vue3 项目 部分情况 defineExpose 不生效的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3180)
  + 小程序平台 修复 vue3 项目 兼容 unocss 插件 [(**详情**)](https://ask.dcloud.net.cn/question/138021)
  + 小程序平台 修复 3.3.4 版本引出的发行模式下包体积变大的Bug
  + 微信小程序平台 修复 vue3 项目 v-for 中绑定事件可能错乱的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137217)
  + 微信小程序平台 修复 多页面，组件内使用插槽数据时，差量编译丢失插槽信息的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136258)
  + 微信小程序平台 修复 vue3 项目 当 v-for 循环变量名为 index 时渲染不正确的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3193)
  + 微信小程序平台 修复 vue3 项目无法自动开启开发工具窗口的Bug
  + 百度小程序平台 修复 vue3 项目 对象类型数据差量更新时报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137222)  
  + 支付宝小程序平台 修复 vue3 项目 mixin 中包含 props 运行报错的Bug [(**详情**)](https://github.com/dcloudio/uni-app/issues/3191)
* 【uniCloud】
  + 修复 JQL语法 getTemp 返回结果传递给组件属性时在微信小程序端报错的Bug [(**详情**)](https://ask.dcloud.net.cn/question/138308)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在临时表内使用 as 或其他运算操作 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 新增 JQL语法 使用 getTemp 进行联表查询时，支持在虚拟联表内使用 foreignKey 方法指定要使用的 foreignKey 的归属的字段 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp)
  + 新增 web控制台 阿里云 前端网页托管支持为指定路径开启 uni-app history 路由跳转模式支持 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/hosting?id=routing)
  + 新增 uni-id 支持自定义国际化语言支持 [(**详情**)](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=custom-i8n)
  + 修复 uni-id 一键登录时未校验重复手机号是否已验证的Bug
  + 修复 uni-id Apple 登录时用户邮箱为空时报错的Bug
  + 修复 uni-id 用户名密码登录时多个应用出现重复用户名登录报错的Bug
  + 修复 本地调试插件 打开非云函数根目录文件时使用运行菜单本地运行云函数报错的Bug
  + 修复 本地调试插件 部分情况下客户端连接启用了 JQL 扩展的本地云函数报错的Bug
* 【App插件(含5+App和uni-app的App端)】
  + 【重要】新增 Payment 模块支持 Paypal支付、Stripe支付、Google支付 [文档](https://uniapp.dcloud.io/app-payment)
  + 【重要】新增 Statistic 模块支持 Google统计 [文档](https://uniapp.dcloud.io/app-statistic-google)
  + 新增 一键登录 支持 closeIcon 属性设置自定义关闭按钮图片 [文档](https://uniapp.dcloud.io/univerify)
  + 更新 uni-AD 快手广告SDK Android为 3.3.20 版，iOS为 3.3.20 版；快手内容联盟SDK Android为 3.3.27 版， iOS为 3.3.27 版
  + Android平台 修复 调用 plus.runtime.restart 重启应用后 user-agent 会清空的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136105)
  + Android平台 修复 plus.downloader.enumerate 可能获取不到下载任务的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137548)
  + Android平台 修复 一键登录 在部分 Android 8.0、8.1 设备无法弹出登录框的Bug
  + Android平台 修复 一键登录 设置登录界面 logo 图片可能不生效的Bug
  + Android平台 修复 视频播放控件 VideoPlayer 设置 object-fit 属性可能不生效的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137150)
  + Android平台 修复 使用系统定位模块执行 watchPosition 后再执行 getCurrentPosition 可能失败的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137586)
  + Android平台 修复 Push模块 createMessage 在安卓系统8以下系统可能无法创建通知栏消息的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137923)
  + Android平台 修复 图片选择界面设置 crop 属性在部分手机和模拟器上可能引起黑屏崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/136969)
  + Android平台 修复 图片选择界面未勾选`原图`时图片方向可能发生变化的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137358)
  + iOS平台 修复 uni-AD 使用自定义 storyboard 时开屏广告底部应用图标、名称可能不显示的Bug
* 【uni小程序SDK】
  + 新增 小程序 wgt 资源文件支持加密 [文档](https://nativesupport.dcloud.net.cn/UniMPDocs/API/ios?id=installWgt)
  + Android平台 修复 不设置任何参数初始化小程序SDK可能会引起崩溃的Bug [(**详情**)](https://ask.dcloud.net.cn/question/137175)
  + Android平台 修复 启动使用 vue3 的小程序可能出现白屏的Bug
  + iOS平台 修复 小程序未开启后台运行，通过手势关闭小程序后快速打开小程序偶现崩溃的Bug
  + iOS平台 修复 在隐藏小程序的回调方法中再次打开同一小程序无效的Bug
  + iOS平台 修复 同时打开多个小程序 getCurrentPageUrl 获取当前显示的小程序页面路径不正确的Bug

## 历史更新日志
[https://update.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_release_archive.html](https://update.dcloud.net.cn/hbuilderx/changelog/ReleaseNote_release_archive.html)
