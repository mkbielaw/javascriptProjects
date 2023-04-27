const colors = ['aqua','azure','beige','black','chartreuse','blue','blueviolet','chocolate','cornsilk','darkorchid','deeppink','gray','greenyellow','indigo','lightgreen','magenta','olive','orangered','powderblue','snow','tomato','yellow','tan','salmon'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    //get random number 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}