import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(docId: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    
  }

  getLoan() {
    return 'Você fez um emprestimo.'
  }
}