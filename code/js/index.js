console.log(`%c
____________________________________________________________%c
     _________     _________       __         ___      _________
    /   _____/|   /   ____  ＼    /  /|  __  /  /|    /   ______/|
   /   /|____|/  /   /___ノ  |   /  / //  /|/  / /   /   / _____|/
  /   //        /   ___    _//  /  / //  / /  / /   /   / /_   /|
 /   /_____    /   /|__|\\  \\ノ  |\\ \\//  /_/  / /   /   /___/  / /
/_________/|  /___/ /   \\\\ _\\   \\\\____ノ\___ノ/    /_________ / /
|_________|/  |___|/     \\|_|    \\___|ノ\____ノ    |__________|/

  %cthe old website of CRWG: https://adhara-a.github.io/CRWG
             Bilibili: @Adhara-弧矢七
%c_____________________________________________________________
`,'color:#eac277','color:#b0caff','color:#ffe4c4','color:#eac277');
var k = 1
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) {
       return c.substring(name.length,c.length);
    }
  }
  return "";
}
var k = 1;
function wo(){
  switch (k) {
    case 1:
      document.getElementById("fgcolor").innerHTML=`
      <link rel="stylesheet" href="https://adhara-a.github.io/CloudRain.astro.workgroup/code/css/fg/white.css">`;
      document.getElementById("bj").innerHTML=`点击切换为黑色`;
      setCookie("fg","white",5);
      k = k + 1;
      break;

    case 2:
      document.getElementById("fgcolor").innerHTML=`
      <link rel="stylesheet" href="https://adhara-a.github.io/CloudRain.astro.workgroup/code/css/fg/black.css">`;
      document.getElementById("bj").innerHTML=`点击切换为白色`;
      setCookie("fg","black",5);
      k = k - 1;
      break;

    default:
      break;
    }
}
function checkCookie(){
  var user=getCookie("fg");
	if (user!=""){
    if (user == "white"){
      document.getElementById("fgcolor").innerHTML=`
      <link rel="stylesheet" href="https://adhara-a.github.io/CloudRain.astro.workgroup/code/css/fg/white.css">`;
      k = 2
    }else{
      document.getElementById("fgcolor").innerHTML=`
      <link rel="stylesheet" href="https://adhara-a.github.io/CloudRain.astro.workgroup/code/css/fg/black.css">`;
    }
	}
	else {
		document.getElementById("fgcolor").innerHTML=`
    <link rel="stylesheet" href="/code/css/fg/black.css">`;
	}
  var backgroundImg =[
    'https://p1.xywm.ltd/2023/05/14/94277d6a35443aec2e71dec38c2c1826.jpg',
    'https://p1.xywm.ltd/2023/05/14/4d464c2926fcd354f30dfc3095ed7dcf.jpg',
    'https://p1.xywm.ltd/2023/05/14/c7ea36d74ceb0871a9480b0237ad66ae.jpg',
    'https://p1.xywm.ltd/2023/05/14/d7c63cf3e4241a5bc21f596e602199ed.jpg',
    'https://p1.xywm.ltd/2023/05/15/10856fe1b8e0d5a0b73ac2caa8244542.jpg'
  ];
  var background = document.getElementById("image");
  var cr = Math.floor(Math.random()*5);
  background.style.background="url(https://p1.xywm.ltd/2023/05/14/94277d6a35443aec2e71dec38c2c1826.jpg)";
  background.style.background="url("+backgroundImg[cr]+") fixed";
}