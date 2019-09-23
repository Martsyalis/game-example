class Weapon {
  constructor(name, dmg, range, rangePenalty) {
    (this.name = name),
      (this.range = range),
      (this.dmg = dmg),
      (this.rangePenalty = rangePenalty),
      (this.dmgAtRange = function(range) {
        const rangeDif = Math.abs(range - this.range);
        const rangeMod = rangeDif * rangePenalty;
        return this.dmg > rangeMod ? this.dmg - rangeMod : 0;
      });
  }
}

export default Weapon;
