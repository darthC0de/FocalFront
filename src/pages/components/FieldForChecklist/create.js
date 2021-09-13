import React from 'react';

export default function Create(props) {
    return (
        <div className="field">
            <div className="group-field">
                <p>{props.label}</p>
                <p className={props.answers === "Sim" ? "yes" : props.answers === "Não" ? "no" : "not-exist"}>
                    {props.answers}
                </p>
            </div>
            <div className={props.observation === "" ? "empty-observation" : "observation"}>
                <h4> Observação: </h4>
                <p>{props.observation}</p>
            </div>
        </div>
    );
}