let  cart = [
    {product: "Mobile", price: 15000},
    {product: "Headset", price:2000},
    {product: "Charger", price:1000}
];
for (let i = 0; i < cart.length; i++){
    console.log(cart[i].product);
}
let totalValue = 0;
for( let i = 0; i < cart.length; i++){
    totalValue += cart[i].price;
}
console.log("Total Value:" , totalValue);
 let mostExpensive =cart[0];
 for (let i = 0; i < cart.length; i++){
     if (cart[i].price > mostExpensive.price){
        mostExpensive = cart[i];
     }
 }
 console.log("Most Expensive product:",mostExpensive.product );
 