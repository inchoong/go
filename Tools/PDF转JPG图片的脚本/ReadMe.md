写一个PDF转JPG图片的脚本给我。

----------------------------------

这是一个非常实用的需求。根据你之前的提问习惯，我为你准备了两种不同形式的脚本：一种是**Python 脚本**（适合批量处理、自动化），另一种是**Windows 批处理脚本**（无需安装 Python，直接运行）。

### 方案一：Python 脚本（推荐，质量高）

这个脚本使用 `pdf2image` 库，它底层调用 Poppler 工具，转换质量非常高，支持设置 DPI（清晰度）。

**1. 准备工作：**
你需要安装 Python，并安装以下库：
```bash
pip install pdf2image pillow
```
*注意：Windows 用户还需要下载 Poppler 工具包（[下载链接](https://github.com/oschwartz10612/poppler-windows/releases/)），解压后将 `poppler-xx/bin` 目录添加到系统环境变量 PATH 中，或者在脚本中指定路径。*

**2. 脚本代码 (`pdf_to_jpg.py`)：**

```python
import os
from pdf2image import convert_from_path
from PIL import Image

def pdf_to_jpg(pdf_path, output_folder, dpi=300, poppler_path=None):
    """
    将 PDF 转换为 JPG 图片
    :param pdf_path: PDF 文件路径
    :param output_folder: 输出文件夹路径
    :param dpi: 清晰度 (默认 300)
    :param poppler_path: Windows 下 poppler/bin 的路径，如果已配置环境变量则留空
    """
    
    # 1. 检查文件是否存在
    if not os.path.exists(pdf_path):
        print(f"❌ 错误：找不到文件 {pdf_path}")
        return

    # 2. 创建输出目录
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    print(f"🚀 开始转换: {pdf_path} ...")

    try:
        # 3. 执行转换
        # 注意：windows 用户如果报错 "Unable to get page count"，请务必填写 poppler_path 参数
        pages = convert_from_path(pdf_path, dpi=dpi, poppler_path=poppler_path)

        # 4. 保存图片
        base_filename = os.path.splitext(os.path.basename(pdf_path))[0]
        
        for i, page in enumerate(pages):
            # 转换为 RGB 模式（防止透明通道导致保存报错）
            if page.mode != 'RGB':
                page = page.convert('RGB')
            
            output_file = os.path.join(output_folder, f"{base_filename}_page_{i+1}.jpg")
            page.save(output_file, "JPEG", quality=95)
            print(f"✅ 已保存: {output_file}")

        print("🎉 转换完成！")

    except Exception as e:
        print(f"❌ 转换失败: {e}")
        print("提示：如果是 Windows 系统，请检查是否安装了 Poppler 并配置了路径。")

if __name__ == "__main__":
    # ================= 配置区域 =================
    input_pdf = "example.pdf"          # 这里填你的 PDF 文件名或路径
    output_dir = "output_images"       # 输出文件夹名
    dpi_setting = 200                  # 清晰度设置 (150-300 之间比较合适)
    
    # Windows 用户示例: poppler_path = r"C:\poppler-xx\Library\bin"
    # Mac/Linux 用户通常不需要填此项，保持 None 即可
    poppler_bin_path = None            
    # ===========================================

    pdf_to_jpg(input_pdf, output_dir, dpi=dpi_setting, poppler_path=poppler_bin_path)
```

---

### 方案二：Windows 批处理脚本（最简单，无需编程环境）

如果你不想安装 Python，可以使用 ImageMagick 工具配合批处理脚本。

**1. 准备工作：**
下载并安装 [ImageMagick](https://imagemagick.org/script/download.php#windows)（安装时勾选 "Add to PATH"）。

**2. 脚本代码 (`convert.bat`)：**

将以下代码保存为 `.bat` 文件，把 PDF 文件拖到这个 bat 文件上，或者把 bat 文件放到 PDF 同级目录下运行。

```batch
@echo off
setlocal enabledelayedexpansion

:: 检查是否拖入了文件
if "%~1"=="" (
    echo 请将 PDF 文件拖拽到此脚本上，或确保脚本与 PDF 在同一目录。
    pause
    exit /b
)

:: 获取文件名（不含扩展名）
set "filename=%~n1"
set "filepath=%~1"

:: 创建输出文件夹
if not exist "%filename%_jpg" mkdir "%filename%_jpg"

echo 正在转换 %filename%.pdf 为 JPG 图片...
echo 请稍候...

:: 使用 ImageMagick 进行转换
:: -density 300 设置清晰度
:: -quality 90 设置图片质量
magick convert -density 300 "%filepath%" -quality 90 "%filename%_jpg\page_%%d.jpg"

echo.
echo ✅ 转换完成！图片已保存至 "%filename%_jpg" 文件夹。
pause
```

### 💡 常见问题与建议

1.  **清晰度问题**：
    *   在 Python 脚本中，调整 `dpi` 参数。默认屏幕显示是 72 或 96，打印质量通常设为 **300**。数值越大图片越清晰，但文件体积越大，转换越慢。
2.  **Windows 报错 `Unable to get page count`**：
    *   这是 Python 方案中最常见的问题。原因是 `pdf2image` 找不到 Poppler。请务必下载 Poppler 并在脚本中指定 `poppler_path`，或者将其 `bin` 目录加入系统环境变量。
3.  **颜色偏差**：
    *   如果转换出来的图片颜色发灰或发紫，通常是因为 PDF 使用了 CMYK 色彩模式。Python 脚本中我已经加入了 `.convert('RGB')` 代码来自动修复这个问题。
