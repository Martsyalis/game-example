import inquirer from "inquirer";
import Weapon from "./classes/Weapon";
import Operative from "./classes/Operative";
import Team from "./classes/Team";
import { generateWeapon, generateOp } from "./assetGenerators";

const difficultyArray = ["Nightmare", "Hard", "Recomended", "Easy"];

startGame();

async function startGame() {
  const team = await createTeam();
  // const team = new Team("Alpha", 900);
  await buyOps(team);
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
      cost: op.cost()
    }))
    .filter(
      op => op.cost < team.credits && !teamRosterNameArray.includes(op.name)
    );
  console.log("array is: ", opFilteredChoicesArray);
  inquirer
    .prompt([
      {
        type: "list",
        name: "opName",
        message:
          "Time to assemble your operatives. Select operative to view their details. Remember to spend your funds carefully!",
        choices: opFilteredChoicesArray
      }
    ])
    .then(({ opName }) => {
      const opObj = opArray.find(op => op.name === opName);
      console.log(`You selected ${
        opObj.name
      } who costs ${opObj.cost()} and has ${opObj.hp} health. 
      \n His skills are: ${opObj.skills} \n and he carries a weapon named ${
        opObj.weapon.name
      } which has ${opObj.weapon.dmg} dmg with ${
        opObj.weapon.range
      } range and ${opObj.weapon.rangePenalty} accurecy`);
      inquirer
        .prompt([
          {
            type: "list",
            name: "confirm",
            message: `Do you want to purchase ${
              opObj.name
            } for ${opObj.cost()}? you have ${team.credits} credits left`,
            choices: ["yes", "go back"]
          }
        ])
        .then(({ confirm }) => {
          if (confirm === "yes") {
            team.addOperative(opObj);
            team.spendCredits(opObj.cost());
            opArray.slice(opArray.indexOf(opObj), 1);
          }
          buyOps(team, opArray);
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
