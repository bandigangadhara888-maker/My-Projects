function placeOrder(customerName, ...items) {
    console.log('Customer: ${customerName}');
    console.log('Items: ${items.join(", ")}');
    console.log('Total Item Count: ${items.length}');
}


placeOrder("Alice", "Burger", "Fries", "Coke");

