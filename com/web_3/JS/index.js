const d_1 = document.querySelector("#d-1");
const d_2 = document.querySelector("#d-2");
const d_3 = document.querySelector("#d-3");
const ipt1 = document.querySelector("#i1");
const btn0 = document.querySelector("#b0");
const d1 = document.querySelector("#d1");
const btn1 = document.querySelector("#b1");
const btn2 = document.querySelector("#b2");
const div = document.querySelector("#d3");
const btn3 = document.querySelector("#b3");
const btn4 = document.querySelector("#b4");
let count,symbol;
let sum=0,res=0,random1,random2,random3;
let l = 0;
let arr = new Array(count);
let flag = false;
let map = new Map();
let judge = new Array(count);


d_2.style.display="none";
d_3.style.display="none";

btn0.addEventListener("click",function (){
    if(ipt1.value===""){
        alert("请输入要测试的题目数目！")
    }else{
        d_1.style.display="none";
        d_2.style.display="inline";
        count=ipt1.value;
    }
})

assign();

function contains(arr, val) {
    return arr.some(item => item === val);
}

function assign(){
    random1 = Math.floor(Math.random()*10);
    random2 = Math.floor(Math.random()*10);
    random3 = Math.floor(Math.random()*4);
    for(let i=0;i<l;i++){
        if(contains(arr[i],random1)&&contains(arr[i],random2)&&contains(arr[i],random3)){
            flag=true;
        }
    }
    if(flag){
        assign();
    }else{
        arr[l++]=[random1,random3,random2];
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
}
function caculate(val){
    switch (random3){
        case 0:
            if(random1+random2===val){
                res++;
                judge[l-1]=true;
            }
            break;
        case 1:
            if(random1-random2===val){
                res++;
                judge[l-1]=true;
            }
            break;
        case 2:
            if(random1*random2===val){
                res++;
                judge[l-1]=true;
            }
            break;
        case 3:
            if(random1/random2===val){
                res++;
                judge[l-1]=true;
            }
            break;
    }
}
function f_btn1(){
    const ipt2 = document.querySelector("#i2");
    if(sum===count-1){
        alert("已经是最后一题!");
        return;
    }
    caculate(+ipt2.value);
    map.set(arr[l-1],+ipt2.value)
    assign();
    sum++;
}
function f_btn2(){
    const ipt2 = document.querySelector("#i2");
    caculate(+ipt2.value);
    map.set(arr[l-1],+ipt2.value)
    assign2(div,res,count,map,arr,judge);
    d_2.style.display="none";
    d_3.style.display="inline";
}
btn1.addEventListener("click",f_btn1)
btn2.addEventListener("click",f_btn2)



function assign2(div,res,count,map,arr,judge){
    for(let i=0;i<count;i++){
        let h1 = document.createElement("h1");
        h1.style.color="white";
        if(judge[i]){
            h1.style.background="blue";
            h1.onclick=function () {
                alert("你做的很棒");
            }
        }else{
            h1.style.background="red";
            h1.onclick=function () {
                let res;
                switch (arr[i][1]){
                    case 0:
                        res=arr[i][0]+arr[i][2];
                        break;
                    case 1:
                        res=arr[i][0]-arr[i][2];
                        break;
                    case 2:
                        res=arr[i][0]*arr[i][2];
                        break;
                    case 3:
                        res=arr[i][0]/arr[i][2];
                        break;
                }
                alert(`正确答案是:${res}`);
            }
        }
        let fuhao;
        switch (arr[i][1]){
            case 0:
                fuhao="+";
                break;
            case 1:
                fuhao="-";
                break;
            case 2:
                fuhao="*";
                break;
            case 3:
                fuhao="/";
                break;
        }
        h1.innerHTML = `第${i+1}题:${arr[i][0]}${fuhao}${arr[i][2]}=${map.get(arr[i])}`;
        div.appendChild(h1);
    }
}

function f_btn3(){
    div.innerHTML="";
    let n=0,arr2=new Array(count),arr3=new Array(count);
    for(let i=0;i<count;i++){
        if(!judge[i]){
            arr3[n]=i;
            arr2[n++]=arr[i];
        }
    }
    for(let i=0;i<n;i++) {
        let h1 = document.createElement("h1");
        h1.style.color = "white";
        h1.style.background = "red";
        let fuhao;
        h1.onclick=function () {
            let res;
            switch (arr2[i][1]){
                case 0:
                    res=arr2[i][0]+arr2[i][2];
                    break;
                case 1:
                    res=arr2[i][0]-arr2[i][2];
                    break;
                case 2:
                    res=arr2[i][0]*arr2[i][2];
                    break;
                case 3:
                    res=arr2[i][0]/arr2[i][2];
                    break;
            }
            alert(`正确答案是:${res}`);
        }
        switch (arr2[i][1]) {
            case 0:
                fuhao = "+";
                break;
            case 1:
                fuhao = "-";
                break;
            case 2:
                fuhao = "*";
                break;
            case 3:
                fuhao = "/";
                break;
        }
        h1.innerHTML = `第${arr3[i]+1}题:${arr2[i][0]}${fuhao}${arr2[i][2]}=${map.get(arr2[i])}`;
        div.appendChild(h1);
    }
}
function f_btn4(){
    div.innerHTML="";
    assign2(div,res,count,map,arr,judge);
}

btn3.addEventListener("click",f_btn3)
btn4.addEventListener("click",f_btn4)