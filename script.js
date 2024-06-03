const counterEl = document.getElementById('counter');
let count = 0;

function updateCounter() {
  counterEl.textContent = count;
}

updateCounter();

const decrementBtn = document.getElementById('decrement');
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

const incrementBtn = document.getElementById('increment');
incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});
