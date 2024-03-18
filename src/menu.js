import pickleImage from './images/pickles.jpg';
import kaviarImage from './images/kaviar.jpg';
import saladImage from './images/salad.jpg';
import borschtImage from './images/borscht.jpg';
import schaschlikImage from './images/schaschlik.jpg';
import bliniImage from './images/blini.jpg';
import nutsImage from './images/nuts.jpg';

function menuDisplay() {
    const menuHead = document.createElement('h1');
    menuHead.textContent = "Explore our menu";
    const headSides = document.createElement('h2');
    headSides.textContent = "Sides";


    const sides = document.createElement('div');
    sides.className = 'menu';

    const pickles = document.createElement('h3');
    pickles.textContent = "Pickles";
    const picklesDesc = document.createElement('p');
    picklesDesc.textContent = "You can enjoy the pickles to your main dish or served as a snack to some drinks.";
    const imgPickle = new Image();
    imgPickle.src = pickleImage;
    sides.appendChild(pickles);
    sides.appendChild(picklesDesc);
    sides.appendChild(imgPickle);

    const kaviar = document.createElement('h3');
    kaviar.textContent = "Kaviar";
    const kaviarDesc = document.createElement('p');
    kaviarDesc.textContent = "The ecologically resourced kaviar is served with bread and butter.";
    const imgKaviar = new Image();
    imgKaviar.src = kaviarImage;
    sides.appendChild(kaviar);
    sides.appendChild(kaviarDesc);
    sides.appendChild(imgKaviar);

    const salad = document.createElement('h3');
    salad.textContent = "Salad";
    const saladDesc = document.createElement('p');
    saladDesc.textContent = "The salad is made with cucumbers, tomatos, feta and onions. You can enjoy at as a precourse or as a side dish.";
    const imgSalad = new Image();
    imgSalad.src = saladImage;
    sides.appendChild(salad);
    sides.appendChild(saladDesc);
    sides.appendChild(imgSalad);

    const headMain = document.createElement('h2');
    headMain.textContent = "Main Dishes";

    const mains = document.createElement('div');
    mains.className = "menu";

    const borscht = document.createElement('h3');
    borscht.textContent = "Borscht";
    const borschtDesc = document.createElement('p');
    borschtDesc.textContent = "Borscht is a traditional russion soup loaded with vegetables like beetroot, kale, potatoes and onion. It is served with some bread and crème fraîche.";
    const imgBorscht = new Image();
    imgBorscht.src = borschtImage;
    mains.appendChild(borscht);
    mains.appendChild(borschtDesc);
    mains.appendChild(imgBorscht);

    const schaschlik = document.createElement('h3');
    schaschlik.textContent = "Schaschlik";
    const schaschlikDesc = document.createElement('p');
    schaschlikDesc.textContent = "This pork meat is marinated over a few days then grilled on skewers. The marinade comes from a family recipe. It is served with a salad and onions pickled in vinegar.";
    const imgSchaschlik = new Image();
    imgSchaschlik.src = schaschlikImage;
    mains.appendChild(schaschlik);
    mains.appendChild(schaschlikDesc);
    mains.appendChild(imgSchaschlik);

    const headDessert = document.createElement('h2');
    headDessert.textContent = "Dessert"

    const dessert = document.createElement('div');
    dessert.className = "menu";

    const blini = document.createElement('h3');
    blini.textContent = "Blini";
    const bliniDesc = document.createElement('p');
    bliniDesc.textContent = "Blini are the russian pancakes. You can choose between raspberry or strawberry jam.";
    const imgBlini = new Image();
    imgBlini.src = bliniImage;
    dessert.appendChild(blini);
    dessert.appendChild(bliniDesc);
    dessert.appendChild(imgBlini);

    const nuts = document.createElement('h3');
    nuts.textContent = "Filled nuts";
    const nutsDesc = document.createElement('p');
    nutsDesc.textContent = "Treat yourself with these caramel filled looking nuts.";
    const imgNuts = new Image();
    imgNuts.src = nutsImage;
    dessert.appendChild(nuts);
    dessert.appendChild(nutsDesc);
    dessert.appendChild(imgNuts);


    return [menuHead, headSides, sides, headMain, mains, headDessert, dessert]
}

export { menuDisplay }