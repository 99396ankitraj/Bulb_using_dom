
let a=document.querySelector(".bulb");
let b=document.querySelector("button");

let flag = 1;
b.addEventListener("click",function(){
    if(flag){
     a.style.backgroundColor="yellow";
     flag=!flag;
     a.style.textAlign="center";
     a.style.lineHeight="350px";
     a.innerText="Bulb is turned ON!";
    }
    else{
        a.style.backgroundColor="transparent";
        a.innerText="light off!";
        flag=!flag;
    }
})

