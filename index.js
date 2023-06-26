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
                 GitHub: @Adhara-A
%c_____________________________________________________________
`,'color:#eac277','color:#b0caff','color:#ffe4c4','color:#eac277');
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
  const fgcolor = document.getElementById("fgcolor");
  switch (k) {
    case 1:
      fgcolor.innerHTML=`
      <link rel="stylesheet" href="./code/css/fg/white.css">`;
      document.getElementById("bj").innerHTML=`点击切换为黑色`;
      setCookie("fg","white",5);
      k = 2;
      break;

    case 2:
      fgcolor.innerHTML=`
      <link rel="stylesheet" href="./code/css/fg/black.css">`;
      document.getElementById("bj").innerHTML=`点击切换为白色`;
      setCookie("fg","black",5);
      k = 1;
      break;

    default:
      break;
    }
}
function start(){
  const cr_user = document.getElementById("cr-username");
  const btn = document.querySelector(".btn");
  const btn1 = document.querySelector(".btn1");
  const vefy = document.getElementById("cr-yzm");
  
  //fs
  const yzms = Math.trunc(Math.random()*899999 + 100000);
  var verify_time = 30;
  var ms = Math.trunc(Math.random()*25+4);
  btn1.disabled=true;
  var verify_timer = setInterval(()=>{
    btn1.innerHTML = verify_time;
    verify_time--;
    if (verify_time == ms){
      alert("验证码为：" + yzms);
    }
    if (verify_time < 0){
      clearInterval(verify_timer);
      btn1.disabled=false;
    }
  },1000);
  btn.addEventListener("click",function(){
    if(vefy.value != yzms){
      alert("验证码错误");
    }else{
      if (cr_user.value == "" || cr_user.value == null){
        cr_user.value = "CR_" + Math.trunc(Math.random()*90000+10000);
      };
      setCookie("cr-users",cr_user.value,365);
      location.reload()
    }
  });
}

function login(){
  const CRWG = document.getElementById("CRWG");
  const welcome = document.getElementById("welcome");
  CRWG.style.display = "none";  
  welcome.style.display = "block";
}

function rename(){
  var renames = getCookie("re")
  if (renames != "" && renames != null){
    alert("10天内修改次数已达上限");
  }else{
    cr_user = prompt("修改名称(10天内仅可修改1次):","");
    if (cr_user!="" && cr_user!=null){
      setCookie("cr-users",cr_user,365);
      setCookie("re",false,10);
      location.reload();
    }
  }
}

function checkCookie(){
  const CRWG = document.getElementById("CRWG");
  const welcome = document.getElementById("welcome");
  const cusername = document.getElementById("user");
  const login = document.getElementById("log");
  var cr_user = getCookie("cr-users");
  if (cr_user != ""){
    cusername.innerHTML = cr_user;
    login.style.display = 'none';
  };
  welcome.style.display = "none";
  CRWG.style.display = "block";
  
  const fgcolor = document.getElementById("fgcolor");
  var user=getCookie("fg");
    if (user!=""){
      if (user == "white"){
        fgcolor.innerHTML=`
        <link rel="stylesheet" href="./code/css/fg/white.css">`;
        k = 2
      }else{
        fgcolor.innerHTML=`
        <link rel="stylesheet" href="./code/css/fg/black.css">`;
      }
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

function search(){
  const btn = document.querySelector('.label');
  const texts = document.querySelector('#text');
  var reg = /\s/;
  btn.onclick = function(){
      const value = texts.value;
      const content = document.querySelector(".side-net");
      var contents = content.innerHTML;
      if (value == '' || reg.test(value)){
          alert("搜索内容不能为空");
      }
      else{
          var values = contents.split(value);
          content.innerHTML = values.join('<span style="background:rgba(0, 255, 76, 0.5);">' + value + '</span>');
      }
  }
  document.onkeyup = function(e){
    if (e.keyCode == 13){
        btn.click()
    }
  }
}