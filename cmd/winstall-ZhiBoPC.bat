echo      *******************************************
echo      * * ��������Դ* * 
winget source update  
echo      *******************************************
echo      * * ��������Ӧ��* * 
winget upgrade --all
echo      *******************************************
echo.
&& winget install --id=Baidu.BaiduNetdisk -e  
&& winget install --id=OBSProject.OBSStudio -e 
&& winget install --id=Tencent.WeCom -e 
&& winget install --id=Notepad++.Notepad++ -e 
&& winget install --id=voidtools.Everything -e 
&& winget install --id=Klocman.BulkCrapUninstaller -e 

echo      * * && winget install --id=  -e * * 

echo      * * ��װ΢��office�칫���* * 
&& winget install --id=Microsoft.Office -e 
echo      * * ��װ��Ѷ�ĵ� * * 
&& winget install --id=Tencent.Docs -e 
echo      * *��װ��Դ��ѹ����: * *
&& winget install --id=7-Zip
echo      * *��װ��Դж�ع���: * *
&& winget install --id=BCUninstaller -e
echo      * *��װ��ԴԶ���������: * *
&& winget install --id=RustDesk -e
echo      * *��װ��Դֱ�����: * *
&& winget install --id=OBSProject.OBSStudio -e
echo      * *��װ������ӳ���:https://winstall.app/apps/ByteDance.JianyingPro * *
&& winget install --id=ByteDance.JianyingPro  -e
echo      * *��װ IDM ���ع���:* *
&& winget install --id=Tonec.InternetDownloadManager -e
echo      * *��װ�ļ���������:* *
&& winget install --id=voidtools.Everything -e
echo      * *��װ΢��ٷ���ԴЧ�ʹ���: * *
&& winget install --id=Microsoft.PowerToys -e
echo      * *��װChrome�����: * *
&& winget install --id=google.chrome -e
echo      * *��װFirefox�����: * *
&& winget install --id=Mozilla.Firefox -e
echo      * *��װ��Դ�༭��Notepad++: * *
&& winget install --id=Notepad++.Notepad++ -e
echo      * *��װ��Դ����ͼ�������:* *
&& winget install --id=Draw.io -e
echo      * *��װ��Դ����Ӱ�� SPlayer:* *
&& winget install Shooter.SPlayerX -e
echo      * *��װ����Ӱ�������� Spotify:* *
&& winget install --id=Daum.PotPlayer -e
echo      * *��װ��Դ������ VLC media player: * *
&& winget install --id=VideoLAN.VLC -e
echo      * *��װ���ֲ����� Spotify: * *
&& winget install --id=Spotify.Spotify -e
echo      * *��װBTSync: * *
&& winget install --id=BitTorrent Sync --version 1.4.111 -e

@ECHO OFF
tree /F %1>>winstall-list.txt
pause