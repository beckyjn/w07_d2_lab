const PubSub = require('../helpers/pub_sub.js');
const typewriter = require('../helpers/typewriter.js');


const PlanetInfo = function(content){
  this.content = content;
};

PlanetInfo.prototype.bindEvents = function () {
  this.introView();

  PubSub.subscribe('selected-planet-info', (event)=>{
    this.content.innerHTML = '';
    const planet = event.detail;

    const image = document.createElement('img');
    image.src = planet.image;
    image.classList.add('planet')
    image.alt = `satelite photo of ${planet.name}`
    this.content.appendChild(image);

    const title = document.createElement('h1');
    this.content.appendChild(title);
    typewriter(title, planet.name);

    let keys = Object.keys(planet);
    keys.splice( keys.indexOf('name'), 1 );
    keys.splice( keys.indexOf('image'), 1 );

    const list = document.createElement('ul')
    this.content.appendChild(list);
    keys.forEach((key)=>{
      const listItem = document.createElement('li')
      list.appendChild(listItem);
      textContent = `${key}: ${planet[key]}`;
      typewriter(listItem, textContent);
    });

  });
};

PlanetInfo.prototype.introView = function () {
  const text = "Welcome to our solar system, alien traveller...";
  const element = document.createElement('h1');
  element.classList.add('intro-title');

  this.content.appendChild(element);

  typewriter(element, text);
};

module.exports = PlanetInfo;
