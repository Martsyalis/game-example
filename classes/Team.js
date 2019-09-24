class Team {
  constructor(name) {
    (this.name = name),
      (this.captain = {}),
      (this.roster = []),
      (this.setCaptain = function(captainName) {
        this.captain = this.roster.find(member => member.name === captainName);
        return captain;
      }),
      (this.attack = function(range) {
        this.roster.reduce((acc, op) => {
          return acc + op.attack(range);
        }, this.captain.skills.tactical || 0);
      });
  }
}
