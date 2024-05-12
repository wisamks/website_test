const dogImage = document.getElementById('dog');
const makingImageBtn = document.getElementById('makingImage');

const getImage = async e => {
  e.preventDefault();
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  dogImage.src = data.message;
};
makingImageBtn.addEventListener('click', getImage);