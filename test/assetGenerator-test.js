import assert from "assert";
import { generateWeapon, generateOp } from "../assetGenerators";

describe("Tests generateWeapon function", function() {
  const weapon = generateWeapon();
  it("checks that weapon keys are truthy and right types", function() {
    assert.equal(typeof weapon.name, "string");
    assert.equal(typeof weapon.range, "number");
    assert.equal(typeof weapon.dmg, "number");
    assert.equal(typeof weapon.rangePenalty, "number");
    assert.equal(!!weapon.range, true);
    assert.equal(!!weapon.dmg, true);
    assert.equal(!!weapon.rangePenalty, true);
    assert.equal(typeof weapon.getCost(), "number");
    assert.equal(weapon.getCost() > 0, true);
  });
});

describe("Tests generateOp function", function() {
  const op = generateOp();
  it("checks that Operative keys are truthy and right types", function() {
    assert.equal(typeof op.name, "string");
    assert.equal(typeof op.skills.tactical, "number");
    assert.equal(!!op.skills.tactical, true);
  });
  it("checks that attack functions gives a positive integer ", function() {
    assert.equal(Number.isInteger(op.attack(3)), true);
  });
  it("checks that cost function gives a positive integer ", function() {
    assert.equal(Number.isInteger(op.getCost()), true);
    assert.equal(op.getCost() >= 0, true);
  });
});
