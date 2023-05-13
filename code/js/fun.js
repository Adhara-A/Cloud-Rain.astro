var k = 1
function fun() {
    switch (k) {
        case 1:
            document.getElementById("h").innerHTML = "点我干嘛！！";
            break;
        case 2:
            document.getElementById("h").innerHTML = "你再点一次！";
            break;
        case 3:
            document.getElementById("h").innerHTML = "你个老六！";
            break;
        case 4:
            document.getElementById("h").innerHTML = "真是服了！";
            say = "你都点了" + k + "次了！";
            alert(say);
            break;
        default:
            document.getElementById("h").innerHTML = "你再点！";
            alert("sb，都点了" + k + "次了")
            break;
    }
    k = k + 1
}