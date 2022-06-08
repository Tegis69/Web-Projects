//challenge: your age in days


let year = 2020;

function ageInDays(birthYear, year) {
    let birthYear = prompt('What year were you born?');
    let dayAge = Math.floor((year - birthYear) * 365.25);
    let h1 = doccument.createElement('h1');
    let textAnswer = document.createTextNode(`You are ${dayAge} days old!`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexBoxResult').appendChild(h1);
}