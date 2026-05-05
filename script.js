
function Randomizes() {
   
    const text = document.querySelector('h1');

    
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    
    text.style.color = randomColor;
}