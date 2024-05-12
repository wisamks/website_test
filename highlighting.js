const home = document.getElementById('home');
const strong = home.getElementsByTagName('strong');
home.addEventListener('mouseover', () => {
  Array.prototype.forEach.call(strong, (s => s.classList.add('highlighted')));
});
home.addEventListener('mouseout', () => {
  Array.prototype.forEach.call(strong, (s => s.classList.remove('highlighted')));
});