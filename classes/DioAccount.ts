export abstract class DioAccount {
  name: string;
  accountNumber: number;
  private balance: number = 0;
  private status: boolean= false;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit(add: number): number {
    const status = this.validateStatus();
    return this.balance += add;
  }

  withdraw(sub:number): number {
    return this.balance -= sub;
  }

  getBalance(): number {
    return this.balance;
  }

  private validateStatus(): boolean {
    if(this.status) {
      return true;
    }

    throw new Error("Sua conta está desativada!");
    
  }
}