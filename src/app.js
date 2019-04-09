const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const Menu = require('./views/menu.js');
const PlanetInfo = require('./views/planet_info.js');



document.addEventListener('DOMContentLoaded', () => {

  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const nav = document.querySelector('.planets-menu');
  const menu = new Menu(nav);
  menu.bindEvents();

  const content = document.querySelector('.planet-details');
  const planetInfo = new PlanetInfo(content);
  planetInfo.bindEvents();

});
