console.log('Hello');
import './style.css';
import myImage from './images/schaschlik.jpg';
import {menuDisplay} from './menu';
import { aboutDisplay } from './about';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');
const content = document.getElementById('content');

function removeContent() {
    while (content.firstChild) {
        home.style.borderBottom = "none";
        menu.style.borderBottom = "none";
        about.style.borderBottom = "none";
        content.removeChild(content.firstChild);
      }
}

function component() {
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to our Restaurant!";

    const intro = document.createElement('p');
    intro.textContent = 
    "We cook with fresh and local ingredients and recipes from home! You can enjoy a variety of traditional food from the russian or eastern european cuisine. Check out our menu where you can explore all the dishes we serve."

    const info = document.createElement('div');
    info.className = "info";

    const contactIntro = document.createElement('p');
    contactIntro.textContent = "Find, call or write us at"

    const contactInfo = document.createElement('div');
    const address = document.createElement('p');
    address.textContent = "Flowerstreet 56, 45905 Cooltown";
    const phone = document.createElement('p');
    phone.textContent = "0657 478 458";
    const mail = document.createElement('p');
    mail.textContent = "restaurant@email.com";
    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(mail);

    const hoursIntro = document.createElement('p');
    hoursIntro.textContent = "Our opening hours are";

    const hours = document.createElement('div');
    hours.className = "hours";
    const mon = document.createElement('p');
    mon.textContent = "Monday: Closed "
    const week = document.createElement('p');
    week.textContent = "Tuesday-Saturday: 14:00-23:00"
    const sun = document.createElement('p');
    sun.textContent = "Sunday: 12:00-22:00";
    hours.appendChild(mon);
    hours.appendChild(week);
    hours.appendChild(sun);

    info.appendChild(contactIntro);
    info.appendChild(hoursIntro);
    info.appendChild(contactInfo);
    info.appendChild(hours);

    const img = new Image();
    img.src = myImage;

    home.style.borderBottom = "black solid";

    return [headline, intro, info, img]
}

component().forEach((element)=> content.appendChild(element));

home.addEventListener('click', () => {
    removeContent();
    home.style.borderBottom = "black solid";
    component().forEach((element)=> content.appendChild(element));
})

menu.addEventListener('click', () => {
    removeContent();
    menu.style.borderBottom = "black solid";
    menuDisplay().forEach((element)=> content.appendChild(element))})

about.addEventListener('click', () => {
    removeContent();
    about.style.borderBottom = "black solid";
    aboutDisplay().forEach((element) => content.appendChild(element))})