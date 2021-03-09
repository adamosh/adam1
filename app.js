const headText = document.querySelector('.head');
const changeColor = document.querySelector('.changeColor');
const mottoInput = document.querySelector('.motto-input');
const mottoBtn = document.querySelector('.motto-button');
const topText = document.querySelector('.top')

changeColor.addEventListener('click', function () {
    headText.classList.toggle("change");
});

mottoBtn.addEventListener("click", function(){
    const newMotto = document.createElement('h1');
    const mottoContent = document.createTextNode(mottoInput.value);
    newMotto.appendChild(mottoContent);
    topText.appendChild(newMotto);

});

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = "#" + randomColor;
  }
  
  changeColor.addEventListener("click", setBg);
  setBg();
  