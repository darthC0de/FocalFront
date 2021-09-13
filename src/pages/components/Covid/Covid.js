import React, { useState, useEffect } from 'react';
import FieldForChecklist from '../FieldForChecklist/create';
import api from '../../../services/api';

export default function Covid() {
    const [questions_covid, setQuestions_covid] = useState([]);
    const id_user = localStorage.getItem('id_user');
    const uniqueId = localStorage.getItem('infoId')

    useEffect(() => {
        api.get('questionsCovid', {
            headers: {
                authorization: id_user,
            }
        }).then(response => {
            const data = response.data
            const covidId = id => id.id === uniqueId

            setQuestions_covid(data.filter(covidId))
        })
    }, [id_user])

    return (
        <>
            {questions_covid.map(question => (
                <section key={question.id}>
                    <h3> Covid-19 </h3>
                    <FieldForChecklist
                        label="O restaurante está fazendo a aferição de temperatura e perguntas de todos os visitantes que entram no restaurante?"
                        answers={question.questionCovid1}
                        observation={question.questionCovidObservation1}
                    />
                    <FieldForChecklist
                        label="O caderno de temperatura e perguntas está devidamente preenchido? (Verificar últimos 5 dias)"
                        answers={question.questionCovid2}
                        observation={question.questionCovidObservation2}
                    />
                    <FieldForChecklist
                        label="O gerente sabe calibrar o termometro? (Body/Surface)"
                        answers={question.questionCovid3}
                        observation={question.questionCovidObservation3}
                    />
                    <FieldForChecklist
                        label="Todos os colaboradores da escala, aparecem no caderno?"
                        answers={question.questionCovid4}
                        observation={question.questionCovidObservation4}
                    />
                    <FieldForChecklist
                        label="Os colaboradores estão lavando as mãos a cada 30 minutos?"
                        answers={question.questionCovid5}
                        observation={question.questionCovidObservation5}
                    />
                    <FieldForChecklist
                        label="As máscaras estão sendo trocadas a cada 2 horas?"
                        answers={question.questionCovid6}
                        observation={question.questionCovidObservation6}
                    />
                    <FieldForChecklist
                        label="As mascaras estão sendo utilizadas corretamente?"
                        answers={question.questionCovid7}
                        observation={question.questionCovidObservation7}
                    />
                    <FieldForChecklist
                        label="Fazer algum questionamento sobre o transporte publico ou cuidados em casa?"
                        answers={question.questionCovid8}
                        observation={question.questionCovidObservation8}
                    />
                    <FieldForChecklist
                        label="Você recebeu a quantidade necessária de máscaras para trocar a cada 2 horas no turno? (10/12 máscaras)"
                        answers={question.questionCovid9}
                        observation={question.questionCovidObservation9}
                    />
                </section>
            ))}
        </>
    );
}