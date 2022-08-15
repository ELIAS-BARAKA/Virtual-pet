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
});
