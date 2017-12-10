const Hero = function(name, favFood){
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.speak = function(){
  return `Do not fear, ${this.name} is here!`
}

Hero.prototype.eat = function(food){
  if (food === this.favFood){
    this.health += (food.replenish * 1.5);
  }
  else {
    this.health += food.replenish;
  }
};


Hero.prototype.addTask = function(task){
  this.tasks.push(task)
};

module.exports = Hero;
