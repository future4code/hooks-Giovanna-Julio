const printCrescentNumbers = (number: number) => {
    if (number >= 0) {
        printCrescentNumbers(number - 1);
        console.log(number);
    }
};