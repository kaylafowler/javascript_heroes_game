const Hero = function(name, favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.speak = function(){
  return `Do not fear, ${this.name} is here!`
}

module.exports = Hero;
