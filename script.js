let body = document.querySelector('body');

//preparing a container for div squares by flex-box
let mainDiv = document.querySelector('.main-container');

//create grid squares as per user prompt
function generateNewGrid(n) {
    if (n>80) {
       alert(`${n} is over`)
    }
    else {
       for (i=0; i<n; i++) {
          for (j=0; j<n; j++){
             let divNew = document.createElement('div');
             divNew.style.border = '.5px rgb(0,0,0,0.2) solid'
             let divWidth = 480 / (n) - 2
             let divHeight = 480 / (n) - 2
             divNew.style.width = `${divWidth}px`;
             divNew.style.height = `${divHeight}px`;
             mainDiv.appendChild(divNew);
          }
       }
    }     
 }
// set intial grid square
generateNewGrid(16)

// set user prompt grid size
let btnSide = document.querySelector('#btnSide');
btnSide.addEventListener('click', function(){
    mainDiv.replaceChildren()
    generateNewGrid(+prompt('Grid square per side:'))
 })

//set user select colors for painting
let color = document.querySelector('#color');
let clrLable = document.querySelector('#color-lable');
let heading = document.querySelector('#heading');

function selectColor(i) {
    mainDiv.children[i].style.backgroundColor= color.value;
 }
 color.addEventListener('change',function(){
    clrLable.style.color=color.value;
    heading.style.color=color.value;
    for (let d=0; d<mainDiv.children.length;d++) {
       mainDiv.children[d].addEventListener('mouseover',function() {
          selectColor(d)
       })
    }
 })
// set erasing button for the painted
let btnErase = document.querySelector('#btnErase');

function erase(e) {
    mainDiv.children[e].style.backgroundColor = 'transparent';
}
btnErase.addEventListener('click', function() {
    for (let d=0; d<mainDiv.children.length;d++) {
       mainDiv.children[d].addEventListener('mouseover',function() {
          erase(d)
       })
    }
})
// set alternating rgb value colors for painting
let rgb=document.querySelector('#rgb');
function setRgb(e) {
   let red=Math.floor(Math.random()*256);
   let green = Math.floor(Math.random()*256);
   let blue=Math.floor(Math.random()*256);
   mainDiv.children[e].style.backgroundColor = `rgb(${red},${green},${blue})`;
}
rgb.addEventListener('click', function() {
   for (let d=0; d<mainDiv.children.length;d++) {
      mainDiv.children[d].addEventListener('mouseover',function() {
         setRgb(d)
      })
   }
})