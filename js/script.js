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
const btnInput = document.querySelector(".col:first-child button");
const palindromeOutput = document.querySelector(".col:first-child h4");

btnInput.addEventListener("click",  function(){
    const isPalindrome = checkPalindrome(palindromeInput.value);
    if (isPalindrome){
        palindromeOutput.innerHTML = "è palindroma";
    }else palindromeOutput.innerHTML = "non è palindroma";
    palindromeInput.value = "";
})



//given two numb and winConditio (0even, 1odd)
//return true if sum of numb meet the winConditio
function evenOrOddGame(numb1 , numb2, winCondition){
   const sum = numb1 + numb2;
   return isOdd(sum) === Boolean(winCondition);
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





