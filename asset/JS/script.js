// Dichiarazione delle variabili 
var distance = parseFloat(prompt("How far is your destination in kilometres?"));
var age= parseFloat(prompt("How old are you?"));
var discount18= 0.8;
var discount65= 0.6;
var ticketPrice;

// DEBUG
console.log(distance);
console.log(age);
console.log(discount18);
console.log(discount65);



// VALIDAZIONE DEI DATI IN INPUT 

if (isNaN(distance)|| isNaN(age)) {
    alert("Please, insert a number for each answer");
}


// CALCOLO IL PREZZO DEL BIGLIETTO, TENENDO CONTO DEGLI SCONTI 
if (age<18){
    ticketPrice=0.21*distance*discount18;
}
else if (age>65) {
    ticketPrice=0.21*distance*discount65;
} else {
    ticketPrice=0.21*distance;
}

// DEBUG
console.log(ticketPrice);


// STAMPIAMO IL PREZZO SULLA PAGINA



if (isNaN(distance)|| isNaN(age)){
    document.getElementById('price').innerHTML="Repeat the process please.";
}
else{
    document.getElementById('price').innerHTML="Your ticket price is: "+ ticketPrice.toFixed(2)+ ' \u20AC';
}