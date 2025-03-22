const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');
const messageBox = document.querySelector('#message');
const body = document.querySelector('body');
const mainContent = document.querySelector('.main-content');

let fontSize = 2;
let messages = [
  'Estas segura?:(((',
  'Piénsalo bien...',
  'Piensa muy bien...',
  'Piensa...',
  'Mira el otro botón!'
];
buttonNo.addEventListener('click', () => {
  fontSize += 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];
});
buttonYes.addEventListener('click', () => {
  messageBox.style.display = 'flex';
  body.style.backgroundImage = "url('LaMasBonita.jpg')";
  body.style.backgroundSize = 'cover';  
  body.style.backgroundPosition = 'center';  
  body.style.backgroundAttachment = 'fixed'; 

  mainContent.style.display = 'none';
});
