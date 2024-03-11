console.log('Hello');
import './style.css';
import myImage from './schaschlik.jpg';
const content = document.getElementById('content');

function component() {
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our Restaurant!";

    const intro = document.createElement('p');
    intro.textContent = 
    "We cook with fresh and local ingredients and recipes from home! You can enjoy a variety of traditional food from the russian or eastern european cuisine. In our menu you can explore all the dishes we serve."

    const img = new Image();
    img.src = myImage;

    return [headline, intro, img]
}

component().forEach((element)=> content.appendChild(element));

