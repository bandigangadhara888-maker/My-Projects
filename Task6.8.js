let amount = 8000 ;
let discount = 0;
if (amount > 5000){
    discount = amount*0.20;
}
else if (amount > 3000){
    discount = amount*0.10;
}
else if (amount > 1000){
    discount = amount*0.05;
}
let finalAmount = amount - discount;

console.log("Original Amount :", amount);
console.log ("Discount :", discount);
console.log ("Final Amount :" , finalAmount);