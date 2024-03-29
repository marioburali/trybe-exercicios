const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

const addClass = (event) => {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
}
firstLi.addEventListener('click', addClass)
secondLi.addEventListener('click', addClass)
thirdLi.addEventListener('click', addClass)


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.

const digitText = (event) => {
    const techInput = document.querySelector('.tech');
    techInput.innerText = event.target.value;
} 
input.addEventListener('input', digitText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

const redirectPg = (event) => {
    window.location.replace('https://github.com/marioburali');
};

myWebpage.addEventListener('dblclick', redirectPg);
console.log(myWebpage)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

// Segue abaixo um exemplo de uso do event.target.

const changeColor = (event) => {
  event.target.style.color = 'green';
}
myWebpage.addEventListener('mouseover', changeColor);

const returnColor = (event) => {
    event.target.style.color = 'unset';
  }
  myWebpage.addEventListener('mouseout', returnColor);
