
// Select elements
const movieEl = document.getElementById('movie');
const seatContainerEl = document.querySelector('.container');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');

// Global variables
let seatCount = 0;

// Function to update total price and count
const updateTotal = () => {
  const ticketPrice = Number(movieEl.value);
  seatCount = document.querySelectorAll('.row .seat.selected').length;
  countEl.textContent = seatCount;
  totalEl.innerText = seatCount * ticketPrice;
};

// Event listeners
movieEl.addEventListener('change', updateTotal);
seatContainerEl.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('seat') && !target.classList.contains('occupied')) {
    target.classList.toggle('selected');
    updateTotal();
  }
});
