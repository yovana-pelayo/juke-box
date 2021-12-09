import { figures } from './data.js';


const template = document.getElementById('template');
const figuresList =
document.getElementById('figures-list');
const audio = document.getElementById('audio');


//loop array 
for (let figure of figures){
    const copy = template.content.cloneNode(true);
    const header = copy.querySelector('h2');
    const image = copy.querySelector('img');
    const button = copy.querySelector('button');

    //set h2.textContent and img.src
    header.textContent = figure.name;
    image.src = figure.image;

    //subscribe button
    button.addEventListener('click', () => {
        audio.src = figure.audio;
        audio.play();
    });

    figuresList.appendChild(copy);

}