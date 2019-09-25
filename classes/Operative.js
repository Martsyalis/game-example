class Operative {
  constructor(
    name,
    hp,
    exp,
    weapon,
    tactical,
    marksmanship,
    cover,
    ambush,
    stealth
  ) {
    (this.name = name),
      (this.hp = hp),
      (this.exp = exp),
      (this.weapon = weapon),
      (this.skills = {
        tactical,
        marksmanship,
        cover,
        ambush,
        stealth
      }),
      (this.upgradeSkill = function(skill, points) {
        this.skills[skill] += points;
      }),
      (this.attack = function(range) {
        const dmgFromSkills =
          Math.ceil(this.skills.marksmanship / 2) * range +
          this.skills.tactical -
          range;
        const totalDmg = weapon.dmgAtRange(range) + dmgFromSkills;
        return totalDmg;
      }),
      (this.cost = function() {
        let skillCosts = Object.values(this.skills).reduce(
          (cost, skill) => cost + skill * 5,
          0
        );
        return skillCosts + this.hp + this.weapon.cost();
      });
  }
}

export default Operative;
