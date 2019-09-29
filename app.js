import inquirer from "inquirer";
import Weapon from "./classes/Weapon";
import Operative from "./classes/Operative";
import Team from "./classes/Team";
import { generateWeapon, generateOp } from "./assetGenerators";

const difficultyArray = ["Nightmare", "Hard", "Recomended", "Easy"];

startGame();

async function startGame(team = "") {
  if (!team) {
    team = await createTeam();
    await buyOps(team);
  }
  startMission();
}

function startMission(){
  
}

function buyOps(team, opArray = []) {
  if (!opArray.length) {
    while (opArray.length < 5) {
      opArray.push(generateOp());
    }
  }
  let teamRosterNameArray = team.roster.map(op => op.name);
  let opFilteredChoicesArray = opArray
    .map(op => ({
      name: op.name,
      cost: op.getCost()
    }))
    .filter(
      op => op.cost < team.credits && !teamRosterNameArray.includes(op.name)
    );
  return inquirer
    .prompt([
      {
        type: "list",
        name: "opName",
        message:
          "Time to assemble your operatives. Select operative to view their details. Remember to spend your funds carefully!",
        choices: [...opFilteredChoicesArray, "return to base"]
      }
    ])
    .then(({ opName }) => {
      if (opName === "return to base") return;
      const opObj = opArray.find(op => op.name === opName);
      //print choice to console
      console.log(`${opObj.getInfo()}`);
      return inquirer
        .prompt([
          {
            type: "list",
            name: "confirm",
            message: `Do you want to purchase ${
              opObj.name
            } for ${opObj.getCost()}? you have ${team.credits} credits left`,
            choices: ["yes", "go back"]
          }
        ])
        .then(({ confirm }) => {
          if (confirm === "yes") {
            team.addOperative(opObj);
            team.spendCredits(opObj.getCost());
            opArray.slice(opArray.indexOf(opObj), 1);
          }
          return buyOps(team, opArray);
        });
    });
}

function createTeam() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter you new team's name"
      },
      {
        type: "list",
        name: "difficulty",
        message: "Please select Difficulty",
        choices: difficultyArray
      }
    ])
    .then(answers => {
      const team = new Team(
        answers.name,
        200 + 200 * difficultyArray.indexOf(answers.difficulty)
      );
      console.log(
        `Welcome to the game, your Team ${team.name} is starting with ${team.credits} credits `
      );
      return team;
    });
}

function baseMenu(team) {
  return inquirer.prompt([{
     
  }])
}
