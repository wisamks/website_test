const dog = document.getElementById('dog');
const makingImageBtn = document.getElementById('makingImage');

const getImage = async e => {
  e.preventDefault();
  let res;
  let data;
  let source;
  if (e.target.id === 'makingCat') {
    res = await fetch('https://api.thecatapi.com/v1/images/search');
    data = await res.json();
    source = data[0].url;
  } else if (e.target.id === 'makingDog') {
    res = await fetch('https://dog.ceo/api/breeds/image/random');
    data = await res.json();
    source = data.message;
  }
  
  if (!dog.children[0]) {
    const dogImage = document.createElement('img');
    dogImage.src = source;
    dogImage.style.width = "700px";
    dogImage.style.height = "700px";
    dog.appendChild(dogImage);
  } else {
    dog.firstElementChild.src = source;
  }
};
makingImageBtn.addEventListener('click', getImage);