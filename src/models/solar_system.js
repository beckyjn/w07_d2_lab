const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('selected-planet',(event)=>{
    selectedPlanet = this.findPlanet(event.detail);
    PubSub.publish('selected-planet-info', selectedPlanet);
  });
};

SolarSystem.prototype.findPlanet = function(name) {
  let selectedPlanet;
  this.planets.forEach( (planet)=>{
    if (planet.name === name){selectedPlanet = planet;}
  });
  return selectedPlanet;
};

module.exports = SolarSystem;
