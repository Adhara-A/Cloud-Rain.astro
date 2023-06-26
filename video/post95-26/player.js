var video = document.getElementById("mp4");
var btnstart = document.getElementById("btnstart");
var current_time = document.getElementById("current_time");
var btntime = document.getElementById("btntime");
var btnmute = document.getElementById("btnmute");
var btnsound = document.getElementById("btnsound")
var btnbig = document.getElementById("btnbig");
var totaltime = document.getElementById("totaltime");
var width = video.offsetWidth;

video.onplaying = function(){
    var alltimes = video.duration;
    var m = Math.floor(alltimes%3600/60);
    var s = Math.floor(alltimes%60);
    m=m>=10?m:'0'+m;
    s=s>=10?s:'0'+s;totaltime.innerHTML= m +':' + s;
}
video.ontimeupdate = function(){
    btntime.value = 100* this.currentTime/this.duration;
    var time = this.currentTime;
    var m = Math.floor(time%3600/60);
    var s = Math.floor(time%60);
    m=m>=10?m:'0'+m;
    s=s>=10?s:'0'+s;
    current_time.innerHTML = m + ':' + s;
}
btntime.addEventListener("mousedown",function(){
    this.onmousemove = function(){
        video.currentTime = this.value*video.duration/100;
    }
    this.onmouseup = function(){
        this.onmousemove = null;
        this.onmouseup = null
    }
});
btnstart.addEventListener("click",function(){
    if (this.innerHTML == "播放") {
        video.play();
        this.innerHTML = "暂停";
    }else{
        video.pause();
        this.innerHTML = "播放"
    }
});
btnmute.addEventListener("click",function(){
    video.muted = video.muted;
});
btnsound.addEventListener("mousedown",function(){
    this.onmousemove=function(){
        video.volume = this.value/100;
    }
    this.onmouseup = function(){
        this.onmousemove = null;
        this.onmouseup = null;
    }
});
btnbig.addEventListener("click",function(){
    if (video.webkitRequestFullScreen){
        video.webkitRequestFullScreen();
    }else if (video.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }else if (video.msRequestFullScreen){
        video.msRequestFullScreen();
    }else if (video.RequestFullScreen){
        video.RequestFullScreen();
    }
});
function remove(){
    video.pause();
    video.currentTime = 0;
    btntime.value = 0;
    btnsound = 30;
    var dehjdghjd = setInterval(()=>{
        video.play();
        clearInterval(dehjdghjd)
    },1000)
}