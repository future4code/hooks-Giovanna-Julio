import * as bcrypt from 'bcryptjs';

export class HashManager {
    public hash = async (plainText: string): Promise<string> => {
        const round = Number(process.env.BCRYPT_COST);
    
        const salt = await bcrypt.genSalt(round)
    
        const cypherText = await bcrypt.hash(plainText, salt);
    
        return cypherText;
    };

    public compare = (plainText: string, cypherText: string): Promise<boolean> => {
        return bcrypt.compare(plainText, cypherText);
    }
}
