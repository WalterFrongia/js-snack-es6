
// 1) SCRIVERE UNA FUNZIONE CHE ACCETTI TRE ARGOMENTI : UN ARRAY E DUE NUMERI (A PIU' PICCOLO DI B).

// 2) LA FUNZIONE RITORNERA' UN NUOVO ARRAY CON I VALORI CHE HANNO LA POSIZIONE (indice) COMPRESA TRA I NUMERI SPECIFICATI.

// 3) USIAMO I NUOVI METODI DEGLI ARRAY FOREACH() O FILTER().

let numeriArray =[1, 25, 34, 45, 50, 55, 59];
let min = 2;
let max = 5;

let risultato = myfunction(numeriArray, min, max)
console.log(risultato);

function  myfunction(array , indexMin , indexMax){
    let newArray = [];
    array.forEach((element, index) => {
        console.log({element , index});
        if(index >= indexMin && index <= indexMax){
            newArray.push(element);
        }
    });
    return newArray
}