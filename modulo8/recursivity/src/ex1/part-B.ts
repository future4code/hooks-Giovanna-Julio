const printDecrescent = (n: number) => {
    if (n >= 0) {
        console.log(n);
        printDecrescent(n - 1);
    }
};