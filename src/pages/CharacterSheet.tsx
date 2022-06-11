import React from 'react';
import {AbilityScore, AbilityScoresDto} from "../model/AbilityScore";
import {AbilityScoreLayout} from "../components/AbilityScoreLayout/AbilityScoreLayout";

export const CharacterSheet = () => {

    let strength = new AbilityScore('Strength', 13)
    let dexterity = new AbilityScore('Dexterity', 17)
    let constitution = new AbilityScore('Constitution', 9)
    let intelligence = new AbilityScore('Intelligence', 12)
    let wisdom = new AbilityScore('Wisdom', 12)
    let charisma = new AbilityScore('Charisma', 10)

    let scores = new AbilityScoresDto(strength, dexterity, constitution, intelligence, wisdom, charisma)

    return (
        <AbilityScoreLayout abilityScores={scores}/>
    );
}