const hamButton = document.getElementById("hamButton");
const hamCloseButton = document.getElementById("closeHam");
const hamNavMenu = document.getElementById("hamMenu");

hamButton.addEventListener('click', () => {
  hamNavMenu.classList.toggle("active");
});

hamCloseButton.addEventListener('click', () => {
  hamNavMenu.classList.toggle("active");
});
