//Setup 이미지 동적 생성
var bSetup = false;
function setBlock(param, param1)
{
	if(bSetup)
		return;
	bSetup = true;
	
	try{
		ShowWaitMsg(false);	
	}catch(e){}
		
	if(param == null || param == "")
		param = "first";
	
	if(param1 == null || param1 == "")
		param1 = 0;
	
	var msg;
	if(param == "update")
		msg = "<br>보안 프로그램의 <font color=brown>최신 버전</font>이 업데이트 됐습니다.<BR><font color=brown>다운로드 후 재설치</font>를 하셔야 정상적인 이용이 가능합니다.<br><br>";
	else if(param == "timeout"){
		msg = "<br>서버와의 통신이 원활하지 않습니다.<BR><font color=brown>F5키를 눌러 새로고침</font>해 주시기 바랍니다.<BR>새로고침 후에도 <font color=orange>계속 문제 시 재설치</font>해 주시기 바랍니다.<br><br>";
	}
	else	
		msg = "<br>고객님의 안전한 사용을 위하여 보안프로그램을 설치하셔야 합니다.<br><br>";
	
	var str;	
	var SetupFile = "WebCubeAgentSetup.exe";
	if(CurrentBrowser == "IE" && WebCube_MODE_IE == "A"){
		var clintInfoObj = window.clientInformation;
		var browser = clintInfoObj.platform;
		//alert(navigator.appVersion);
		if((clintInfoObj.appVersion.toLowerCase().indexOf("x64") < 0) &&(clintInfoObj.appVersion.toLowerCase().indexOf("wow64") < 0))
		{
			SetupFile = "WebCubeSetup.exe";
		}
		else
		{
			if(browser.toLowerCase() != "win64") 
			{
				SetupFile = "WebCubeSetupwow.exe";
			}
			else
			{
				SetupFile = "WebCubeSetup64.exe";
			}
		}
	}
	
	if(param1 == 0){
	
		str = '<BR><BR><BR><BR>';
		str += '<TABLE border=2 bordercolor=#6083C3 width=600 align=center>';
		str += '<TR height=30 bgcolor=#6083C3>';
		str += '<TD align=center>';
		str += '<font color=#FFFFFF face=돋움><B>';
		str += msg;
		str += '</B></font></TD></TR><TR><TD align=center>';	
		str += '<BR><FONT color=#5274BE face=돋움 size=5 style=font-weight:bold>웹 보안 프로그램 다운로드</FONT><BR><BR>';
		
		str += '<a href="' + WebCube_SetupFilePath + SetupFile + '">';

		str += '<img src="' + WebCube_ImageFilePath + 'bt_download.png" border="0" style="cursor:hand;"></a><BR><BR>';					
		str += '<FONT color=#5274BE><B>본 사이트는 웹 보안 프로그램이 설치되어야만 이용하실 수 있습니다.<BR>';
		str += '고객님의 정보 보호를 위하여 웹 보안 프로그램을 설치해 주시기 바랍니다.<BR></FONT>';
		str += '&nbsp;&nbsp;<IMG src="' + WebCube_ImageFilePath + 'plugin_bg.gif" width=150 height=50></TD></TR></TABLE></html>';			
	}	
	else if(param1 == 1){
		str = '<link href="'+WebCube_ImageFilePath + 'pantople.css" rel="stylesheet">';
		str += '<div id="bg">';		
		str += '<img src="'+WebCube_ImageFilePath + 'teruten1_bg.jpg" alt="bg"></div>';
		if(param == "update" || param == "timeout"){
			str += '<div id="msg">';
			str += '<font color=#999999 face="돋움" fontSize="20"><B>';
			str += msg;
			str += '</B></font></div>';
		}
		str += '<div id="bt">';
		str += '<a href="' + WebCube_SetupFilePath + SetupFile + '">';
		str += '<img src="'+WebCube_ImageFilePath + 'teruten1_bt.png" style="cursor:hand;" alt="bt"></a></div>';	

	}
	else if(param1 == 2){
		str = '<link href="'+WebCube_ImageFilePath + 'pantople.css" rel="stylesheet">';
		str += '<div id="bg1">';		
		str += '<img src="'+WebCube_ImageFilePath + 'teruten2_bg.jpg" alt="bg"></div>';
		if(param == "update" || param == "timeout"){
			str += '<div id="msg1">';
			str += '<font color=#999999 face="돋움" fontSize="20"><B>';
			str += msg;
			str += '</B></font></div>';
		}
		str += '<div id="bt1">';
		str += '<a href="' + WebCube_SetupFilePath + SetupFile + '">';
		str += '<img src="'+WebCube_ImageFilePath + 'teruten2_bt.png" style="cursor:hand;" alt="bt"></a></div>';
	}
		
	var div = document.createElement("div");
	div.align = "center";
	div.innerHTML = str;
	div.style.display = "block";
	document.body.appendChild(div);
}