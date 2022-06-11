export class AbilityScoresDto {
    strength: AbilityScore;
    dexterity: AbilityScore;
    constitution: AbilityScore;
    intelligence: AbilityScore;
    wisdom: AbilityScore;
    charisma: AbilityScore;

    constructor(strength: AbilityScore, dexterity: AbilityScore, constitution: AbilityScore, intelligence: AbilityScore, wisdom: AbilityScore, charisma: AbilityScore) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.charisma = charisma;
        this.wisdom = wisdom;
    }
}

export class AbilityScore {

    name: string;
    score: number;
    modifier: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
        this.modifier = Math.floor((this.score - 10) / 2);
    }
}