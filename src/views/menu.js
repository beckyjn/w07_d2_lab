const PubSub = require('../helpers/pub_sub.js');

const Menu = function(nav){
  this.nav = nav;
};

Menu.prototype.bindEvents = function () {
  this.nav.addEventListener('click', (event)=>{
    planet_id = event.target.id;
    PubSub.publish('selected-planet', planet_id);
  });
};

module.exports = Menu;
