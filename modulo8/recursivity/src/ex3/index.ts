export const calculateSum = (number: number): number => {
    let sum = 0
    
    for (let i = 0 ; i <= number ; i++) {
        sum += i;
    }
    
    return sum;
};
      
