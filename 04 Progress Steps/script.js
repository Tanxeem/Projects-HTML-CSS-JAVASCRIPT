const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', ()=>{
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})


function update () {
    circles.forEach((circle, index)=> {
        if (index < currentActive) {
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active')

    progress.style.width = (active.length -1) / (circles.length - 1) * 99 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    }else{
        prev.disabled = false;
        prev.disabled = false;
    }

}