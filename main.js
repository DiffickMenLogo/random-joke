const quoteSection = document.querySelector('.quote');
const authorSection = document.querySelector('.name');
const btn = document.querySelector('.btn');
async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let randomInt = getRandomIntInclusive(1,100); 
    quoteSection.innerHTML = data[randomInt].text;
    authorSection.innerHTML = data[randomInt].author;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
btn.addEventListener('click', getQuotes);
getQuotes();
