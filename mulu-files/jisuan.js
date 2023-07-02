const star_temp = document.querySelector(".star-temp");
const star_radius = document.querySelector(".star-radius")
const light = document.getElementById("light");
function lights(){
    if (star_temp.value == '' || star_radius.value == ''){
        light.innerHTML = '数据不能为空'; 
    }else if(star_temp.value >= 300000 ||star_radius.value >= 5000){
        light.innerHTML = '数据过大'; 
    } else{
        var a = Math.pow(star_temp.value/5772,4)*Math.pow(star_radius.value,2)
        a = Math.floor(a * 100) / 100;
        light.innerHTML = a+ '太阳光度'; 
    }
};
function rotates(){
}