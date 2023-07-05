function lights(){
    //获取内容为局部变量，即使是相同的变量名也不影响使用。
    const star_temp = document.querySelector(".star-temp_light");
    const star_radius = document.querySelector(".star-radius_light")
    const light = document.getElementById("light");
    if (star_temp.value == '' || star_radius.value == ''){
        light.innerHTML = '每一项数据不能为空'; 
    }else if(star_temp.value >= 300000 ||star_radius.value >= 5000){
        light.innerHTML = '数据过大'; 
    }else if(star_temp.value < 0||star_radius.value < 0){
        light.innerHTML = '不能为负数'; 
    }else{
        var a = Math.pow(star_temp.value/5772,4)*Math.pow(star_radius.value,2)
        a = Math.floor(a * 100) / 100;
        light.innerHTML = a+ '太阳光度'; 
    }
};
function radius(){
    const star_temp = document.querySelector(".star-temp_radius");
    const star_light = document.querySelector(".star-light_radius")
    const radius = document.getElementById("radius");
    if (star_temp.value == '' || star_light.value == ''){
        radius.innerHTML = '数据不能为空'; 
    }else if(star_temp.value >= 300000){
        radius.innerHTML = '数据过大'; 
    }else if(star_temp.value < 0||star_light.value < 0){
        radius.innerHTML = '不能为负数'; 
    }else{
        var a = Math.pow(5772/star_temp.value,2)*Math.pow(star_light.value,1/2)
        a = Math.floor(a * 100) / 100;
        radius.innerHTML = a+ '太阳半径'; 
    }
}