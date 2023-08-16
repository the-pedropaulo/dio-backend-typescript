import { PeopleAccount } from "./classes/PeopleAccount";


const account = new PeopleAccount(12156156, 'Pedro', 12312);
account.deposit(20)

console.log(account.getBalance())
