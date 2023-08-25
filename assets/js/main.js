// console.log("Hello World"); 

/* 

DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo)

TOOLS:
- prompt
- let/const
- if/else
- console
- getElementById
- .toFixed(x) !Attenzione - La documentazione dice che restituisce una stringa!! da verificare.

*/

/*

//chiedere all'utente il numero di km da percorrere
const km = Number(prompt("Quanti km vuoi percorrere?"));
//chiedere età passeggero
const userAge = Number(prompt("Quanti anni hai?"));
const price_per_km = 0.21;
//calcolare il prezzo totale del viaggio (0.21 euro al km)
let ticket_price = km * price_per_km;
let discount_message = ("Il prezzo pieno è stato applicato");
console.log("👉🏻", km, userAge, price_per_km, ticket_price);
// verificare se utente < di 18 anni, in caso + applicare sconto del 20%
if (userAge < 18) {
    console.log("sei minorenne, ti faccio il 20%");
    console.log(typeof ticket_price); // number??

    ticket_price = ticket_price - (ticket_price * 0.2);
    discount_message = ("Il prezzo applicato è scontato del 20%");

}
console.log(ticket_price);

if (userAge >= 65) {
    console.log("sei Over 65, ti faccio il 40%");
    ticket_price = (ticket_price * 0.4);
    discount_message = ("Il prezzo applicato è scontato del 40%")

}

console.log("Price: $" + ticket_price.toFixed(2), discount_message);
*/

//verificare se utente over 65, in caso + applicare sconto del 40%

// [nota] altrtimenti il prezzo è pieno (niente sconto)
/*
Descrizione:

MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui 
l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato 
    con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. 
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  
div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina 
si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. 
function(e){ console.log(e) }
Ricordate, molte cose nella vita se fatte per la prima volta risultano difficili se non quasi impossibili, ma é perseverando e soprattutto sbagliando che impariamo. Che la forza sia con voi!


*/

/*
//Chiedo nome, km da percorrere, età del passeggero 
document.getElementById('generate').addEventListener('click', function(){
    const userName = document.getElementById('Name').value;
    console.log(userName);
    const userDistance = Number(document.getElementById('Distance').value);
    console.log(userDistance);
    const userAge = document.getElementById('myAge').value;
    console.log(userAge);
})

//Definisco il prezzo in base ai km
let fullPrice = 0.21 * userDistance;
console.log(fullPrice);

//Definisco "minorenne" e "over65"
const Minorenne = userAge < 18;
    console.log(Minorenne);

const Over65 = userAge > 65;
    console.log(Over65)

//if/else if/else
if (userAge === Minorenne) {
    var total_1 = fullPrice - (fullPrice * 0.20);
    total_1 = total_1.toFixed(2);
    console.log(total_1);   
} else if (userAge === Over65) {
    var total_2 = fullPrice - (fullPrice * 0.40);
    total_2 = total_2.toFixed(2);
    console.log(total_2); 
} else {
    console.log(fullPrice);
}
*/

//Definisco le variabili
const userName = document.getElementById('Name');
const userDistance = document.getElementById('Distance');
const userAge = document.getElementById('Age');
const generateBtn = document.getElementById('generate-btn');
const resetBtn = document.getElementById('reset-btn');

//Stampo in console
console.log('👉', userName, userDistance, userAge, generateBtn, resetBtn);

//full price
generateBtn.addEventListener('click', function(){
    const userKm = Number(userDistance.value);
    fullPrice = 0.21 * userKm;
    fullPrice = fullPrice.toFixed(2);
    // console.log(fullPrice);

//stampo il nome del passeggero 
let passengerName = userName.value;
    console.log(passengerName);
    document.querySelector('.passenger').innerHTML = passengerName;

//prezzo minorenni - 20%
let passengerAge = userAge.value;
// console.log('passengerAge');
if (passengerAge == 'underage') {
        totalMin = fullPrice - (fullPrice * 0.20);
        totalMin = totalMin.toFixed(2);
        console.log(totalMin);
        document.querySelector('.final-price').innerHTML = `${totalMin}€`;
    }  else if (passengerAge == 'over65') {
        totalOver = fullPrice - (fullPrice * 0.40);
        totalOver = totalOver.toFixed(2);
        console.log(totalOver);
        document.querySelector('.final-price').innerHTML = `${totalOver}€`;
    } else{
        console.log(fullPrice);
        document.querySelector('.final-price').innerHTML = `${fullPrice}€`;
    }
})