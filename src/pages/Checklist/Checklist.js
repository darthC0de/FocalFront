import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import FieldForChecklist from '../components/FieldForChecklist/create';
import ChecklistPDF from '../ChecklistPDF/ChecklistPDF'
import { FaFilePdf } from 'react-icons/fa'
import {  PDFDownloadLink } from '@react-pdf/renderer';

// import Covid from '../components/Covid/Covid';
import api from '../../services/api';
// import ChecklistPDF from '../ChecklistPDF/ChecklistPDF'

import './styles.css'

export default function Checklist() {
    const id_user = localStorage.getItem('id_user');
    const uniqueId = localStorage.getItem('infoId');

    const [storeInfo, setStoreInfo] = useState([]);
    const [questions_covid, setQuestions_covid] = useState([]);
    const [communicationQuestions, setCommunicationQuestions] = useState([]);
    const [cultureQuestion, setCultureQuestions] = useState([]);
    const [engagementQuestions, setEngagementQuestions] = useState([]);
    const [customerExQuestions, setCustomerExQuestions] = useState([]);
    const [frameQuestions, setFrameQuestions] = useState([]);
    const [workSafetyQuestions, setWorkSafetyQuestions] = useState([]);
    const [routinesPmBmQuestions, setRoutinesPmBmQuestions] = useState([]);

    useEffect(() => {
        api.get('panel', {
            headers: { authorization: id_user }
        }).then(response => {
            const storeId = id => id.id === uniqueId
            setStoreInfo(response.data.filter(storeId))
        })
        api.get('questionsCovid', {
            headers: { authorization: id_user }
        }).then(response => {
            const covidId = id => id.id === uniqueId
            setQuestions_covid(response.data.filter(covidId))
        })
        api.get('communicationQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const communicationId = id => id.id === uniqueId
            setCommunicationQuestions(response.data.filter(communicationId))
        })
        api.get('cultureQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const cultureId = id => id.id === uniqueId
            setCultureQuestions(response.data.filter(cultureId))
        })
        api.get('engagementQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const engagementId = id => id.id === uniqueId
            setEngagementQuestions(response.data.filter(engagementId))
        })
        api.get('customerExQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const customerExId = id => id.id === uniqueId
            setCustomerExQuestions(response.data.filter(customerExId))
        })
        api.get('frameQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const frameId = id => id.id === uniqueId
            setFrameQuestions(response.data.filter(frameId))
        })
        api.get('workSafetyQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const workSafetyId = id => id.id === uniqueId
            setWorkSafetyQuestions(response.data.filter(workSafetyId))
        })
        api.get('routinesPmBmQuestions', {
            headers: { authorization: id_user }
        }).then(response => {
            const routinesPmBmId = id => id.id === uniqueId
            setRoutinesPmBmQuestions(response.data.filter(routinesPmBmId))
        })
    }, [id_user,uniqueId]);

    // console.log(uniqueId)
    console.log(communicationQuestions)

    return (
        <>
            <Header title="Checklist" />
            <div className="info">
                {storeInfo.map(info => (
                    <span> Loja: { info.store} | Data: { info.date} ??s { info.hours_min}</span>
                ))}
                <div className="button-group">
                    {/* <Link to="/ChecklistPDF" className="button pdf">PDF <FaFilePdf className="icon-pdf" /> */}
                    <PDFDownloadLink
                        className="button pdf"
                        document={<ChecklistPDF
                            storeInfo={storeInfo}
                            dataCovid={questions_covid}
                            dataCommunication={communicationQuestions}
                            dataCulture={cultureQuestion}
                            dataEngagement={engagementQuestions}
                            dataCustomerEx={customerExQuestions}
                            dataFrame={frameQuestions}
                            dataWorkSafety={workSafetyQuestions}
                            dataRoutinesPmBm={routinesPmBmQuestions}
                        />}
                        fileName="checklist.pdf"
                    >
                        PDF <FaFilePdf className="icon-pdf" />
                        {/* {({ blob, url, loading, error }) =>
                                loading ? "Loading document..." : "Download Pdf"
                            } */}
                    </PDFDownloadLink>
                    {/* </Link> */}
                    <Link to="/Panel" className="button">Voltar</Link>
                </div>
            </div>

            <main>
                {/* <Covid /> */}
                {questions_covid.map(question => (
                    <section key={question.id}>
                        <h3> Covid-19 </h3>
                        <FieldForChecklist
                            label="O restaurante est?? fazendo a aferi????o de temperatura e perguntas de todos os visitantes que entram no restaurante?"
                            answers={question.questionCovid1}
                            observation={question.questionCovidObservation1}
                        />
                        <FieldForChecklist
                            label="O caderno de temperatura e perguntas est?? devidamente preenchido? (Verificar ??ltimos 5 dias)"
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
                            label="Os colaboradores est??o lavando as m??os a cada 30 minutos?"
                            answers={question.questionCovid5}
                            observation={question.questionCovidObservation5}
                        />
                        <FieldForChecklist
                            label="As m??scaras est??o sendo trocadas a cada 2 horas?"
                            answers={question.questionCovid6}
                            observation={question.questionCovidObservation6}
                        />
                        <FieldForChecklist
                            label="As mascaras est??o sendo utilizadas corretamente?"
                            answers={question.questionCovid7}
                            observation={question.questionCovidObservation7}
                        />
                        <FieldForChecklist
                            label="Fazer algum questionamento sobre o transporte publico ou cuidados em casa?"
                            answers={question.questionCovid8}
                            observation={question.questionCovidObservation8}
                        />
                        <FieldForChecklist
                            label="Voc?? recebeu a quantidade necess??ria de m??scaras para trocar a cada 2 horas no turno? (10/12 m??scaras)"
                            answers={question.questionCovid9}
                            observation={question.questionCovidObservation9}
                        />
                    </section>
                ))}

                {communicationQuestions.map(question => (
                    <section key={question.id}>
                        <h3> Comunica????o </h3>

                        <FieldForChecklist
                            label="O mundo BK est?? atualizado conforme o ??ltimo comunica?"
                            answers={question.communicationQuestion1}
                            observation={question.communicationQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="O colaborador entende os itens que comp??e o mundo Bk?"
                            answers={question.communicationQuestion2}
                            observation={question.communicationQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="Todos os itens do king board est??o preenchidos e atualizados?"
                            answers={question.communicationQuestion3}
                            observation={question.communicationQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="O colaborador entende os itens que comp??e o King Board?"
                            answers={question.communicationQuestion4}
                            observation={question.communicationQuestionObservation4}
                        />
                        <FieldForChecklist
                            label="No quadro do King Board o Comunica, R.E.V e Guia de treinamento est??o atualizados?"
                            answers={question.communicationQuestion5}
                            observation={question.communicationQuestionObservation5}
                        />
                    </section>
                ))}

                {cultureQuestion.map(answers => (
                    <section key={answers.id}>
                        <h3> Cultura </h3>

                        <FieldForChecklist
                            label="O restaurante tem o quadro de cultura?"
                            answers={answers.cultureQuestion1}
                            observation={answers.cultureQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="O colaborador entende os itens que comp??e a nossa cultura? Ele soube explicar?"
                            answers={answers.cultureQuestion2}
                            observation={answers.cultureQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="O colaborador conhece a trilha de carreira? (Sugerir o quadro da trilha exposto e colado)"
                            answers={answers.cultureQuestion3}
                            observation={answers.cultureQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="O gerente ou Sup. G&G sabe acessar o Mini Flipchart no Meu BK?"
                            answers={answers.cultureQuestion4}
                            observation={answers.cultureQuestionObservation4}
                        />
                    </section>
                ))}

                {engagementQuestions.map(answers => (
                    <section key={answers.id}>
                        <h3> Engajamento </h3>

                        <FieldForChecklist
                            label="O gerente sabe e entende o engajamento do restaurante?"
                            answers={answers.engagementQuestion1}
                            observation={answers.engagementQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="Quais a????es de engajamento o gerente fez no m??s?"
                            answers={answers.engagementQuestion2}
                            observation={answers.engagementQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="Quem ?? o seu superior imediato?"
                            answers={answers.engagementQuestion3}
                            observation={answers.engagementQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="Quem faz parte da Lideran??a S??nior do BK?"
                            answers={answers.engagementQuestion4}
                            observation={answers.engagementQuestionObservation4}
                        />
                    </section>
                ))}

                {customerExQuestions.map(answers => (
                    <section key={answers.id}>
                        <h3> Experi??ncia do Cliente </h3>

                        <FieldForChecklist
                            label="A loja est?? limpa? (??rea utilizadas por clientes)"
                            answers={answers.customerExQuestion1}
                            observation={answers.customerExQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="Os uniformes est??o adequados (limpo e camisas para dentro) e em bom estado de conserva????o?"
                            answers={answers.customerExQuestion2}
                            observation={answers.customerExQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="Todos utilizam crach??s?"
                            answers={answers.customerExQuestion3}
                            observation={answers.customerExQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="O supervisor de vendas est?? alocado corretamente (no caixa ou na filas)?"
                            answers={answers.customerExQuestion4}
                            observation={answers.customerExQuestionObservation4}
                        />
                        <FieldForChecklist
                            label="A placa do Guest Trac est?? dispon??vel no balc??o?"
                            answers={answers.customerExQuestion5}
                            observation={answers.customerExQuestionObservation5}
                        />
                        <FieldForChecklist
                            label="Se loja drive, o adesivo de Guest est?? colado na janela?"
                            answers={answers.customerExQuestion6}
                            observation={answers.customerExQuestionObservation6}
                        />
                        <FieldForChecklist
                            label="Se a loja possui porta guardanapo, o adesivo de guest est?? colado nele?"
                            answers={answers.customerExQuestion7}
                            observation={answers.customerExQuestionObservation7}
                        />
                        <FieldForChecklist
                            label="Foi observado uso de 'por favor' e 'obrigado' com o cliente?"
                            answers={answers.customerExQuestion8}
                            observation={answers.customerExQuestionObservation8}
                        />
                        <FieldForChecklist
                            label="Os membros da equipe cumprimentaram de forma breve e cort??s?"
                            answers={answers.customerExQuestion9}
                            observation={answers.customerExQuestionObservation9}
                        />
                        <FieldForChecklist
                            label="Os membros da equipe sorriem e mantem contato visual com o cliente?"
                            answers={answers.customerExQuestion10}
                            observation={answers.customerExQuestionObservation10}
                        />
                        <FieldForChecklist
                            label="Durante sua visita, voc?? observou alguma insatisfa????o do cliente?"
                            answers={answers.customerExQuestion11}
                            observation={answers.customerExQuestionObservation11}
                        />
                        <FieldForChecklist
                            label="Os colaboradores da loja sabem informar as reclama????es e elogios que a loja apresentou na pesquisa de satisfa????o de Clientes? Foi falado na reuni??o de posicionamento?"
                            answers={answers.customerExQuestion12}
                            observation={answers.customerExQuestionObservation12}
                        />
                    </section>
                ))}

                {frameQuestions.map(answers => (
                    <section key={answers.id}>
                        <h3> Quadro </h3>

                        <FieldForChecklist
                            label="H?? diverg??ncia na folha de ativos? Comente"
                            answers={answers.frameQuestion1}
                            observation={answers.frameQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="O quadro do restaurante est?? completo? Comente"
                            answers={answers.frameQuestion2}
                            observation={answers.frameQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="A loja possui PCDs conforme cota e desdobramento da regional?"
                            answers={answers.frameQuestion3}
                            observation={answers.frameQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="A loja possui jovens aprendizes conforme meta do painel de Gente?"
                            answers={answers.frameQuestion4}
                            observation={answers.frameQuestionObservation4}
                        />
                    </section>
                ))}

                {workSafetyQuestions.map(answers => (
                    <section key={answers.id}>
                        <h3> Seguran??a do Trabalho </h3>

                        <FieldForChecklist
                            label="Os acidentes de trabalho est??o sendo informados imediatamente?"
                            answers={answers.workSafetyQuestion1}
                            observation={answers.workSafetyQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="Os afastamentos est??o sendo inseridos imediatamente?"
                            answers={answers.workSafetyQuestion2}
                            observation={answers.workSafetyQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="O t??rmino dos afastamentos est?? sendo acompanhado?"
                            answers={answers.workSafetyQuestion3}
                            observation={answers.workSafetyQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="?? realizado corretamente o processo de retorno ao trabalho (ASO de retorno)?"
                            answers={answers.workSafetyQuestion4}
                            observation={answers.workSafetyQuestionObservation4}
                        />
                        <FieldForChecklist
                            label="Os ASOs est??o sendo realizados antes do vencimento? Est??o impressos e arquivados?"
                            answers={answers.workSafetyQuestion5}
                            observation={answers.workSafetyQuestionObservation5}
                        />
                        <FieldForChecklist
                            label="Os colaboradores est??o realizando os treinamentos de SESMT?"
                            answers={answers.workSafetyQuestion6}
                            observation={answers.workSafetyQuestionObservation6}
                        />
                        <FieldForChecklist
                            label="Os documentos PPRA e PCMSO atualizados est??o impressos e dispon??veis na loja?"
                            answers={answers.workSafetyQuestion7}
                            observation={answers.workSafetyQuestionObservation7}
                        />
                        <FieldForChecklist
                            label="Todos os colaboradores possuem ordem de servi??o? (1)A ordem de servi??o est?? em anexo no documento PPRA. A OS deve ser impressa e entregue para cada colaborador, ele deve assinar e devolver para o Supervisor G&G, que dever?? deixar arquivado)"
                            answers={answers.workSafetyQuestion8}
                            observation={answers.workSafetyQuestionObservation8}
                        />
                        <FieldForChecklist
                            label="Os cipeiros est??o com a documenta????o atualizada? (2)CIPA: dever??o ser arquivados os certificados de conclus??o do curso, que s??o enviados pela MAG quando os 4 colaboradores finalizam os treinamentos)"
                            answers={answers.workSafetyQuestion9}
                            observation={answers.workSafetyQuestionObservation9}
                        />
                        <FieldForChecklist
                            label="Est?? sendo realizado o preenchimento da ficha de registro de entrega de EPIs para os colaboradores? (3)EPI: o modelo da ficha de EPI consta em anexo no PPRA. O SUperv G&G dever?? imprimir uma ficha por colaborador e preencher cada vez que ?? entregue um EPI. Deixar a ficha arquivada para fins de fiscaliza????o.)"
                            answers={answers.workSafetyQuestion10}
                            observation={answers.workSafetyQuestionObservation10}
                        />
                    </section>
                ))}

                {routinesPmBmQuestions.map(answers => (
                    <section key={answers.id}>
                        <h3> Rotinas de Gente & Gest??o / Gerente de Negocio </h3>

                        <FieldForChecklist
                            label="H?? cadernos diarios na loja, como: Desperdicios, check list, controle de cofre?"
                            answers={answers.routinesPmBmQuestion1}
                            observation={answers.routinesPmBmQuestionObservation1}
                        />
                        <FieldForChecklist
                            label="Colaboradores esta ultrapassando + 2 horas na loja? Se sim, quantos?"
                            answers={answers.routinesPmBmQuestion2}
                            observation={answers.routinesPmBmQuestionObservation2}
                        />
                        <FieldForChecklist
                            label="Colaboradores est?? realizando suas 11 horas de descanso ? Se n??o, quantos?"
                            answers={answers.routinesPmBmQuestion3}
                            observation={answers.routinesPmBmQuestionObservation3}
                        />
                        <FieldForChecklist
                            label="Existe pastas de caixa pequeno, R.E.V , Auditoria na loja atualizadas? Se n??o, quais?"
                            answers={answers.routinesPmBmQuestion4}
                            observation={answers.routinesPmBmQuestionObservation4}
                        />
                        <FieldForChecklist
                            label="H?? alguma divergencia em vale transporte de colaboradores?"
                            answers={answers.routinesPmBmQuestion5}
                            observation={answers.routinesPmBmQuestionObservation5}
                        />
                        <FieldForChecklist
                            label="Gerente de negocio est?? realizando a REUNIAO MENSAL (dia T) com o seu time?"
                            answers={answers.routinesPmBmQuestion6}
                            observation={answers.routinesPmBmQuestionObservation6}
                        />
                        <FieldForChecklist
                            label="Gerente de negocio est?? realizando a CULTURA BK ate o dia 20 com o seu time?"
                            answers={answers.routinesPmBmQuestion7}
                            observation={answers.routinesPmBmQuestionObservation7}
                        />
                        <FieldForChecklist
                            label="Destaque do m??s esta sendo realizado ate o dia 30"
                            answers={answers.routinesPmBmQuestion8}
                            observation={answers.routinesPmBmQuestionObservation8}
                        />
                        <FieldForChecklist
                            label="H?? justificativas de quebra de caixa, pac no financeiro"
                            answers={answers.routinesPmBmQuestion9}
                            observation={answers.routinesPmBmQuestionObservation9}
                        />
                        <FieldForChecklist
                            label="Gerencia esta limpa e organizada?"
                            answers={answers.routinesPmBmQuestion10}
                            observation={answers.routinesPmBmQuestionObservation10}
                        />
                        <FieldForChecklist
                            label="H?? caderno de ACONSELHAMENTO na loja?"
                            answers={answers.routinesPmBmQuestion11}
                            observation={answers.routinesPmBmQuestionObservation11}
                        />
                    </section>
                ))}
            </main>
        </>
    );
}