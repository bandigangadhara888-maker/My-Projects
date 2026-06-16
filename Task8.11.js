const dobInput = "2000-11-14";
const date = new Date(dobInput);

const day = date.getDate();
const month = date.getMonth() + 1; 
const year = date.getFullYear();
const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });

console.log('Day: ${day}');
console.log('Month: ${month}');
console.log('Year: ${year}');
console.log('Weekday: ${weekday}');