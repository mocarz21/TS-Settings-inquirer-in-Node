const inquirer = require('inquirer');
const { Message, Status } = require('./Message')
const { UsersData } = require('./UsersData')

enum Action{
  list = 'list',
  add = 'add',
  remove = 'remove',
  quit = 'quit',
  edit = 'edit'
}

type InquirerAnswers = {
  action: Action
}

console.log("\n");
console.info("???? Welcome to the UsersApp!");
console.log("====================================");
Message.showColorized(Status.info, "Available actions");
console.log("\n");
console.log("list – show all users");
console.log("add – add new user to the list");
console.log("remove – remove user from the list");
console.log("quit – quit the app");
console.log("\n");



const startApp = () => {
  
  inquirer.prompt([{
    name: 'action',
    type: 'input',
    message: 'How can I help you?',
  }]).then(async (answers: InquirerAnswers) => {
    switch (answers.action) {
      case Action.list:
        users.showAll();
        break;
      case Action.add:
        const user = await inquirer.prompt([{
          name: 'name',
          type: 'input',
          message: 'Enter name',
        }, {
          name: 'age',
          type: 'number',
          message: 'Enter age',
        }]);
        users.add(user);
        break;
      case Action.edit:
        const index = await inquirer.prompt([{
          name: 'index',
          type: 'input',
          message: 'Enter index to'
        }])
        const userToEdit = await inquirer.prompt([{
          name: 'name',
          type: 'input',
          message: 'Enter name',
        }, {
          name: 'age',
          type: 'number',
          message: 'Enter age',
        }]);
        users.edit(index, userToEdit);
        break;
      case Action.remove:
        const name = await inquirer.prompt([{
          name: 'name',
          type: 'input',
          message: 'Enter name',
        }]);
        users.remove(name.name);
        break;
      case Action.quit:
        Message.showColorized(Status.info, "Bye bye!");
        return;
      default : 
      Message.showColorized(Status.info, "Command not found");
    }

    startApp();
  });
}

const users = new UsersData();
users.add({ name: "Jan", age: 20 });
users.add({ name: "Adam", age: 30 });
users.add({ name: "Kasia", age: 23 });
users.add({ name: "Basia", age: -6 });



startApp();
