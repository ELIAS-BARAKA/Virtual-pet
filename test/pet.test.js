const Pet = require("../src/pet");



describe("constructor", () => {
  it("returns an object", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});
describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("increase hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toBe(5);
  });

  it("decrease fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toBe(7);
  });
});

describe("walk", () => {
    it("increase fitness", () => {
        const pet = new Pet("Fido");
        pet.walk();
        expect(pet.fitness).toBe(10);
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toBe(8);
    });
});
describe("feed", () => {
    it("decrease hunger", () =>{
        const pet = new Pet("Fido");
        pet.feed();
        expect(pet.hunger).toBe(0);
        pet.hunger = 10;
        pet.feed();
        expect(pet.hunger).toBe(7);
    });
});