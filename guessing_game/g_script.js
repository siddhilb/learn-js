let button = document.querySelector('#btn');

let random_number = Math.floor(Math.random() * 101);

let input = document.querySelector("#guess");

console.log(random_number);


function validatemax() {
    if (parseInt(input.value) < 0) {
        input.value = '0';
    }
    if (parseInt(input.value) > 100) {
        input.value = '100';
    }
}

function guess() {
    let input_guess = parseInt(document.querySelector('#guess').value);
    //console.log(input_guess);
    if (input_guess === random_number) {
        console.log("Correct");
        document.querySelector("#output_area").innerHTML = "<p>You guessed it correct! Play again?<br></br><button class='button'onclick='try_again()'>Play again</button></p>"
    } else {
        document.querySelector("#output_area").innerHTML = "<p>You guessed it wrong. Try again?<br></br><button class='button'onclick='try_again()'>Try again</button>&nbsp;&nbsp;&nbsp;<button class='button' onclick=reveal_answer()>Reveal Answer</button></p>"

    }

}

button.addEventListener('click', function () {
    guess();
});

function try_again() {
    random_number = Math.floor(Math.random() * 101);
    console.log(random_number);
    input.value = '';
    document.querySelector("#output_area").innerHTML = "";
}

function reveal_answer() {
    document.querySelector('#output_area').innerHTML = (`<p>The answer is: ${random_number}<br></br><button class='button' onclick='try_again()'>Try again?</button>`)
}