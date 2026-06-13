let items =["Rice" , "Oil", "Suger", "Milk", "Egg"];

console.log("Adding:");
items.push("Bread");
items.push("Butter");

console.log(items);

items.shift();
console.log("Remove first item:" , items);
items.pop();
console.log("Remove last item:", items);

if (items.includes("Milk")){
    console.log("Milk exits in inventory");
}
else{
    console.log("Milk does not exits in inventory");
}
