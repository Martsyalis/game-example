import assert from "assert";
import Weapon from "../classes/Weapon";

describe("Short Range Weapon test", function() {
  const uzi = new Weapon("uzi", 10, 1, 4);
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

describe("Midium range weapon test", function() {
  const assault = new Weapon("assault rifle", 10, 3, 3);
  it("performs an attack at perfect range", function() {
    const dmg = assault.dmgAtRange(3);
    assert.equal(dmg, 10);
  });
  it("performs an attack at range thats off by 1", function() {
    const dmg = assault.dmgAtRange(2);
    assert.equal(dmg, 7);
  });
  it("performs an attack at range thats off by 2", function() {
    const dmg = assault.dmgAtRange(5);
    assert.equal(dmg, 4);
  });
});
