// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const palindromeInput = document.getElementById("palindrome-input"); 
const btnInputPalindrome = document.querySelector(".row:first-child button");
const palindromeOutput = document.querySelector(".row:first-child  h4");
const evenOrOddGameInput = document.getElementById("even-or-od-imput");
const evenOrOddGameOutput = document.querySelector(".row:last-child h4");
const bntInputEvenGame = document.querySelector(".row:last-child  button");
const radioButton = document.getElementsByClassName("radio-ev");


btnInputPalindrome.addEventListener("click",  function(){
    const isPalindrome = checkPalindrome(palindromeInput.value);
    if (isPalindrome){
        palindromeOutput.innerHTML = "è palindroma";
    }else palindromeOutput.innerHTML = "non è palindroma";
    palindromeInput.value = "";
})

//
bntInputEvenGame.addEventListener("click",  function(){
    const evenChecked = document.querySelector(".radio-ev[checked]");
    const evenOrOddValue = evenChecked.value;

    const min = 1;
    const max = 5;
    const random = randomGen(min,max);
    
    const gameResult = evenOrOddGame(evenOrOddGameInput.value , random , evenOrOddValue );
    evenOrOddGameOutput.innerHTML = "Il computer sceglie: " + random +". ";
    if (gameResult){
        evenOrOddGameOutput.innerHTML += "Hai vinto!"
    }else evenOrOddGameOutput.innerHTML +="Hai perso";

})



//remove all checked attribute in array arr and set up a new checked attribute on click event over them
function addChecked(arr){
    for(let i = 0 ; i < arr.length; i++){
        arr[i].addEventListener("click" , function(){
            removeChecked(arr);
            arr[i].setAttribute("checked" , "checked");
        })
    } 
}

//remove all checked attribute in array 
function removeChecked(arr){
    for(let i = 0 ; i < arr.length; i++){
        arr[i].removeAttribute("checked"); 
    } 
}


//given two numb and winConditio (0even, 1odd)
//return true if sum of numb meet the winConditio
function evenOrOddGame(numb1 , numb2, winCondition){
    let intCondition = parseInt(winCondition)
    const sum = parseInt(numb1) + parseInt(numb2);
    return isOdd(sum) === Boolean(intCondition);
}


//given a string of 1 word, return true if palindrome or false if is not
function checkPalindrome(word){

    // set up two counter:  i at 0 (first character of the word)    who gets a +1 in every cicle
    //                      j at the last char of the word          who gets a -1 in every cicle
    //compare the extrem char of the word and found out if the word is palindrome
    for( let i = 0, j = word.length-1; i < word.length / 2; i++, j--){
        if(word[i] !== word[j]){
            return false;
        }
    }
    return true;
}

//returning a random number between min e max. Both min and max included
function randomGen(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//returning ture if  numb is odd and false if it's not
function isOdd(numb){
    //The first ! coerce the value to a boolean and inverse it. So to reverse it back to true, we put another ! on it.
    return !!(numb % 2);
}





