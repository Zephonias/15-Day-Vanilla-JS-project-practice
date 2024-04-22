const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
const count = document.querySelector('.counter');

decrease.addEventListener('click', function(){
    count.innerText = Number(count.innerText) - 1;
    const newCount = document.querySelector('.counter');
    count.style.color = checkColor();
})
increase.addEventListener('click', function(){
    count.innerText = Number(count.innerText) + 1;
    const newCount = document.querySelector('.counter');
    count.style.color = checkColor();
})
reset.addEventListener('click', function(){
    count.innerText = 0;
    const newCount = Number(document.querySelector('.counter'));
    count.style.color = checkColor();
})

function checkColor(){
    if (Number(count.innerText) < 0){
        return 'red';
    }
    else if (Number(count.innerText) > 0){
        return 'green';
    }
    else{
        return 'black'; 
    }
}