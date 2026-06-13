function* cashbackOffers(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}
let offers = cashbackOffers();
console.log (offers.next().value);
console.log (offers.next().value);
console.log (offers.next().value);
console.log (offers.next().value);