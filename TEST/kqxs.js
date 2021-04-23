
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 10)]

btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number) {
        output.innerHTML = `You guessed right, your number was ${number}`
        alert("Your reward is wasting time for this, thank for playing!")
    } else if ( input < number) {
        output.innerHTML = "You guessed too low, gà"
    };
    if ( input > number) {
        output.innerHTML = "You guessed too high, non"
    }
})

console.log(number)

