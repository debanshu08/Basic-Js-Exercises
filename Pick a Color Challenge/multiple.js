const colors = ['red','orange','green','blue','purple','violet','pink'];

const container = document.querySelector('#boxes');
const h1 = document.querySelector('h1');
const changeColor = function(){
    h1.style.color = this.style.backgroundColor;
}
const backto = function(){
    h1.style.color = 'black';
}
//this keyword refers to the individual element in which Event Listener is added.

for(let color of colors){
   const box = document.createElement('div');
   box.style.backgroundColor = color;
   box.classList.add('box');
   container.appendChild(box);
   box.addEventListener('mouseover',changeColor);
   box.addEventListener('mouseout',backto);
}