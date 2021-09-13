import React from 'react'
import './styles.css'

export default function Create(props) {
    return (
        <>
            <div className="field-new-checklist">
                <div className="group-field">
                    <p>{props.label}</p>
                    {props.fieldType === "icons" ? (
                        <div className="icons">
                            <label className={props.onChangeInputValue === 'Sim' ? 'like-active' : 'like'}>
                                <input
                                    type="radio"
                                    name={props.label}
                                    value="Sim"
                                    onChange={props.onChangeInput}
                                    required
                                />
                                Sim
                            </label>

                            <label className={props.onChangeInputValue === 'Não' ? 'unlike-active' : 'unlike'}>
                                <input
                                    type="radio"
                                    name={props.label}
                                    value="Não"
                                    onChange={props.onChangeInput}
                                    required
                                />
                                Não
                            </label>
                            <label className={props.onChangeInputValue === 'N/A' ? 'not-exist-active' : 'not-exist'}>
                                <input
                                    type="radio"
                                    name={props.label}
                                    value="N/A"
                                    onChange={props.onChangeInput}
                                    required
                                />
                                N/A
                            </label>
                        </div>
                    ) : props.fieldType === "select" ? (
                        <select name="" id="" className="select-field">
                            <option default value="">Selecione uma das opções</option>
                            {props.options}
                        </select>
                    ) : props.fieldType === "text" && (
                        <input 
                        type="text"
                        className="text-field" 
                        placeholder="Digite algo aqui..." />
                    )
                    }
                </div>
                {props.onChangeInputValue === 'Não' && (
                    <div className="observation">
                        <p>Observações:</p>
                        <textarea
                            placeholder="Digite aqui..."
                            required={props.onChangeInputValue !== "Não" ? false : true}
                            value={props.valueTextarea}
                            onChange={props.onChangeTextarea}
                        ></textarea>
                    </div>
                )}
            </div>
        </>
    );
}