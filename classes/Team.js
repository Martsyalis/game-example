class Team {
  constructor(name, credits) {
    (this.name = name),
      (this.credits = credits),
      (this.captain = {}),
      (this.roster = []),
      (this.setCaptain = function(captainName) {
        this.captain = this.roster.find(member => member.name === captainName);
        return this.captain;
      }),
      (this.addOperative = function(op) {
        this.roster.push(op);
      }),
      (this.removeOperative = function(name) {
        this.roster = this.roster.filter(op => op.name !== name);
      }),
      (this.attack = function(range) {
        return this.roster.reduce((acc, op) => {
          return acc + op.attack(range);
        }, this.captain.skills.tactical || 0);
      }),
      (this.spendCredits = function(cost) {
        if (this.credits < cost) {
          return "You dont have enough credits";
        } else {
          this.credits -= cost;
        }
      }),
      (this.addCredits = function(profit) {
        this.credits += profit;
      });
  }
}

export default Team;
