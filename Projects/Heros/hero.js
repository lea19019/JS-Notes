const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
form.category;
form.city;
form.city.options[form.city.selectedIndex].text
form.origin.value = 'Placeholder to demonstrate we can add text with JavaScript';

// Function to access the DOM, get the values and save them in the hero's object to later be converted into a JSON
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object


    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    // This code will achieve the same result as 
    /*
    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
    hero.powers.push(form.powers[i].value);
    }
    }
     */
    hero.age = form.age.value;
    hero.category = form.category.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

form.addEventListener('submit', validate, false);
function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

