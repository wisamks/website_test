const doorImg = document.getElementById('door');
const linkDoor = (e) => {
  e.preventDefault;
  window.location.href = './door.html';
}
doorImg.addEventListener('click', linkDoor);

const topBtn = document.getElementById('topBtn');
topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});