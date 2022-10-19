// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let palindromeWord = "asaa";


console.log(isOdd(3));



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





