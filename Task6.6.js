let balance =10000;
function deposit(amount){
    balance += amount;
    console.log("Deposited Amount: ₹", amount);
  
} function withdraw(amount){
    if( amount <= balance){
        balance -= amount;
        console.log("withdraw Amount: ₹", amount);
    }
    else{
        console.log("Insufficient Balance");
    }
    checkBalance();
}
function checkBalance(){
    console.log("Remaining Balance: ₹", balance);
}
deposit(10000);
withdraw(2000);