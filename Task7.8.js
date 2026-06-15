function* promotionalOffers(){
    yield "10% OFF";
    yield "20%  OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}
let offers = promotionalOffers();
console.log (offers.next().value);
console.log (offers.next().value);
console.log (offers.next().value);
console.log (offers.next().value);