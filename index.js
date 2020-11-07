
fun


const dodger = document.getElementById('dodger');

document.addEventListener('keydown', function(key) {
  if (key.which === 37) {
    moveLeft(dodger);
  }
  else if (key.which === 39) {
    moveRight(dodger);
  }
});