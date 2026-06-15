const players = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 25 }
];

const allAbove18 = players.every(player => player.age > 18);
