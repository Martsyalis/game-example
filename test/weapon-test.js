import assert from "assert";
import Weapon from "../classes/Weapon";

const uzi = new Weapon("uzi", 10, 1, 4);
describe("Weapon assault test", function() {
  it("performs an attack at perfect range", function() {
    const dmg = uzi.dmgAtRange(1);
    assert.equal(dmg, 10);
  });
  it("performs an attack at range thats off by 1", function() {
    const dmg = uzi.dmgAtRange(2);
    assert.equal(dmg, 6);
  });
  it("performs an attack at range thats off by 2", function() {
    const dmg = uzi.dmgAtRange(3);
    assert.equal(dmg, 2);
  });
  it("performs an attack at range thats off by 3", function() {
    const dmg = uzi.dmgAtRange(4);
    assert.equal(dmg, 0);
  });
});
