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
      (this.assault = function(range) {
        const dmgFromSkills =
          this.skills.marksmanship * range + this.skills.tactical / range;
        const totalDmg = weapon.dmgAtRange(range) * dmgFromSkills;
      });
  }
}
