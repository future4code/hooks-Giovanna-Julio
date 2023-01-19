import { Character } from "../models/Types";

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
};

// When we invert dependencies we open the range of validator functions we can use in the performAttack function, as opposite of locking down only one specific validator function. It also facilitates the process of testing code cleaniness-wise.