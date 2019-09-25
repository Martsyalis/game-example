import Weapon from "../classes/Weapon";
import Operative from "../classes/Operative";
import Team from "../classes/Team";

// weapons

const weapons = {
  assaultRifle: new Weapon("Assault Rifle", 13, 4, 4),
  uzi: new Weapon("Uzi", 10, 2, 4),
  sniperRifle: new Weapon("Sniper Rifle", 20, 5, 5),
  shotGun: new Weapon("Shotgun", 20, 1, 5),
  smg: new Weapon("SMG", 10, 3, 3)
};

const operatives = {
  selinger: new Operative("Selinger", 50, 0, weapons.assaultRifle, 3, 4, 3, 3, 3),
  twain: new Operative("Twain", 50, 0, weapons.sniperRifle, 2, 6, 2, 3, 3),
  vonergut:  new Operative("Vonergut", 75, 0, weapons.shotGun, 5, 2, 5, 1, 1),
  hesse: new Operative("Hesse", 40, 0, weapons.smg, 6, 2, 2, 3, 3),
};
