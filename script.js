const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener('click', ()=> {
  count++;
  counter.innerHTML = count;
});

decreaseBtn.addEventListener('click', ()=> {
  if (count > 0){
    count--;
    counter.innerHTML = count;
  }
});

resetBtn.addEventListener('click', ()=> {
  count = 0;
  counter.innerHTML = count;
});
