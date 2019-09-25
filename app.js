import inquirer from "inquirer";
import Weapon from "../classes/Weapon";
import Operative from "../classes/Operative";
import Team from "../classes/Team";


let team;

function CreateTeam() {
  inquirer
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
        choices: ["Easy", "Hard", "Nightmare"]
      }
    ])
    .then(answers => {});
}

CreateTeam();
