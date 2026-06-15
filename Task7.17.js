function validateMobile(number) {
    // ^      : Start of string
    // [6-9]  : First digit must be 6, 7, 8, or 9
    // \d{9}  : Followed by exactly 9 more digits
    // $      : End of string
    const regex = /^[6-9]\d{9}$/;
    
    return regex.test(number);
}

// Examples:
console.log(validateMobile("9876543210")); 
console.log(validateMobile("5876543210")); 
console.log(validateMobile("987654321")); 