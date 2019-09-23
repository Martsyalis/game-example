class Weapon {
  constructor(name, dmg, range) {
    (this.name = name),
      (this.range = range),
      (this.dmg = dmg),
      (this.dmgAtRange = function(range) {
        const rangeMod = Math.abs(range - this.range) * 3;
        return rangeMod ? dmg / rangeMod : dmg;
      });
  }
}

export default Weapon;
