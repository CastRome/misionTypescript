const accounts:any[] = []

function openAcc(number:string, balance:number): void {
  accounts.push({ number, balance })
}
function getBalance(number:string) {
  const account = accounts.find(account => account.number === number)
  if (!account) throw new Error("La cuenta no se encontrĂ³")
  return account.balance
}
function deposit(number:string, amount:number) : void{
  const account = accounts.find(account => account.number )
  if (!account) throw new Error("La cuenta no se encontrĂ³")

  account.balance += amount
}
function withdraw(number:string, amount:number): void {
  const account = accounts.find(account => account.number )
  if (!account) throw new Error("La cuenta no se encontrĂ³")

  if (account.balance - amount < 0) throw new Error("Fondos insuficientes")
  account.balance -= amount
}
openAcc("111", 0)
deposit("111", 1000)
console.log(getBalance("111"))
withdraw("111", 500)
console.log(getBalance("111"))