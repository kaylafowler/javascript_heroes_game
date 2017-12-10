const Food = require("../food.js")
const assert = require("assert");


describe("Food", function(){

  let hotDogs;
  let pretzels;

  beforeEach(function(){
    hotDogs = new Food("Hot Dogs");
    pretzels = new Food("Pretzels");
  })

  it("should have a name", function(){
    assert.strictEqual(hotDogs.name, "Hot Dogs")
  });

it("should have a replenishment value", function(){
  assert.strictEqual(pretzels.replenish, 10)
})



});
