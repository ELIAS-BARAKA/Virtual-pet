function Pet(name, health, hunger, fitness, age) {
  this.name = name;
  this.health = 100;
  this.hunger = 0;
  this.fitness = 100;
  this.age = 0;
}

Pet.prototype.growUp = function (){
    this.age += 1;
};

module.exports = Pet;
