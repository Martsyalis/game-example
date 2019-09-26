import assert from "assert";
import Weapon from "../classes/Weapon";

describe("Midium range weapon test", function() {
  const assault = new Weapon("assault rifle", 10, 3, 3);
  it("performs an attack at perfect range", function() {
    const dmg = assault.dmgAtRange(3);
    assert.equal(dmg, 10);
  });
  it("performs an attack at range thats off by 2", function() {
    const dmg = assault.dmgAtRange(5);
    assert.equal(dmg, 4);
  });
  it('checks the cost of the weapon', function(){
    assert.equal(assault.getCost(), 48);
  })
});
