let clock = document.querySelector('#clock')


const currenttime = () => {
    let curTime = new Date().toLocaleTimeString();
    clock.innerText = curTime;
}

currenttime();

setInterval(()=>{
    currenttime();
},1000)