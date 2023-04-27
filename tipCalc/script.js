const button = document.querySelector('button');
const output = document.querySelector('.output');
let totalTip=0;

button.innerHTML=`<i><b>Tip</b> me!</i>`;
button.addEventListener('click',function(){
    const cost = document.querySelector('input');
    let tip = cost.value;
    totalTip += Number(tip);
    let temp =`<h1>You tipped $${cost.value}. Total spent: $${totalTip} </h1>`
    output.innerHTML = temp;
    console.log(cost.value);
})