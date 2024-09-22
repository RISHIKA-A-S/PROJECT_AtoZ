// Get references to DOM elements
const movieSelect = document.getElementById('movie');
const seats = document.querySelectorAll('.seat');
const countElement = document.getElementById('count');
const totalElement = document.getElementById('total');
const container = document.querySelector('.container');

// Initialize ticket price
let ticketPrice = +movieSelect.value;

// Save selected movie and price to localStorage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Populate UI with data from localStorage
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
    ticketPrice = +movieSelect.value;
  }
  updateSelectedCount();
}

// Update the total number of selected seats and total price
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  const seatCount = selectedSeats.length;
  const totalPrice = seatCount * ticketPrice;

  countElement.innerText = seatCount;
  totalElement.innerText = totalPrice;

  // Save selected seats to localStorage
  const seatIndexArray = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatIndexArray));
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Initial population of UI with saved data
populateUI();
