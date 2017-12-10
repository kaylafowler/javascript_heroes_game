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



});
