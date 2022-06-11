import React from 'react';
import {AbilityScore} from "../../model/AbilityScore";
import './AbilityScoreTile.css';

interface AbilityScoreTileProps {
    abilityScore: AbilityScore;
}

export const AbilityScoreTile = (props: AbilityScoreTileProps) => {

    return (
        <div className={"ability-score-tile"}>
            <h1 className="ability-score-tile-name">{props.abilityScore.name}</h1>
            <h1 className="ability-score-tile-score">{props.abilityScore.modifier}</h1>
            <h1 className="ability-score-tile-modifier">{props.abilityScore.score}</h1>
        </div>
    );
};
