const Task = function(difficulty, priority, reward, complete){
  this.difficulty = difficulty;
  this.priority = priority;
  this.reward = reward;
  this.complete = complete;
}

module.exports = Task;
