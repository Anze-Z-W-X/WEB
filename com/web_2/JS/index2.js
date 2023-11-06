const d1 = document.querySelector("#d1");
const btn1 = document.querySelector("#b1");
const btn2 = document.querySelector("#b2");
const count = +countValues();
let symbol;
let sum=0,res=0,random1,random2,random3;
assign();
function assign(){
    random1 = Math.floor(Math.random()*10);
    random2 = Math.floor(Math.random()*10);
    random3 = Math.floor(Math.random()*4);
    switch (random3){
        case 0:
            symbol="+";
            break;
        case 1:
            symbol="-";
            break;
        case 2:
            symbol="*";
            break;
        case 3:
            symbol="/";
            break;
    }
    d1.innerHTML=`${random1}${symbol}${random2}=`;
}
function caculate(val){
    switch (random3){
        case 0:
            if(random1+random2===val){
                res++;
            }
            break;
        case 1:
            if(random1-random2===val){
                res++;
            }
            break;
        case 2:
            if(random1*random2===val){
                res++;
            }
            break;
        case 3:
            if(random1/random2===val){
                res++;
            }
            break;
    }
}
function f_btn1(){
    const ipt = document.querySelector("input");
    if(sum===count-1){
        alert("已经是最后一题!");
        return;
    }
    caculate(+ipt.value);
    assign();
    sum++;
}
function f_btn2(){
    const ipt = document.querySelector("input");
    caculate(+ipt.value);
    location.href="../web_2/index3.html?res="+res+"&count="+count;
}
function countValues(){
    let result;
    let url=window.location.search; //获取url中"?"符后的字串
    if(url.indexOf("?")!==-1){
        result = url.substring(url.indexOf("=")+1);
    }
    return result;
}
btn1.addEventListener("click",f_btn1)
btn2.addEventListener("click",f_btn2)