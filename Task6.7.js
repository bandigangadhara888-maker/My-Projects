let age = 25;
let TicketPrice;
if (age < 5){
   TicketPrice = "Free Ticket";
}
else if(age >= 5 && age < 18){
    TicketPrice = 100;
}
else if (age > 18 && age < 60){
    TicketPrice = 200;

}else {
    TicketPrice=120;
}
console.log("Age :", age);
console.log("Ticket Price : ₹", TicketPrice);