const movies = ["Inception", "Interstellar", "The Dark Knight", "Oppenheimer"];

const bookingDetails = movies.map((movie, index) => {
  return {
    movieName: movie,
    bookingID:' BK-${index + 101}-${Math.random().toString(36).substr(2, 5).toUpperCase()}'
  };
});

console.log(bookingDetails);