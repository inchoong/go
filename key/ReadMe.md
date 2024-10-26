# 神Key - 最有种的 Sync 资源 | 神 Key http://nas.bilishare.com/shenkey/

<details>
		<summary>
4.<b>云服务器</b>：<a href="https://go.choong.net/key/" title="神Key - 最有种的 Sync 资源 | 神 Key">神Key - 最有种的 Sync 资源 | BTSync</a> <br>      
     (BTSync 默认使用的端口，添加或修改 UDP 端口： 19840 和 TCP 端口： 8888（如果需要）的端口访问规则)
</summary>
<h3><a href="https://go.choong.net/key/wbbbaa94131cd504d.html">BTSync搜索DHT网络作用</a>@<a href="https://www.doubao.com/thread/wbbbaa94131cd504d">豆包</a></h3>
 <li><b>在阿里云服务器中使用 BTSync，通常需要开启以下端口及相关操作方法：</b></li><br>
<li>1. <b>BTSync 默认使用的端口</b>：</li>
    - <b>UDP 端口 19840</b>：BTSync 用于节点发现和通信的主要 UDP 端口。在阿里云服务器的安全组规则中，
	需要允许入方向和出方向的 UDP 19840 端口的访问，以便 BTSync 能够与其他节点进行通信和发现。
	这一步骤是确保 BTSync 能够正常工作的关键，因为该端口是 BTSync 软件在 P2P 网络中进行节点交互的重要通道。<br>
    - <b>TCP 端口 8888（可选）</b>：有些情况下，BTSync 可能会使用 TCP 端口 8888 进行一些辅助通信或特定功能。
	如果您在使用过程中发现需要开启该端口才能使 BTSync 正常运行某些功能，
	那么也需要在阿里云服务器的安全组规则中允许入方向和出方向的 TCP 8888 端口的访问。<br><br>
<li>2. <b>具体操作步骤</b>：</li>
    - <b>登录阿里云控制台</b>：访问<a href="https://www.aliyun.com/"><b>阿里云官网</b></a> 并登录到您的账号，进入阿里云控制台。<br>
    - <b>找到安全组设置</b>：在控制台中，找到与您的云服务器相关的安全组设置选项。
	不同类型的云服务器（如 ECS 等）可能在控制台的不同位置找到安全组设置，但一般都在网络相关的部分。<br>
    - <b>创建或修改安全组规则</b>：<br>
        - 如果是创建新的安全组规则，点击“创建安全组规则”按钮，
		然后选择协议类型（<b>UDP 或 TCP</b>，根据需要开启的端口而定）、
		端口范围（输入 <b>19840</b> 或 <b>8888</b> 等具体端口号），并设置源 IP 地址范围。
		对于测试或初期使用，您可以将源 IP 地址范围设置为“0.0.0.0/0”，
		表示允许任何 IP 地址访问该端口，但在实际生产环境中，建议根据具体需求进行更严格的 IP 地址限制，以提高安全性。<br>
        - 如果是修改已有的安全组规则，找到对应的安全组，点击“配置规则”或“编辑规则”等按钮，
		然后添加或修改 <b>UDP 19840</b> 和 <b>TCP 8888</b>（如果需要）的端口访问规则。<br>
    - <b>应用安全组规则</b>：完成安全组规则的设置后，点击“确定”或“应用”等按钮，使规则生效。
	此时，您的阿里云服务器就允许了 BTSync 使用相应的端口进行通信。<br>
<br>
<b>请注意</b>，在使用 BTSync 时，要确保您的使用方式符合相关法律法规和阿里云的服务条款。
同时，开放端口可能会带来一定的安全风险，建议您在使用后及时关闭不需要的端口，或者采取其他安全措施来保护您的服务器安全。
</details>
<a href="https://github.com/resiliosynccn/ResilioSync/tree/Resilio-Sync%E8%B5%84%E6%BA%90%E6%A3%80%E7%B4%A2-5%E6%9C%88%E6%9B%B4%E6%96%B0-2be9e56cc4f1499780dada6fcd64ac0b">resiliosynccn/ResilioSync at Resilio-Sync资源检索-5月更新-2be9e56cc4f1499780dada6fcd64ac0b</a><br>      
