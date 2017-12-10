const Hero = require("../hero.js")
const Food = require("../food.js")
const Task = require("../task.js")
const assert = require("assert");


describe("Hero", function(){

  let theTick;
  let arthur;
  let hotDogs;
  let pretzels;
  let killRamses;
  let findSuit;

  beforeEach(function(){
    hotDogs = new Food("hot dogs");
    pretzels = new Food("pretzels");
    theTick = new Hero("The Tick", hotDogs);
    arthur = new Hero("Arthur", pretzels);
    killRamses = new Task("hard", "high", 5000000, false);
    findSuit = new Task("moderate", "high", 0, true);
  })

  it("should have a name", function(){
    assert.strictEqual(theTick.name, "The Tick");
  });

  it("should have health that starts at 100", function(){
    assert.strictEqual(arthur.health, 100);
  });

  it("should have a favourite food", function(){
    assert.strictEqual(theTick.favFood, hotDogs);
  });

  it("should be able to speak", function(){
    assert.strictEqual(theTick.speak(), "Do not fear, The Tick is here!")
  });

  it("should have a collection of tasks to complete, which starts empty", function(){
    assert.strictEqual(arthur.tasks.length, 0)
  });

  it("should be able to eat food, and health should go up by the replenishment value", function(){
    theTick.eat(pretzels);
    assert.strictEqual(theTick.health, 110);
    arthur.eat(pretzels);
    assert.strictEqual(arthur.health, 115);
  });

  it("should be able to add tasks", function(){
    theTick.addTask(killRamses);
    theTick.addTask(findSuit);
    assert.strictEqual(theTick.tasks.length, 2);
  });

});
