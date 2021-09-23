import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import FieldForNewChecklist from '../components/FieldForNewChecklist/Create';
import Header from '../components/Header/Header';
import { getTokenKey } from '../../context/LoginContext'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import './styles.css';

export default function NewChecklist() {
    const token = getTokenKey();
    console.log('token: ' + token)
    const id_user = localStorage.getItem('id_user');
    const history = useHistory();
    const [store, setStore] = useState('');
    const [bknumber, setBknumber] = useState('');

    const date = format(new Date(), 'dd/LL/y', {
        locale: ptBR
    });
    const hours_min = format(new Date(), 'hh:mm:ss')

    // const [questionCovid1, setQuestionCovid1] = useState('');
    const [questionCovid2, setQuestionCovid2] = useState('');
    const [questionCovid3, setQuestionCovid3] = useState('');
    const [questionCovid4, setQuestionCovid4] = useState('');
    const [questionCovid5, setQuestionCovid5] = useState('');
    const [questionCovid6, setQuestionCovid6] = useState('');
    const [questionCovid7, setQuestionCovid7] = useState('');
    const [questionCovid8, setQuestionCovid8] = useState('');
    const [questionCovid9, setQuestionCovid9] = useState('');

    // const [questionCovidObservation1, setQuestionCovidObservation1] = useState('');
    const [questionCovidObservation2, setQuestionCovidObservation2] = useState('');
    const [questionCovidObservation3, setQuestionCovidObservation3] = useState('');
    const [questionCovidObservation4, setQuestionCovidObservation4] = useState('');
    const [questionCovidObservation5, setQuestionCovidObservation5] = useState('');
    const [questionCovidObservation6, setQuestionCovidObservation6] = useState('');
    const [questionCovidObservation7, setQuestionCovidObservation7] = useState('');
    const [questionCovidObservation8, setQuestionCovidObservation8] = useState('');
    const [questionCovidObservation9, setQuestionCovidObservation9] = useState('');

    const [communicationQuestion1, setCommunicationQuestion1] = useState('');
    const [communicationQuestion2, setCommunicationQuestion2] = useState('');
    const [communicationQuestion3, setCommunicationQuestion3] = useState('');
    const [communicationQuestion4, setCommunicationQuestion4] = useState('');
    const [communicationQuestion5, setCommunicationQuestion5] = useState('');

    const [communicationQuestionObservation1, setCommunicationQuestionObservation1] = useState('');
    const [communicationQuestionObservation2, setCommunicationQuestionObservation2] = useState('');
    const [communicationQuestionObservation3, setCommunicationQuestionObservation3] = useState('');
    const [communicationQuestionObservation4, setCommunicationQuestionObservation4] = useState('');
    const [communicationQuestionObservation5, setCommunicationQuestionObservation5] = useState('');

    const [cultureQuestion1, setCultureQuestion1] = useState('');
    const [cultureQuestion2, setCultureQuestion2] = useState('');
    const [cultureQuestion3, setCultureQuestion3] = useState('');
    const [cultureQuestion4, setCultureQuestion4] = useState('');

    const [cultureQuestionObservation1, setCultureQuestionObservation1] = useState('');
    const [cultureQuestionObservation2, setCultureQuestionObservation2] = useState('');
    const [cultureQuestionObservation3, setCultureQuestionObservation3] = useState('');
    const [cultureQuestionObservation4, setCultureQuestionObservation4] = useState('');

    const [engagementQuestion1, setEngagementQuestion1] = useState('');
    const [engagementQuestion2, setEngagementQuestion2] = useState('');
    const [engagementQuestion3, setEngagementQuestion3] = useState('');
    const [engagementQuestion4, setEngagementQuestion4] = useState('');

    const [engagementQuestionObservation1, setEngagementQuestionObservation1] = useState('');
    const [engagementQuestionObservation2, setEngagementQuestionObservation2] = useState('');
    const [engagementQuestionObservation3, setEngagementQuestionObservation3] = useState('');
    const [engagementQuestionObservation4, setEngagementQuestionObservation4] = useState('');

    const [customerExQuestion1, setCustomerExQuestion1] = useState('');
    const [customerExQuestion2, setCustomerExQuestion2] = useState('');
    const [customerExQuestion3, setCustomerExQuestion3] = useState('');
    const [customerExQuestion4, setCustomerExQuestion4] = useState('');
    const [customerExQuestion5, setCustomerExQuestion5] = useState('');
    const [customerExQuestion6, setCustomerExQuestion6] = useState('');
    const [customerExQuestion7, setCustomerExQuestion7] = useState('');
    const [customerExQuestion8, setCustomerExQuestion8] = useState('');
    const [customerExQuestion9, setCustomerExQuestion9] = useState('');
    const [customerExQuestion10, setCustomerExQuestion10] = useState('');
    const [customerExQuestion11, setCustomerExQuestion11] = useState('');
    const [customerExQuestion12, setCustomerExQuestion12] = useState('');

    const [customerExQuestionObservation1, setCustomerExQuestionObservation1] = useState('');
    const [customerExQuestionObservation2, setCustomerExQuestionObservation2] = useState('');
    const [customerExQuestionObservation3, setCustomerExQuestionObservation3] = useState('');
    const [customerExQuestionObservation4, setCustomerExQuestionObservation4] = useState('');
    const [customerExQuestionObservation5, setCustomerExQuestionObservation5] = useState('');
    const [customerExQuestionObservation6, setCustomerExQuestionObservation6] = useState('');
    const [customerExQuestionObservation7, setCustomerExQuestionObservation7] = useState('');
    const [customerExQuestionObservation8, setCustomerExQuestionObservation8] = useState('');
    const [customerExQuestionObservation9, setCustomerExQuestionObservation9] = useState('');
    const [customerExQuestionObservation10, setCustomerExQuestionObservation10] = useState('');
    const [customerExQuestionObservation11, setCustomerExQuestionObservation11] = useState('');
    const [customerExQuestionObservation12, setCustomerExQuestionObservation12] = useState('');

    const [frameQuestion1, setFrameQuestion1] = useState('');
    const [frameQuestion2, setFrameQuestion2] = useState('');
    const [frameQuestion3, setFrameQuestion3] = useState('');
    const [frameQuestion4, setFrameQuestion4] = useState('');

    const [frameQuestionObservation1, setFrameQuestionObservation1] = useState('');
    const [frameQuestionObservation2, setFrameQuestionObservation2] = useState('');
    const [frameQuestionObservation3, setFrameQuestionObservation3] = useState('');
    const [frameQuestionObservation4, setFrameQuestionObservation4] = useState('');

    const [workSafetyQuestion1, setWorkSafetyQuestion1] = useState('');
    const [workSafetyQuestion2, setWorkSafetyQuestion2] = useState('');
    const [workSafetyQuestion3, setWorkSafetyQuestion3] = useState('');
    const [workSafetyQuestion4, setWorkSafetyQuestion4] = useState('');
    const [workSafetyQuestion5, setWorkSafetyQuestion5] = useState('');
    const [workSafetyQuestion6, setWorkSafetyQuestion6] = useState('');
    const [workSafetyQuestion7, setWorkSafetyQuestion7] = useState('');
    const [workSafetyQuestion8, setWorkSafetyQuestion8] = useState('');
    const [workSafetyQuestion9, setWorkSafetyQuestion9] = useState('');
    const [workSafetyQuestion10, setWorkSafetyQuestion10] = useState('');

    const [workSafetyQuestionObservation1, setWorkSafetyQuestionObservation1] = useState('');
    const [workSafetyQuestionObservation2, setWorkSafetyQuestionObservation2] = useState('');
    const [workSafetyQuestionObservation3, setWorkSafetyQuestionObservation3] = useState('');
    const [workSafetyQuestionObservation4, setWorkSafetyQuestionObservation4] = useState('');
    const [workSafetyQuestionObservation5, setWorkSafetyQuestionObservation5] = useState('');
    const [workSafetyQuestionObservation6, setWorkSafetyQuestionObservation6] = useState('');
    const [workSafetyQuestionObservation7, setWorkSafetyQuestionObservation7] = useState('');
    const [workSafetyQuestionObservation8, setWorkSafetyQuestionObservation8] = useState('');
    const [workSafetyQuestionObservation9, setWorkSafetyQuestionObservation9] = useState('');
    const [workSafetyQuestionObservation10, setWorkSafetyQuestionObservation10] = useState('');

    const [routinesPmBmQuestion1, setRoutinesPmBmQuestion1] = useState('');
    const [routinesPmBmQuestion2, setRoutinesPmBmQuestion2] = useState('');
    const [routinesPmBmQuestion3, setRoutinesPmBmQuestion3] = useState('');
    const [routinesPmBmQuestion4, setRoutinesPmBmQuestion4] = useState('');
    const [routinesPmBmQuestion5, setRoutinesPmBmQuestion5] = useState('');
    const [routinesPmBmQuestion6, setRoutinesPmBmQuestion6] = useState('');
    const [routinesPmBmQuestion7, setRoutinesPmBmQuestion7] = useState('');
    const [routinesPmBmQuestion8, setRoutinesPmBmQuestion8] = useState('');
    const [routinesPmBmQuestion9, setRoutinesPmBmQuestion9] = useState('');
    const [routinesPmBmQuestion10, setRoutinesPmBmQuestion10] = useState('');
    const [routinesPmBmQuestion11, setRoutinesPmBmQuestion11] = useState('');

    const [routinesPmBmQuestionObservation1, setRoutinesPmBmQuestionObservation1] = useState('');
    const [routinesPmBmQuestionObservation2, setRoutinesPmBmQuestionObservation2] = useState('');
    const [routinesPmBmQuestionObservation3, setRoutinesPmBmQuestionObservation3] = useState('');
    const [routinesPmBmQuestionObservation4, setRoutinesPmBmQuestionObservation4] = useState('');
    const [routinesPmBmQuestionObservation5, setRoutinesPmBmQuestionObservation5] = useState('');
    const [routinesPmBmQuestionObservation6, setRoutinesPmBmQuestionObservation6] = useState('');
    const [routinesPmBmQuestionObservation7, setRoutinesPmBmQuestionObservation7] = useState('');
    const [routinesPmBmQuestionObservation8, setRoutinesPmBmQuestionObservation8] = useState('');
    const [routinesPmBmQuestionObservation9, setRoutinesPmBmQuestionObservation9] = useState('');
    const [routinesPmBmQuestionObservation10, setRoutinesPmBmQuestionObservation10] = useState('');
    const [routinesPmBmQuestionObservation11, setRoutinesPmBmQuestionObservation11] = useState('');

    async function handleNewChecklist(e) {
        e.preventDefault()

        const dataStoreInfo = { store, bknumber, date, hours_min }

        const dataQuestionCovid = {
            // questionCovid1, questionCovidObservation1,
            questionCovid2, questionCovidObservation2,
            questionCovid3, questionCovidObservation3,
            questionCovid4, questionCovidObservation4,
            questionCovid5, questionCovidObservation5,
            questionCovid6, questionCovidObservation6,
            questionCovid7, questionCovidObservation7,
            questionCovid8, questionCovidObservation8,
            questionCovid9, questionCovidObservation9,
        }

        const dataCommunicationQuestions = {
            communicationQuestion1, communicationQuestionObservation1,
            communicationQuestion2, communicationQuestionObservation2,
            communicationQuestion3, communicationQuestionObservation3,
            communicationQuestion4, communicationQuestionObservation4,
            communicationQuestion5, communicationQuestionObservation5,
        }

        const dataCultureQuestions = {
            cultureQuestion1, cultureQuestionObservation1,
            cultureQuestion2, cultureQuestionObservation2,
            cultureQuestion3, cultureQuestionObservation3,
            cultureQuestion4, cultureQuestionObservation4,
        }

        const dataEngagementQuestions = {
            engagementQuestion1, engagementQuestionObservation1,
            engagementQuestion2, engagementQuestionObservation2,
            engagementQuestion3, engagementQuestionObservation3,
            engagementQuestion4, engagementQuestionObservation4,
        }

        const dataCustomerExQuestions = {
            customerExQuestion1, customerExQuestionObservation1,
            customerExQuestion2, customerExQuestionObservation2,
            customerExQuestion3, customerExQuestionObservation3,
            customerExQuestion4, customerExQuestionObservation4,
            customerExQuestion5, customerExQuestionObservation5,
            customerExQuestion6, customerExQuestionObservation6,
            customerExQuestion7, customerExQuestionObservation7,
            customerExQuestion8, customerExQuestionObservation8,
            customerExQuestion9, customerExQuestionObservation9,
            customerExQuestion10, customerExQuestionObservation10,
            customerExQuestion11, customerExQuestionObservation11,
            customerExQuestion12, customerExQuestionObservation12,
        }

        const dataFrameQuestions = {
            frameQuestion1, frameQuestionObservation1,
            frameQuestion2, frameQuestionObservation2,
            frameQuestion3, frameQuestionObservation3,
            frameQuestion4, frameQuestionObservation4,
        }

        const dataWorkSafetyQuestions = {
            workSafetyQuestion1, workSafetyQuestionObservation1,
            workSafetyQuestion2, workSafetyQuestionObservation2,
            workSafetyQuestion3, workSafetyQuestionObservation3,
            workSafetyQuestion4, workSafetyQuestionObservation4,
            workSafetyQuestion5, workSafetyQuestionObservation5,
            workSafetyQuestion6, workSafetyQuestionObservation6,
            workSafetyQuestion7, workSafetyQuestionObservation7,
            workSafetyQuestion8, workSafetyQuestionObservation8,
            workSafetyQuestion9, workSafetyQuestionObservation9,
            workSafetyQuestion10, workSafetyQuestionObservation10,
        }

        const dataRoutinesPmBmQuestions = {
            routinesPmBmQuestion1, routinesPmBmQuestionObservation1,
            routinesPmBmQuestion2, routinesPmBmQuestionObservation2,
            routinesPmBmQuestion3, routinesPmBmQuestionObservation3,
            routinesPmBmQuestion4, routinesPmBmQuestionObservation4,
            routinesPmBmQuestion5, routinesPmBmQuestionObservation5,
            routinesPmBmQuestion6, routinesPmBmQuestionObservation6,
            routinesPmBmQuestion7, routinesPmBmQuestionObservation7,
            routinesPmBmQuestion8, routinesPmBmQuestionObservation8,
            routinesPmBmQuestion9, routinesPmBmQuestionObservation9,
            routinesPmBmQuestion10, routinesPmBmQuestionObservation10,
            routinesPmBmQuestion11, routinesPmBmQuestionObservation11,
        }

        try {
            await api.post('storeInfo', dataStoreInfo, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('questionsCovid', dataQuestionCovid, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('communicationQuestions', dataCommunicationQuestions, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('cultureQuestions', dataCultureQuestions, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('engagementQuestions', dataEngagementQuestions, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('customerExQuestions', dataCustomerExQuestions, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('frameQuestions', dataFrameQuestions, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('workSafetyQuestions', dataWorkSafetyQuestions, {
                headers: {
                    authorization: token,
                }
            });
            await api.post('routinesPmBmQuestions', dataRoutinesPmBmQuestions, {
                headers: {
                    authorization: token,
                }
            });
            history.push('/Panel')

            const styleChecklistCreated = document.getElementById('checklistCreated').style
            setTimeout(() => {
                styleChecklistCreated.opacity = "100%"
            }, 0)
            setTimeout(() => {
                styleChecklistCreated.opacity = "0%"
            }, 5000)
        } catch (err) {
            alert("Erro ao criar conexão com o banco de dados.")
        }
    }

    return (
        <>
            <Header title="Checklist" />
            <div className="info">
                <h2>Novo Checklist</h2>
                <Link to="/Panel" className="button"> Voltar </Link>
            </div>
            <main>
                <form onSubmit={handleNewChecklist}>
                    <div className="selects">
                        <div className="select-wrapper">
                            <select
                                name="selectBkn"
                                required
                                value={bknumber}
                                onChange={e => setBknumber(e.target.value)}
                            >
                                <option value="" disabled >Bk Number</option>
                                <option value={19869}>19869</option>
                                <option value={85454}>85454</option>
                                <option value={54566}>54566</option>
                                <option value={65464}>65464</option>
                                <option value={65454}>65454</option>
                            </select>
                        </div>

                        <div className="select-wrapper">
                            <input
                                type="text"
                                disabled
                                defaultValue={`Date: ${date}`}
                            />
                        </div>
                        <div className="select-wrapper">
                            <select
                                name="selectStore"
                                required
                                value={store}
                                onChange={e => setStore(e.target.value)}
                            >
                                <option value="" disabled>Loja</option>
                                <option value="Shop. Metrô Santa Cruz">Shop. Metrô Santa Cruz</option>
                                <option value="Vila Mariana">Vila Mariana</option>
                                <option value="Shop. Patio Paulista">Shop. Patio Paulista</option>
                                <option value="Drive Ricardo Jafet">Drive Ricardo Jafet</option>
                                <option value="Extra Ricardo Jafet">Extra Ricardo Jafet</option>
                            </select>
                        </div>
                    </div>

                    <section>
                        <h3>Covid-19</h3>
                        <FieldForNewChecklist
                            fieldType="text"
                            label="O restaurante está fazendo a aferição de temperatura e perguntas de todos os visitantes que entram no restaurante?"
                        // onChangeInput={e => setQuestionCovid1(e.target.value)}
                        // onChangeInputValue={questionCovid1}
                        // valueTextarea={questionCovidObservation1}
                        // onChangeTextarea={e => setQuestionCovidObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O caderno de temperatura e perguntas está devidamente preenchido? (Verificar últimos 5 dias)"
                            onChangeInput={e => setQuestionCovid2(e.target.value)}
                            onChangeInputValue={questionCovid2}
                            valueTextarea={questionCovidObservation2}
                            onChangeTextarea={e => setQuestionCovidObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O gerente sabe calibrar o termometro? (Body/Surface)"
                            onChangeInput={e => setQuestionCovid3(e.target.value)}
                            onChangeInputValue={questionCovid3}
                            valueTextarea={questionCovidObservation3}
                            onChangeTextarea={e => setQuestionCovidObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Todos os colaboradores da escala, aparecem no caderno?"
                            onChangeInput={e => setQuestionCovid4(e.target.value)}
                            onChangeInputValue={questionCovid4}
                            valueTextarea={questionCovidObservation4}
                            onChangeTextarea={e => setQuestionCovidObservation4(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os colaboradores estão lavando as mãos a cada 30 minutos?"
                            onChangeInput={e => setQuestionCovid5(e.target.value)}
                            onChangeInputValue={questionCovid5}
                            valueTextarea={questionCovidObservation5}
                            onChangeTextarea={e => setQuestionCovidObservation5(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="As máscaras estão sendo trocadas a cada 2 horas?"
                            onChangeInput={e => setQuestionCovid6(e.target.value)}
                            onChangeInputValue={questionCovid6}
                            valueTextarea={questionCovidObservation6}
                            onChangeTextarea={e => setQuestionCovidObservation6(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="As mascaras estão sendo utilizadas corretamente?"
                            onChangeInput={e => setQuestionCovid7(e.target.value)}
                            onChangeInputValue={questionCovid7}
                            valueTextarea={questionCovidObservation7}
                            onChangeTextarea={e => setQuestionCovidObservation7(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Fazer algum questionamento sobre o transporte publico ou cuidados em casa?"
                            onChangeInput={e => setQuestionCovid8(e.target.value)}
                            onChangeInputValue={questionCovid8}
                            valueTextarea={questionCovidObservation8}
                            onChangeTextarea={e => setQuestionCovidObservation8(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Você recebeu a quantidade necessária de máscaras para trocar a cada 2 horas no turno? (10/12 máscaras)"
                            onChangeInput={e => setQuestionCovid9(e.target.value)}
                            onChangeInputValue={questionCovid9}
                            valueTextarea={questionCovidObservation9}
                            onChangeTextarea={e => setQuestionCovidObservation9(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Comunicação</h3>

                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O mundo BK está atualizado conforme o último comunica?"
                            onChangeInput={e => setCommunicationQuestion1(e.target.value)}
                            onChangeInputValue={communicationQuestion1}
                            valueTextarea={communicationQuestionObservation1}
                            onChangeTextarea={e => setCommunicationQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O colaborador entende os itens que compõe o mundo Bk?"
                            onChangeInput={e => setCommunicationQuestion2(e.target.value)}
                            onChangeInputValue={communicationQuestion2}
                            valueTextarea={communicationQuestionObservation2}
                            onChangeTextarea={e => setCommunicationQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Todos os itens do king board estão preenchidos e atualizados?"
                            onChangeInput={e => setCommunicationQuestion3(e.target.value)}
                            onChangeInputValue={communicationQuestion3}
                            valueTextarea={communicationQuestionObservation3}
                            onChangeTextarea={e => setCommunicationQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O colaborador entende os itens que compõe o King Board?"
                            onChangeInput={e => setCommunicationQuestion4(e.target.value)}
                            onChangeInputValue={communicationQuestion4}
                            valueTextarea={communicationQuestionObservation4}
                            onChangeTextarea={e => setCommunicationQuestionObservation4(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="No quadro do King Board o Comunica, R.E.V e Guia de treinamento estão atualizados?"
                            onChangeInput={e => setCommunicationQuestion5(e.target.value)}
                            onChangeInputValue={communicationQuestion5}
                            valueTextarea={communicationQuestionObservation5}
                            onChangeTextarea={e => setCommunicationQuestionObservation5(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Cultura</h3>

                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O restaurante tem o quadro de cultura?"
                            onChangeInput={e => setCultureQuestion1(e.target.value)}
                            onChangeInputValue={cultureQuestion1}
                            valueTextarea={cultureQuestionObservation1}
                            onChangeTextarea={e => setCultureQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O colaborador entende os itens que compõe a nossa cultura? Ele soube explicar?"
                            onChangeInput={e => setCultureQuestion2(e.target.value)}
                            onChangeInputValue={cultureQuestion2}
                            valueTextarea={cultureQuestionObservation2}
                            onChangeTextarea={e => setCultureQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O colaborador conhece a trilha de carreira? (Sugerir o quadro da trilha exposto e colado)"
                            onChangeInput={e => setCultureQuestion3(e.target.value)}
                            onChangeInputValue={cultureQuestion3}
                            valueTextarea={cultureQuestionObservation3}
                            onChangeTextarea={e => setCultureQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O gerente ou Sup. G&G sabe acessar o Mini Flipchart no Meu BK?"
                            onChangeInput={e => setCultureQuestion4(e.target.value)}
                            onChangeInputValue={cultureQuestion4}
                            valueTextarea={cultureQuestionObservation4}
                            onChangeTextarea={e => setCultureQuestionObservation4(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Engajamento</h3>

                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O gerente sabe e entende o engajamento do restaurante?"
                            onChangeInput={e => setEngagementQuestion1(e.target.value)}
                            onChangeInputValue={engagementQuestion1}
                            valueTextarea={engagementQuestionObservation1}
                            onChangeTextarea={e => setEngagementQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Quais ações de engajamento o gerente fez no mês?"
                            onChangeInput={e => setEngagementQuestion2(e.target.value)}
                            onChangeInputValue={engagementQuestion2}
                            valueTextarea={engagementQuestionObservation2}
                            onChangeTextarea={e => setEngagementQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Quem é o seu superior imediato?"
                            onChangeInput={e => setEngagementQuestion3(e.target.value)}
                            onChangeInputValue={engagementQuestion3}
                            valueTextarea={engagementQuestionObservation3}
                            onChangeTextarea={e => setEngagementQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Quem faz parte da Liderança Sênior do BK?"
                            onChangeInput={e => setEngagementQuestion4(e.target.value)}
                            onChangeInputValue={engagementQuestion4}
                            valueTextarea={engagementQuestionObservation4}
                            onChangeTextarea={e => setEngagementQuestionObservation4(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Experiência do cliente</h3>

                        <FieldForNewChecklist
                            fieldType="icons"
                            label="A loja está limpa? (área utilizadas por clientes)"
                            onChangeInput={e => setCustomerExQuestion1(e.target.value)}
                            onChangeInputValue={customerExQuestion1}
                            valueTextarea={customerExQuestionObservation1}
                            onChangeTextarea={e => setCustomerExQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os uniformes estão adequados (limpo e camisas para dentro) e em bom estado de conservação?"
                            onChangeInput={e => setCustomerExQuestion2(e.target.value)}
                            onChangeInputValue={customerExQuestion2}
                            valueTextarea={customerExQuestionObservation2}
                            onChangeTextarea={e => setCustomerExQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Todos utilizam crachás?"
                            onChangeInput={e => setCustomerExQuestion3(e.target.value)}
                            onChangeInputValue={customerExQuestion3}
                            valueTextarea={customerExQuestionObservation3}
                            onChangeTextarea={e => setCustomerExQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O supervisor de vendas está alocado corretamente (no caixa ou na filas)?"
                            onChangeInput={e => setCustomerExQuestion4(e.target.value)}
                            onChangeInputValue={customerExQuestion4}
                            valueTextarea={customerExQuestionObservation4}
                            onChangeTextarea={e => setCustomerExQuestionObservation4(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="A placa do Guest Trac está disponível no balcão?"
                            onChangeInput={e => setCustomerExQuestion5(e.target.value)}
                            onChangeInputValue={customerExQuestion5}
                            valueTextarea={customerExQuestionObservation5}
                            onChangeTextarea={e => setCustomerExQuestionObservation5(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Se loja drive, o adesivo de Guest está colado na janela?"
                            onChangeInput={e => setCustomerExQuestion6(e.target.value)}
                            onChangeInputValue={customerExQuestion6}
                            valueTextarea={customerExQuestionObservation6}
                            onChangeTextarea={e => setCustomerExQuestionObservation6(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Se a loja possui porta guardanapo, o adesivo de guest está colado nele?"
                            onChangeInput={e => setCustomerExQuestion7(e.target.value)}
                            onChangeInputValue={customerExQuestion7}
                            valueTextarea={customerExQuestionObservation7}
                            onChangeTextarea={e => setCustomerExQuestionObservation7(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Foi observado uso de 'por favor' e 'obrigado' com o cliente?"
                            onChangeInput={e => setCustomerExQuestion8(e.target.value)}
                            onChangeInputValue={customerExQuestion8}
                            valueTextarea={customerExQuestionObservation8}
                            onChangeTextarea={e => setCustomerExQuestionObservation8(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os membros da equipe cumprimentaram de forma breve e cortês?"
                            onChangeInput={e => setCustomerExQuestion9(e.target.value)}
                            onChangeInputValue={customerExQuestion9}
                            valueTextarea={customerExQuestionObservation9}
                            onChangeTextarea={e => setCustomerExQuestionObservation9(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os membros da equipe sorriem e mantem contato visual com o cliente?"
                            onChangeInput={e => setCustomerExQuestion10(e.target.value)}
                            onChangeInputValue={customerExQuestion10}
                            valueTextarea={customerExQuestionObservation10}
                            onChangeTextarea={e => setCustomerExQuestionObservation10(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Durante sua visita, você observou alguma insatisfação do cliente?"
                            onChangeInput={e => setCustomerExQuestion11(e.target.value)}
                            onChangeInputValue={customerExQuestion11}
                            valueTextarea={customerExQuestionObservation11}
                            onChangeTextarea={e => setCustomerExQuestionObservation11(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os colaboradores da loja sabem informar as reclamações e elogios que a loja apresentou na pesquisa de satisfação de Clientes? Foi falado na reunião de posicionamento?"
                            onChangeInput={e => setCustomerExQuestion12(e.target.value)}
                            onChangeInputValue={customerExQuestion12}
                            valueTextarea={customerExQuestionObservation12}
                            onChangeTextarea={e => setCustomerExQuestionObservation12(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Quadro</h3>
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Há divergencia na folha de ativos? Comente"
                            onChangeInput={e => setFrameQuestion1(e.target.value)}
                            onChangeInputValue={frameQuestion1}
                            valueTextarea={frameQuestionObservation1}
                            onChangeTextarea={e => setFrameQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O quadro do restaurante está completo? Comente"
                            onChangeInput={e => setFrameQuestion2(e.target.value)}
                            onChangeInputValue={frameQuestion2}
                            valueTextarea={frameQuestionObservation2}
                            onChangeTextarea={e => setFrameQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="A loja possui PCDs conforme cota e desdobramento da regional?"
                            onChangeInput={e => setFrameQuestion3(e.target.value)}
                            onChangeInputValue={frameQuestion3}
                            valueTextarea={frameQuestionObservation3}
                            onChangeTextarea={e => setFrameQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="A loja possui jovens aprendizes conforme meta do painel de Gente?"
                            onChangeInput={e => setFrameQuestion4(e.target.value)}
                            onChangeInputValue={frameQuestion4}
                            valueTextarea={frameQuestionObservation4}
                            onChangeTextarea={e => setFrameQuestionObservation4(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Segurança do Trabalho</h3>
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os acidentes de trabalho estão sendo informados imediatamente?"
                            onChangeInput={e => setWorkSafetyQuestion1(e.target.value)}
                            onChangeInputValue={workSafetyQuestion1}
                            valueTextarea={workSafetyQuestionObservation1}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os afastamentos estão sendo inseridos imediatamente?"
                            onChangeInput={e => setWorkSafetyQuestion2(e.target.value)}
                            onChangeInputValue={workSafetyQuestion2}
                            valueTextarea={workSafetyQuestionObservation2}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="O término dos afastamentos está sendo acompanhado?"
                            onChangeInput={e => setWorkSafetyQuestion3(e.target.value)}
                            onChangeInputValue={workSafetyQuestion3}
                            valueTextarea={workSafetyQuestionObservation3}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="É realizado corretamente o processo de retorno ao trabalho (ASO de retorno)?"
                            onChangeInput={e => setWorkSafetyQuestion4(e.target.value)}
                            onChangeInputValue={workSafetyQuestion4}
                            valueTextarea={workSafetyQuestionObservation4}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation4(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os ASOs estão sendo realizados antes do vencimento? Estão impressos e arquivados?"
                            onChangeInput={e => setWorkSafetyQuestion5(e.target.value)}
                            onChangeInputValue={workSafetyQuestion5}
                            valueTextarea={workSafetyQuestionObservation5}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation5(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os colaboradores estão realizando os treinamentos de SESMT?"
                            onChangeInput={e => setWorkSafetyQuestion6(e.target.value)}
                            onChangeInputValue={workSafetyQuestion6}
                            valueTextarea={workSafetyQuestionObservation6}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation6(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os documentos PPRA e PCMSO atualizados estão impressos e disponíveis na loja?"
                            onChangeInput={e => setWorkSafetyQuestion7(e.target.value)}
                            onChangeInputValue={workSafetyQuestion7}
                            valueTextarea={workSafetyQuestionObservation7}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation7(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Todos os colaboradores possuem ordem de serviço? (1)A ordem de serviço está em anexo no documento PPRA. A OS deve ser impressa e entregue para cada colaborador, ele deve assinar e devolver para o Supervisor G&G, que deverá deixar arquivado)"
                            onChangeInput={e => setWorkSafetyQuestion8(e.target.value)}
                            onChangeInputValue={workSafetyQuestion8}
                            valueTextarea={workSafetyQuestionObservation8}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation8(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Os cipeiros estão com a documentação atualizada? (2)CIPA: deverão ser arquivados os certificados de conclusão do curso, que são enviados pela MAG quando os 4 colaboradores finalizam os treinamentos)"
                            onChangeInput={e => setWorkSafetyQuestion9(e.target.value)}
                            onChangeInputValue={workSafetyQuestion9}
                            valueTextarea={workSafetyQuestionObservation9}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation9(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Está sendo realizado o preenchimento da ficha de registro de entrega de EPIs para os colaboradores? (3)EPI: o modelo da ficha de EPI consta em anexo no PPRA. O SUperv G&G deverá imprimir uma ficha por colaborador e preencher cada vez que é entregue um EPI. Deixar a ficha arquivada para fins de fiscalização.)"
                            onChangeInput={e => setWorkSafetyQuestion10(e.target.value)}
                            onChangeInputValue={workSafetyQuestion10}
                            valueTextarea={workSafetyQuestionObservation10}
                            onChangeTextarea={e => setWorkSafetyQuestionObservation10(e.target.value)}
                        />
                    </section>
                    <section>
                        <h3>Rotinas de Gente & Gestão / Gerente de Negocio</h3>
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Há cadernos diarios na loja, como: Desperdicios, check list, controle de cofre?"
                            onChangeInput={e => setRoutinesPmBmQuestion1(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion1}
                            valueTextarea={routinesPmBmQuestionObservation1}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation1(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Colaboradores esta ultrapassando + 2 horas na loja? Se sim, quantos?"
                            onChangeInput={e => setRoutinesPmBmQuestion2(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion2}
                            valueTextarea={routinesPmBmQuestionObservation2}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation2(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Colaboradores está realizando suas 11 horas de descanso ? Se não, quantos?"
                            onChangeInput={e => setRoutinesPmBmQuestion3(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion3}
                            valueTextarea={routinesPmBmQuestionObservation3}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation3(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Existe pastas de caixa pequeno, R.E.V , Auditoria na loja atualizadas? Se não, quais?"
                            onChangeInput={e => setRoutinesPmBmQuestion4(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion4}
                            valueTextarea={routinesPmBmQuestionObservation4}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation4(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Há alguma divergencia em vale transporte de colaboradores?"
                            onChangeInput={e => setRoutinesPmBmQuestion5(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion5}
                            valueTextarea={routinesPmBmQuestionObservation5}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation5(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Gerente de negocio está realizando a REUNIAO MENSAL (dia T) com o seu time?"
                            onChangeInput={e => setRoutinesPmBmQuestion6(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion6}
                            valueTextarea={routinesPmBmQuestionObservation6}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation6(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Gerente de negocio está realizando a CULTURA BK ate o dia 20 com o seu time?"
                            onChangeInput={e => setRoutinesPmBmQuestion7(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion7}
                            valueTextarea={routinesPmBmQuestionObservation7}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation7(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Destaque do mês esta sendo realizado ate o dia 30"
                            onChangeInput={e => setRoutinesPmBmQuestion8(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion8}
                            valueTextarea={routinesPmBmQuestionObservation8}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation8(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Há justificativas de quebra de caixa, pac no financeiro"
                            onChangeInput={e => setRoutinesPmBmQuestion9(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion9}
                            valueTextarea={routinesPmBmQuestionObservation9}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation9(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Gerencia esta limpa e organizada?"
                            onChangeInput={e => setRoutinesPmBmQuestion10(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion10}
                            valueTextarea={routinesPmBmQuestionObservation10}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation10(e.target.value)}
                        />
                        <FieldForNewChecklist
                            fieldType="icons"
                            label="Há caderno de ACONSELHAMENTO na loja?"
                            onChangeInput={e => setRoutinesPmBmQuestion11(e.target.value)}
                            onChangeInputValue={routinesPmBmQuestion11}
                            valueTextarea={routinesPmBmQuestionObservation11}
                            onChangeTextarea={e => setRoutinesPmBmQuestionObservation11(e.target.value)}
                        />
                    </section>
                    <button type="submit">Concluir</button>
                </form>
            </main>
        </>
    );
}