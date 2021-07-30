import '../index.css';
import image from '../assets/image.png';
const body = document.body;
const h1HTML = document.createElement('h1');
h1HTML.textContent = 'I love JavaScript';
body.append(h1HTML);

const imageHTML = document.createElement('img');
imageHTML.src = image;
body.append(imageHTML);

console.log('hello World!');
