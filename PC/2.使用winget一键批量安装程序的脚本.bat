@echo off
title ʹ�� winget ���߰�װ�͹���Ӧ�ó���һ����װ�ű�

echo ��������Դ && ��������Ӧ��
winget source update
winget upgrade --all

echo  *******************************************
echo  * ��һ���ֻ�Ϊ�ʼǱ��������Դ������밲װ *
echo  *******************************************
echo ��װ ��Ϊ Free Touch ���ذ�
echo winget install HuaweiPC.HUAWEIFreeTouch_amfdc1pkdnmaa

echo ��װ ��Ϊ Huawei Histen ��Ч
echo winget install HuaweiPC.Huawei-Histen_amfdc1pkdnmaa

echo ��װ ��Ϊ��ʾ������
echo winget install HwOsd

echo ��װ  MSN ����  
echo winget install Microsoft.BingWeather_8wekyb3d8bbwe  

echo ��װ  MSN ��Ѷ  
echo winget install Microsoft.BingNews_8wekyb3d8bbwe

echo ��װ  Ӧ�ð�װ����
echo winget install Microsoft.AppInstaller
echo  *******************************************
echo  * ��һ���ֻ�Ϊ�ʼǱ��������Դ������밲װ *
echo  *******************************************

echo ��װ QQ �� ΢��
winget install QQ || winget install wechat

echo ��װ΢��office�칫���
winget install --id=Microsoft.Office -e

echo ��װ��Դ��ѹ����
winget install 7-Zip

echo ��װ��Դж�ع���
winget install BCUninstaller

echo ��װ��ԴԶ���������
winget install RustDesk

echo ��װ��Դֱ�����
winget install OBSProject.OBSStudio

echo ��װ IDM ���ع���
winget install Tonec.InternetDownloadManager

echo ��װ�ļ���������
winget install voidtools.Everything

echo ��װ΢��ٷ���ԴЧ�ʹ���
winget install Microsoft.PowerToys

echo ��װ΢��������VSCode
winget install Microsoft.VisualStudioCode

echo ��װCloudflare WARP
winget install Cloudflare.Warp

echo ��װChrome�����
winget install Google.Chrome

echo ��װ Discord ��Ϸ����Ӧ��������ͨѶ����
winget install Discord.Discord

echo ��װ��Դ�༭��Notepad++
winget install Notepad++.Notepad++

echo ��װ����Ӱ�������� Spotify
winget install Daum.PotPlayer

echo ��װ��Դ������ VLC media player
winget install VideoLAN.VLC

echo ��װBTSync
winget install "BitTorrent Sync" --version 1.4.111

echo ��װ������ӳ���
winget install --id=ByteDance.JianyingPro -e

echo ��װ��ҵ΢��
winget install Tencent.wechat-work

echo ��װ΢�ſ����߹���
winget install Tencent.WeixinDevTools

echo ��װ��ɽ WPS Office
winget search Kingsoft.WPSOffice

echo ��װ��ԴSSH���ӹ���PuTTY
winget install PuTTY.PuTTY

echo ��װ��ԴSFTP�ļ����乤��
winget install WinSCP.WinSCP

echo ������װ�ĳ����б��Ŀ¼·��
winget list > installed_programs.txt

echo ��װ��ɣ�
pause