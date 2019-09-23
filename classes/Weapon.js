class Weapon {
  constructor(name, dmg, range) {
    (this.name = name),
      (this.range = range),
      (this.dmg = dmg),
      (this.dmgAtRange = function(range) {
        return dmg / (Math.abs(range - this.range) * 3);
      });
  }
}
