function sendSMS(){
    console.log("SMS Send To Customer");


}function placeOrder(callback){
    console.log("Order placed Successfully");
    callback();
}
placeOrder(sendSMS);