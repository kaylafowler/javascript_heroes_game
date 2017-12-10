const Task = require("../task.js")
const assert = require("assert");


describe("Task", function(){

  let killRamses;
  let findSuit;

  beforeEach(function(){
    killRamses = new Task("hard", "high", 5000000, false);
    findSuit = new Task("moderate", "high", 0, true);
  })

  it("should have a difficulty", function(){
    assert.strictEqual(killRamses.difficulty, "hard")
  });

  it("should have a priority level", function(){
    assert.strictEqual(findSuit.priority, "high")
  });

  it("should have a reward", function(){
    assert.strictEqual(killRamses.reward, 5000000)
  });

  it("should be marked as complete or not", function(){
    assert.strictEqual(killRamses.complete, false);
    assert.strictEqual(findSuit.complete, true);
  })


});
