type accountInfo = {
    name: string,
    email: string,
    role: string
}

const accounts: accountInfo[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const sortAdmin = (accounts: accountInfo[]): string[] => {

    const listaAdmin: accountInfo[] = accounts.filter((item)=>{
        return item.role === "admin" 
    })

    const emails: string[] = listaAdmin.map((item)=>{
        return item.email
    })

    return emails
}