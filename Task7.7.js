function generateInvoice(finalAmount){
    console.log("Invioce Amount: ", finalAmount);
}
function applyDiscount(amount, callback){
    let discount = amount * 0.20;
    let finalAmount = amount - discount;
    callback
}
applyDiscount(2000, generateInvoice);