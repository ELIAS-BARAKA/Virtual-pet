function Pet(name) {
  this.name = name;
  this.hunger = 0;
  this.fitness = 10;
  this.age = 0;
}

Pet.prototype = {
 get isAlive() {
    if (this.fitness <= 0) {
      return false;
    }
    if (this.hunger >= 10) {
      return false;
    }
    if (this.age >= 30) {
      return false;
    } else {
      return true;
    }
  },
  growUp() {
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    };
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  },

  walk() {
    const maxFitness = 10;
    this.fitness += 4;
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness >= maxFitness) {
      this.fitness = maxFitness;
    }
  },

  feed() {
    this.hunger -= 3;
    if (!this.isAlive) {
      throw new Error("Your pet is no longer alive :(");
    }
    if (this.hunger <= 0) {
      this.hunger = 0;
    }
  },

  checkUp() {
    // if (this.fitness <= 0 || this.hunger >= 10 || this.age >= 30) {
    //   return "Your pet is no longer alive :(");
    // }
    if (!this.isAlive) {
        throw new Error("Your pet is no longer alive :(");
    }
    if (this.fitness <= 3 && this.hunger < 5) {
      return "I need a walk";
    }
    if (this.fitness > 3 && this.hunger >= 5) {
      return "I am hungry";
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    }
    return "I feel great!";
  },

  adoptChild(child) {
    this.children = new Array(child);
  },

};

module.exports = Pet;
