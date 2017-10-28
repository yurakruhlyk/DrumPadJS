// Function delete class when not pressed keys
function removeActive(e) {
  const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  if (!btn) return; // stop the function from running other keys

  btn.classList.remove('active');
}

// Function play sound when pressed keys
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running other keys

  btn.classList.add('active');
  audio.currentTime = 0; // rewind to the start
  audio.play();
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeActive);