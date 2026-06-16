let groupMembers = ["Alice", "Bob", "Charlie"];

// 1. Add members
groupMembers.push("David");      
groupMembers.unshift("Eve");    

// 2. Remove members
groupMembers.pop();             
groupMembers.shift();           

// 3. Insert member at a specific position
groupMembers.splice(1, 0, "Frank");

// 4. Display final group list
console.log("Final Group List:", groupMembers);