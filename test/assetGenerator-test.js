import assert from "assert";
import { generateWeapon } from "../assetGenerators";

describe("Tests generateWeapon function", function() {
  const weapon = generateWeapon();
  it("checks that weapon keys are truthy and right types", function() {
    console.log("weapon is", weapon);
    assert.equal("string", typeof weapon.name);
    assert.equal("number", typeof weapon.range);
    assert.equal("number", typeof weapon.dmg);
    assert.equal("number", typeof weapon.rangePenalty);
    assert.equal(true, !!weapon.range);
    assert.equal(true, !!weapon.dmg);
    assert.equal(true, !!weapon.rangePenalty);
  });
});
