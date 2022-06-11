import React from 'react';
import {AbilityScoreTile} from "../AbilityScoreTile/AbilityScoreTile";
import {AbilityScoresDto} from "../../model/AbilityScore";
import './AbilityScoreLayout.css';

interface AbilityScoreLayoutProps {
    abilityScores: AbilityScoresDto;
}

export const AbilityScoreLayout = (props: AbilityScoreLayoutProps) => {

    return (
        <div className="ability-score-layout">
            <AbilityScoreTile abilityScore={props.abilityScores.strength}/>
            <AbilityScoreTile abilityScore={props.abilityScores.dexterity}/>
            <AbilityScoreTile abilityScore={props.abilityScores.constitution}/>
            <AbilityScoreTile abilityScore={props.abilityScores.intelligence}/>
            <AbilityScoreTile abilityScore={props.abilityScores.wisdom}/>
            <AbilityScoreTile abilityScore={props.abilityScores.charisma}/>
        </div>
    );
};
