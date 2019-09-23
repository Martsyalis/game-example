import assert from "assert";
import Weapon from "../classes/Weapon";

const uzi = new Weapon("uzi", 10, 1);
describe("Weapon assault test", function() {
  it("performs an attack at range", function() {
    const dmg = uzi.dmgAtRange(1);
    assert.equal(dmg, 10);
  });
});
