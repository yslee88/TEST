function ShowWaitMsg(bool)
{	
	if(bool){
		
		var WaitMsg = document.createElement("div");
		
		WaitMsg.id = "WaitMsg";
		WaitMsg.align = "center";
		WaitMsg.innerHTML = "<BR><BR><BR><H2><FONT style='color:gray'>보안프로그램의 설치 여부를 확인 중입니다.<BR>잠시만 기다려 주시기 바랍니다.</FONT><H2>";
		var img = document.createElement("img");
		img.src = "./WebCube/img/plugin.gif";
		WaitMsg.appendChild(img);
		document.body.appendChild(WaitMsg);		
	}
	else{		
	if(WebCube_MODE_IE != "A")
		document.getElementById("WaitMsg").style.display = "none";		
	}	
}