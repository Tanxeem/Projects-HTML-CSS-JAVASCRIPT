const countDownElement = document.querySelector('#countDown');
const resetValueElement = document.querySelector(".resetValue")
const stopBtn = document.querySelector(".stop_btn")
const start_btn = document.querySelector('.start_btn')
const resetBtn = document.querySelector('.reset_btn')
const gettimer = document.querySelector('.time_btn')
const clear_btn = document.querySelector('.clear_btn')

let startCount = 0;
let intervalId;

const startTimer = ()=> {
    intervalId = setInterval(()=>{
        countDownElement.innerText = startCount++;
    },1000)
}

const stopTimer = ()=>{
    showStopValue();
    clearInterval(intervalId);
}

const resetTimer = ()=>{
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(intervalId);
}

const showStopValue = ()=>{
    const newPara = document.createElement("p");
    newPara.innerText = `The Stop time is ${startCount -1}`;
    resetValueElement.append(newPara);
}

const clearTimeVale = ()=>{
    resetValueElement.innerHTML = "";
}

start_btn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
gettimer.addEventListener('click', showStopValue);
clear_btn.addEventListener('click', clearTimeVale);
