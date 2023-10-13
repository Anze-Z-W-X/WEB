const ipt = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click",function (){
    if(ipt.value===""){
        alert("请输入要测试的题目数目！")
    }else
        location.href="../web_2/index2.html?count="+ipt.value
})