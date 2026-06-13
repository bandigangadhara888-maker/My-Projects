let totalSeats = 50;
function bookSeats(numberOfSeats){
    if (numberOfSeats <= totalSeats){
        totalSeats -= numberOfSeats;
        console.log('Booking successful! Seats remainig:',totalSeats);

    }
    else{
        console.log("Booking rejected: Not enough seats available.");
    }
}
bookSeats(5);
bookSeats(40);
bookSeats(8);