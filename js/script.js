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


console.log(randomGen(1,5));


function checkPalindrome(word){

    for( let i = 0, j = word.length-1; i < word.length / 2; i++, j--){
        if(word[i] !== word[j]){
            return false;
        }
    }
    return true;
}

function randomGen(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}





