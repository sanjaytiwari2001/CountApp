const Count = document.querySelector('.count');


const minusBtn = document.querySelector('.minus-btn');


const PlusBtn = document.querySelector('.plus-btn');

const changeBy = document.querySelector('.changeBy');

const resetBtn = document.querySelector('.reset-btn');

PlusBtn.addEventListener('click', () =>{
    const countValue = parseInt(Count.innerText)
    const changeByValue = parseInt(changeBy.value)
    Count.innerText = countValue + changeByValue
})

minusBtn.addEventListener('click',() => {
    const countValue = parseInt(Count.innerText)
    const changeByValue = parseInt(changeBy.value)

    Count.innerText = countValue - changeByValue;
})
resetBtn.addEventListener('click',() => {
    Count.innerText = 0;
})