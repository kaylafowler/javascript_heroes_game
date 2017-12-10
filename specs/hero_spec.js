const Hero = require("../hero.js")
const assert = require("assert");


describe("Hero", function(){

  let theTick;
  let arthur;

  beforeEach(function(){
    theTick = new Hero("The Tick", "hot dogs");
    arthur = new Hero("Arthur", "pretzels");
  })

  it("should have a name", function(){
    assert.strictEqual(theTick.name, "The Tick");
  });

  it("should have health that starts at 100", function(){
    assert.strictEqual(arthur.health, 100);
  });

  it("should have a favourite food", function(){
    assert.strictEqual(theTick.favFood, "hot dogs")
  });

  it("should be able to speak", function(){
    assert.strictEqual(theTick.speak(), "Do not fear, The Tick is here!")
  });

  it("should have a collection of tasks to complete, which starts empty", function(){
    assert.strictEqual(arthur.tasks.length, 0)
  });

});
