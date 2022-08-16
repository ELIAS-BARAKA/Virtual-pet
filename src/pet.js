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

module.exports = Pet;
