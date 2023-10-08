const addBtn = document.getElementById("add-btn") ;
const subBtn = document.getElementById("sub-btn") ;
const mlyBtn = document.getElementById("mly-btn") ;
const dvdBtn = document.getElementById("dvd-btn") ;
const resultLabel = document.getElementById("cac-result") ;
const processLabel = document.getElementById("cac-process") ;

let currentValue = 0;


function addNum() {

    const val = document.getElementById("input-num").value;
    if (val) {
        const oldVal = currentValue;
        const inputVal = parseInt(val);
        currentValue += inputVal;
        processLabel.innerText = `${oldVal} + ${val} = `
        resultLabel.innerText = currentValue;
    }
}

function subNum(){
    const val = document.getElementById("input-num").value;
    if(val){
        const oldVal = currentValue;
        const inputVal = parseInt(val);
        currentValue -= inputVal;
        processLabel.innerText = `${oldVal} - ${val} = `
        resultLabel.innerText = currentValue;
    }
}

function mlyNum(){
    const val = document.getElementById("input-num").value;
    if(val){
        const oldVal = currentValue;
        const inputVal = parseInt(val);
        currentValue *= inputVal;
        processLabel.innerText = `${oldVal} * ${val} = `
        resultLabel.innerText = currentValue;
    }
}

function dvdNum(){
    const val = document.getElementById("input-num").value;
    if(val){
        const oldVal = currentValue;
        const inputVal = parseInt(val);
        currentValue /= inputVal;
        processLabel.innerText = `${oldVal} / ${val} = `
        resultLabel.innerText = currentValue;
    }
}

function clearInfo() {
    document.getElementById("cac-process").innerText = "";
}   

function getValue() {
    const inputVal = document.getElementById("input-num").value;
    document.getElementById("cac-process").innerText = inputVal;
}   



addBtn.addEventListener('click', addNum);
subBtn.addEventListener('click', subNum);
mlyBtn.addEventListener('click', mlyNum);
dvdBtn.addEventListener('click', dvdNum);
