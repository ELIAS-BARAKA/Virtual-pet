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
    this.fitness += 4;
    if (this.fitness >= maxFitness) {
        this.fitness = maxFitness;
    };
};

Pet.prototype.feed = function () {
    this.hunger -= 3;
    if (this.hunger <= 0) {
        this.hunger = 0;
    };
};

Pet.prototype.checkUp = function () {
    let statusMessage = "I feel great!";     
    if (this.fitness <= 3 && this.hunger < 5) {
        return statusMessage = "I need a walk";
    }
    else if (this.fitness > 3 && this.hunger >= 5) {
        return statusMessage = "I am hungry";
    }
    else if (this.fitness <= 3 && this.hunger >= 5) {
        return statusMessage = "I am hungry AND I need a walk";
    };
    return statusMessage;
};

Pet.prototype.isAlive = function () {
    let livestatus = true;
    if (this.fitness <= 0) {
        return livestatus = false;
    }
    else if (this.hunger >= 10) {
        return (livestatus = false);
    }
    else if (this.age >= 30) {
        return (livestatus = false);
    }
    return livestatus;
};

module.exports = Pet;
