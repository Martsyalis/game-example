import dogNames from "dog-names";
import catNames from "cat-names";
import Weapon from "./classes/Weapon";
import Operative from "./classes/Operative";
import Team from "./classes/Team";

function generateWeapon() {
  return new Weapon(
    catNames.random(),
    randomInRange(5, 30),
    randomInRange(1, 5),
    randomInRange(5, 6)
  );
}

function generateOp() {
  return new Operative(
    dogNames.allRandom(),
    randomInRange(20, 100),
    0,
    generateWeapon(),
    randomInRange(1, 10),
    randomInRange(1, 10),
    randomInRange(1, 10),
    randomInRange(1, 10),
    randomInRange(1, 10)
  );
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export { generateWeapon, generateOp };
