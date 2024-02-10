document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.gallery img');
  let index = 0;

  function showImage(n) {
    images.forEach(image => image.classList.remove('active'));
    images[n].classList.add('active');
  }

  function nextImage() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
  }

  setInterval(nextImage, 2000); // Cambia de imagen cada 2 segundos
});
