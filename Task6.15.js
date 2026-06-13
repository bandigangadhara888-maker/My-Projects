const products = {
    "mobile": 15000,
    "Laptop":60000,
    "Headphone": 2000,
    "Smartwatch": 5000
};
const selectedItems = [ item = "mobile", " Headphone", "Smartwatch"];

let totalAmount = 0;
 console.log("---Selected Products ---");
 for(let i = 0; i<selectedItems.length; i++){
    if(products[item]){
        console.log("Item:", products[item]);
        totalAmount += products[item];
    }
 }
 let gstRate = 0.18;
 let gstAmount = totalAmount * gstRate;
 let finalBill = totalAmount + gstAmount;

 console.log("Total Amount :", totalAmount);
 console.log("Gst 18% :", gstAmount);
 console.log("Final Bill :", finalBill);