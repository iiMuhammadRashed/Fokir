let statistics = document.querySelectorAll(".statistics .num");
let section = document.querySelector(".three");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      statistics.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}