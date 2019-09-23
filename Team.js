class Team {
  constructor(name) {
    (this.name = name),
      (this.captain = {}),
      (this.roster = []),
      (this.setCaptain = function(captainName) {
        this.captain = this.roster.find(member => member.name === captainName);
        return captain;
      });
  }
}
