function Pet(name, health, hunger, fitness, age) {
  this.name = name;
  this.health = 100;
  this.hunger = 0;
  this.fitness = 10;
  this.age = 0;
}

Pet.prototype.growUp = function (){
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    const maxFitness = 10;
    const fitnessIncreaseRate = 4
    if (this.fitness + 4 >= maxFitness) {
        this.fitness = maxFitness;
    }
    else if (this.fitness + 4 < maxFitness) {
        this.fitness += 4;
    };
};

Pet.prototype.feed = function () {
    this.hunger -= 3;
    if (this.hunger <= 0) {
        this.hunger = 0;
    };
};
module.exports = Pet;
