winget show 百度网盘

找到多个与输入条件匹配的程序包。请修改输入。

名称     ID                 源

-----------------------------------

百度网盘 XP9CXM3N2B06J1     msstore

百度网盘 Baidu.BaiduNetdisk winget

---------------------------------------------

<li>问答：如何通过winget install 命令将百度网盘安装到指定D盘文件夹？</li>

<details>
				<summary><a href="https://www.doubao.com/chat/12533976288417282">Winget 安装百度网盘到指定目录 - 抖音·豆包</a><br>
根据提供的信息，百度网盘在winget上有两个可用的包：`XP9CXM3N2B06J1`（来自Microsoft Store）和`Baidu.BaiduNetdisk`（来自winget源）。要安装到指定的D盘目录，可使用以下命令：

```bash
winget install --id Baidu.BaiduNetdisk --location "D:\Program Files\BaiduNetdisk"
```

</summary>

**说明：**
1. `--id Baidu.BaiduNetdisk` 指定使用winget源的百度网盘包（非Microsoft Store版本）
2. `--location` 参数用于指定安装目录（需确保路径存在且有写入权限）
3. 如果目录包含空格，需用引号包裹路径

**注意事项：**
- 部分应用可能不支持自定义安装位置，此时此参数会被忽略
- 建议先创建目标文件夹（如 `D:\Program Files\BaiduNetdisk`）
- 安装前请确保D盘有足够空间并关闭杀毒软件临时保护

如果命令执行后仍安装到默认位置，可能是应用本身限制了安装路径，这种情况下需通过应用内置的设置选项更改保存文件的存储位置。
</details>
<hr>
<details>
				<summary><a href="https://yuanbao.tencent.com/chat/naQivTmsDa/74fe996e-7d6a-4a81-86d6-52f953a75b79">winget安装百度网盘路径设置 | 腾讯·元宝</a></summary>
要使用 `winget` 将百度网盘安装到 D 盘指定文件夹，请按以下步骤操作：

### 1. **确认安装包 ID**
根据你的查询结果，选择 **Winget 源**的版本（非 Microsoft Store 版本），其 ID 为 `Baidu.BaiduNetdisk`。

### 2. **使用 `--location` 参数指定安装路径**
运行以下命令（替换 `D:\Your\Custom\Path` 为你的目标路径）：
```powershell
winget install --id Baidu.BaiduNetdisk --location "D:\Your\Custom\Path"
```
- **示例**（安装到 `D:\Programs\BaiduNetdisk`）：
  ```powershell
  winget install --id Baidu.BaiduNetdisk --location "D:\Programs\BaiduNetdisk"
  ```

### 3. **注意事项**
- **路径格式**：路径必须用**英文双引号**包裹（尤其路径含空格时）。
- **权限要求**：以**管理员身份**运行 PowerShell/CMD（否则可能无权限写入磁盘）。
- **安装程序兼容性**：部分安装程序可能忽略 `--location` 参数（依赖软件自身支持）。如果安装后仍在默认路径（如 `C:\Program Files`），需手动检查或使用其他方法。

### 替代方案（如 `--location` 无效）
若上述命令无效，可尝试通过 `--override` 传递安装参数（需百度网盘安装程序支持）：
```powershell
winget install --id Baidu.BaiduNetdisk --override "/DIR=D:\Your\Custom\Path /SILENT"
```
- 参数说明：
  - `/DIR=...`：指定安装路径（具体参数名需查阅百度网盘安装文档）。
  - `/SILENT`：静默安装（可选）。

### 总结
优先使用 `--location` 参数指定路径。若无效，尝试用 `--override` 传递安装参数，或直接下载离线安装包手动选择路径安装。
</details>
