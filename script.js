const theNumber = Math.floor(Math.random() * 51);
let numberVClose0 = [theNumber - 5, theNumber - 4, theNumber - 3, theNumber - 2, theNumber - 1];
let numberVClose1 = [theNumber + 5, theNumber + 4, theNumber + 3, theNumber + 2, theNumber + 1];
let numberClose0 = [theNumber - 6, theNumber - 7, theNumber - 8, theNumber - 9, theNumber - 10];
let numberClose1 = [theNumber + 6, theNumber + 7, theNumber + 8, theNumber + 9, theNumber + 10];
let numberFar0 = [theNumber - 11, theNumber - 12, theNumber - 13, theNumber - 14, theNumber - 15];
let numberFar1 = [theNumber + 11, theNumber + 12, theNumber + 13, theNumber + 14, theNumber + 15];
let attempts = 0;
function guess(){
    theGuess = document.getElementById("guess").value;
    if (theGuess == theNumber){
        document.getElementById("status").innerText = "You Got it!";
    }
    else if (theGuess != theNumber){
        attempts += 1;
        document.getElementById("attempts").innerText = `${attempts}`;
        if (numberVClose0.includes(Number(theGuess)) || numberVClose1.includes(Number(theGuess))){
            document.getElementById("status").innerText = "So Close!"
        }
        else if (numberClose0.includes(Number(theGuess)) || numberClose1.includes(Number(theGuess))){
            document.getElementById("status").innerText = "Close!"
        }
        else if (numberFar0.includes(Number(theGuess)) || numberFar1.includes(Number(theGuess))){
            document.getElementById("status").innerText = "Far Away.."
        }
        else{
            document.getElementById("status").innerText = "Nowhere near the number."
        }
    }
}