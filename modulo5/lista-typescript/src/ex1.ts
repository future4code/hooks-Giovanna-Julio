const knowMe = (name: string, dob: string): string => {
    
    let splittedDoB: string[] = dob.split('/')

    return `Olá me chamo ${name}, nasci no dia ${splittedDoB[0]} do mês de ${splittedDoB[1]} do ano de ${splittedDoB[2]}` 
}