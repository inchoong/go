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