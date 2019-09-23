import inquirer from "inquirer";



inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter you new team's name"
    }
  ])
  .then(answer => {
    console.log("teams name is: ", answer.name);
  });
