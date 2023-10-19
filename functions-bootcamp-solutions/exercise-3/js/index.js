/** Övning 3 */

/**
 * Skriv en funktion som tar tre parametrar. 
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
 * Utför beräkningen och returnera summan och skriv ut. 
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) 
 * och varje operation ska vara sin egen funktion. 
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operations som ska göras (addition, subtraktion etc)
 * 4. Gör uträkning och returnera summan
 * 5. Skriv ut summan
 */

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function mulitply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function calculate(firstNumber, secondNumber, operation) {
    if (typeof firstNumber == 'number' 
        && typeof secondNumber == 'number') {
            if (operation == '+') {
                const sum = add(firstNumber, secondNumber);
                console.log(`Summan av addition blev: ${sum}`);
            } else if (operation == '-') {
                const sum = subtract(firstNumber, secondNumber);
                console.log(`Summan av subtraktion blev: ${sum}`);
            } else if (operation == '/') {
                const sum = divide(firstNumber, secondNumber);
                console.log(`Summan av dividering blev: ${sum}`);
            } else if (operation == '*') {
                const sum = mulitply(firstNumber, secondNumber);
                console.log(`Summan av multiplikation blev: ${sum}`);
            } else {
                console.log('Ingen giltlig operation');
            }
    } else {
        console.log('Använd bara nummer, tack!');
    }
}

calculate(5, 10, '+');
calculate(5, 10, '-');
calculate(5, 10, '/');
calculate(5, 10, '*');
calculate('hej', 10);
calculate(10, 'Hej');