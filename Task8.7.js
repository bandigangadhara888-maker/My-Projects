 let balance = 0;
function deposit(amount) {
  balance += amount;
  return' Deposited: $${amount}. New balance: $${balance}';
}

function withdraw(amount) {
  if (amount > balance) {
    return "Insufficient funds.";
  }
  balance -= amount;
  return 'Withdrew: $${amount}. New balance: $${balance}';
}

function checkBalance() {
  return' Current balance: $${balance}';
}

console.log(deposit(100));     
console.log(withdraw(30)); 
console.log(checkBalance());