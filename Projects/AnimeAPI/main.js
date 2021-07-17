const randAnime = document.getElementById('randAnime');
const randCharacter = document.getElementById('randCharacter');
const randQuote = document.getElementById('randQuote');
const charactersQuotes = document.getElementById('charactersQuotes');


const getAnimeData = document.forms['getAnimeData'];

fetch('https://animechan.vercel.app/api/random')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(quote => {
        console.log(quote)
        const randomQuote = [];
        randomQuote.push(quote);
        randAnime.innerText = randomQuote[0].anime;
        randCharacter.innerText = randomQuote[0].character;
        randQuote.innerText = randomQuote[0].quote;
    });

getAnimeData.addEventListener('submit', (event) => {
    event.preventDefault();
    const choseCharacter = document.createElement('DIV');
    const choAnime = document.createElement('H3');
    const choCharacter = document.createElement('H4');
    const choQuote = document.createElement('P');
    const characterQuotes = [];
    let character = document.getElementById('getCharacter').value;
    console.log(character)

    fetch(`https://animechan.vercel.app/api/quotes/character?name=${character}`)
        .then(response => response.json())
        .then(quotes => {
            quotes.forEach(quote => {
                characterQuotes.push(quote)
            });
        }).then(value => {
            let randomNum = Math.floor(Math.random() * 10);
            choAnime.innerText = characterQuotes[0].anime;
            choCharacter.innerText = characterQuotes[0].character;
            choQuote.innerText = characterQuotes[randomNum].quote;
            choseCharacter.append(choAnime);
            choseCharacter.append(choCharacter);
            choseCharacter.append(choQuote);
            charactersQuotes.append(choseCharacter);
        })
});