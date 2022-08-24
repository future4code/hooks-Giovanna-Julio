const whatsMe = (whatAmI: any): string => {
    
    let whatIsIt: any = typeof whatAmI
    
    return `You've inserted a ${whatIsIt}`
}

console.log(whatsMe('hehe'))