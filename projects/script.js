var bulb = document.querySelector('#box');
var btn = document.querySelector('button');
var flag =0;
btn.addEventListener("click", function(){
    if(flag==0){
    bulb.style.backgroundColor ="Yellow";
    btn.innerHTML = "ON";
    flag = 1;
    }else{
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "OFF";
        flag=0;
    }
})