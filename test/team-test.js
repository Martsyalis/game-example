import assert from "assert";
import Weapon from "../classes/Weapon";
import Operative from "../classes/Operative";
import Team from "../classes/Team";

describe("Team Test", function() {
  const alpha = new Team("alpha", 200);
  const assault = new Weapon("assault rifle", 10, 3, 3);
  const opMark = new Operative("Mark", 30, 0, assault, 4, 3, 3, 3, 3);
  const opJackob = new Operative("Jackob", 30, 0, assault, 4, 3, 3, 3, 3);
  const opSteven = new Operative("Steven", 30, 0, assault, 4, 3, 3, 3, 3);
  alpha.addOperative(opMark);
  alpha.addOperative(opJackob);
  alpha.addOperative(opSteven);
  alpha.setCaptain("Jackob");

  it("creates and populates a team", function() {
    assert.deepEqual(alpha.roster, [opMark, opJackob, opSteven]);
    assert.deepEqual(alpha.captain, opJackob);
  });

  it("performs an attack", function() {
    assert.equal(alpha.attack(3), 55);
  });

  it("removes an opperative", function() {
    alpha.removeOperative("Steven");
    assert.deepEqual(alpha.roster, [opMark, opJackob]);
  });
  it("adds credits", function() {
    alpha.addCredits(200);
    assert.equal(alpha.credits, 400);
  });
  it("spends credits", function() {
    alpha.spendCredits(300);
    assert.equal(alpha.credits, 100);
  });
});
