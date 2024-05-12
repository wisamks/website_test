const selectBox = document.getElementById('selectbox');
const select = selectBox.firstElementChild;
const selectButton = selectBox.lastElementChild;
const gameSelect = document.getElementById('gamebox').firstElementChild;

const generateRandom = (e) => {
  e.preventDefault();
  const selected = select.value;
  const gameSelected = gameSelect.value;
  const dic = {
    lottoBtn: 44,
    pensionBtn: 9
  };
  const answerBox = document.getElementById('numbox').querySelector('ul');
  while (answerBox.children.length > 0) {
    answerBox.removeChild(answerBox.firstElementChild);
  }
  const mul = dic[e.target.id];
  for (let i = 0; i < gameSelected; i += 1) {
    let game = [];
    while (game.length < selected) {
      const newNum = Math.trunc(Math.random() * mul);
      if (e.target.id === 'lottoBtn' && game.some(num => num === newNum)) {
    
      } else {
        game.push(newNum);
      }
    }
    
    if (e.target.id === 'lottoBtn') {
      game = game.map(num => num + 1);
      game.sort((a, b) => a - b);
    }
    const li = document.createElement('li');
    li.innerText = game.join(', ');
    li.classList.add('generated');
    answerBox.appendChild(li);
  }
}
selectButton.addEventListener('click', generateRandom);