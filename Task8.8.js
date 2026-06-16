let bookedSeats = [];

function bookSeat(seatNumber) {
    if (bookedSeats.includes(seatNumber)) {
        console.log('Seat ${seatNumber} is already booked.');
    } else {
        bookedSeats.push(seatNumber);
        console.log('Seat ${seatNumber} successfully booked.');
    }
}

// Function to print all booked seats using a loop
function printBookedSeats() {
    console.log("List of Booked Seats:");
    bookedSeats.forEach(seat => {
        console.log('- Seat ${seat}');
    });
}

bookSeat(5);
bookSeat(12);
bookSeat(5); 
printBookedSeats();