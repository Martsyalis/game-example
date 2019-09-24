import assert from "assert";
import Weapon from "../classes/Weapon";
import Operative from "../classes/Operative";

describe("Operative Test", function() {
  const assault = new Weapon("assault rifle", 10, 3, 3);
  const op = new Operative("Mark", 30, 0, assault, 4, 3, 3, 3, 3);
  it("creates an operative and tests all functions", function() {
    assert.equal(op.hp, 30);
    assert.deepEqual(op.weapon, assault);
    assert.equal(op.skills.tactical, 4);
    assert.equal(op.skills.stealth, 3);
  });
  it("checks attack", function() {
    assert.equal(op.attack(3), 17);
    assert.equal(op.attack(1), 9);
    assert.equal(op.attack(5), 13);
  });
  it("checks upgrade skill", function() {
    op.upgradeSkill("tactical", 3);
    assert.equal(op.skills.tactical, 7);
  });
});
