 function validateLogin(username, password, email) {
    // 1. Username should not contain spaces
    if (username.includes(" ")) {
        console.log("Error: Username should not contain spaces.");
    } 
    // 2. Password minimum 8 characters
    else if (password.length < 8) {
        console.log("Error: Password must be at least 8 characters long.");
    } 
    // 3. Check if email contains "@"
    else if (!email.includes("@")) {
        console.log("Error: Invalid email. Must contain '@'.");
    } 
    // If all checks pass
    else {
        console.log("Login Successful!");
    }
}

// Testing the function
validateLogin("John Doe", "12345678", "test@mail.com");
validateLogin("John", "123", "test@mail.com");       
validateLogin("John", "password123", "testmail.com"); 
validateLogin("John", "password123", "test@mail.com");