const dNoneEl = document.querySelector('.d-none');
const divEl = document.querySelector('.js-div');
const inputEl = document.querySelector('input');
const text = document.createTextNode('<div>')

inputEl.addEventListener('focus', () => {
    divEl.classList.toggle('d-none'); 
    divEl.appendChild(text);
} );

inputEl.addEventListener('blur', () => {
    divEl.classList.toggle('d-none'); 
} );

