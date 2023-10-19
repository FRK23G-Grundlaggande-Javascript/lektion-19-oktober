/**
Skriv en funktion som plockar ut året från en sträng i datumformat. Använd substring(startIndex, endIndex) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring. Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.
 */

function getYear(date) {
    const year = date.substring(0, 4);

    console.log('Året är: ' + year);
}

getYear('2023-10-19');