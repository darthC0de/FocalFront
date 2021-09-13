import React from 'react'
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

import FieldForChecklistPDF from "../components/FieldForChecklistPDF/create"

import LogoBK from "../../assets/logoBk.png";

export default function ChecklistPDF(props) {

    const styles = StyleSheet.create({
        page: {
            padding: 20,
        },
        header: {
            width: "90%",

            color: "#393e46",
            fontSize: 28,
            fontWeight: "bold",

            marginBottom: 60,

            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
        },
        image: {
            width: 60,
            height: 60,
            marginRight: 5,
        },
        storeInfo: {
            width: "90%",

            color: "#393e46",
            fontSize: 17,

            // alignSelf: "center",
            // textAlign: "center",

            // marginBottom: 60,
            // borderBottomWidth: 1,
        },
        section: {
            width: "95vw",
            // minHeight: "75vh",
            // marginTop: 40,
            // marginBottom: 10,

            // flex: 1,
            // alignSelf: "center",

            paddingVertical: 20,
            paddingHorizontal: 5,
            paddingBottom: 5,

            // borderColor: "#ccc",
            // borderWidth: 2,
            // borderRadius: 2
        },
        legend: {
            width: "100%",
            // backgroundColor: "#fff",
            // width: 100,
            backgroundColor: "#00a8ff",

            // textAlign: "center",
            // alignItems: "center",
            // justifyContent: "center",
            color: "#fff",
            fontSize: 20,
            fontWeight: "500",

            marginTop: -15,
            marginBottom: 16,
            paddingVertical: 5,
            paddingHorizontal: 2,

            // borderWidth: 2,
            // borderColor: "#ccc",
            borderRadius: 2
        },
        footer: {
            position: "absolute",
            bottom: 5,
            right: 20,
            fontSize: 10,
            //   textAlign: "right",
            marginLeft: 10,
            // backgroundColor: "#000",
            // color: "#fff"
        },
    })
    console.log(props.storeInfo)
    console.log(props.dataCommunication)

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={false}>
                <View style={styles.header} fixed>
                    <Image style={styles.image} source={LogoBK} />
                    <View style={styles.headerGroup}>
                        <Text>Checklist Focal G&G</Text>
                        <View style={styles.storeInfo}>
                            {props.storeInfo.map(info => {
                                return <Text> Bknumber {info.bknumber} - {info.store}</Text>
                            })}
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    {props.dataCovid.map(questionCovid => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Covid-19 </Text>
                                <FieldForChecklistPDF
                                    label="O restaurante está fazendo a aferição de temperatura e perguntas de todos os visitantes que entram no restaurante?"
                                    answers={questionCovid.questionCovid1}
                                    observation={questionCovid.questionCovidObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="O caderno de temperatura e perguntas está devidamente preenchido? (Verificar últimos 5 dias)"
                                    answers={questionCovid.questionCovid2}
                                    observation={questionCovid.questionCovidObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="O gerente sabe calibrar o termometro? (Body/Surface)"
                                    answers={questionCovid.questionCovid3}
                                    observation={questionCovid.questionCovidObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="Todos os colaboradores da escala, aparecem no caderno?"
                                    answers={questionCovid.questionCovid4}
                                    observation={questionCovid.questionCovidObservation4}
                                />
                                <FieldForChecklistPDF
                                    label="Os colaboradores estão lavando as mãos a cada 30 minutos?"
                                    answers={questionCovid.questionCovid5}
                                    observation={questionCovid.questionCovidObservation5}
                                />
                                <FieldForChecklistPDF
                                    label="As máscaras estão sendo trocadas a cada 2 horas?"
                                    answers={questionCovid.questionCovid6}
                                    observation={questionCovid.questionCovidObservation6}
                                />
                                <FieldForChecklistPDF
                                    label="As mascaras estão sendo utilizadas corretamente?"
                                    answers={questionCovid.questionCovid7}
                                    observation={questionCovid.questionCovidObservation7}
                                />
                                <FieldForChecklistPDF
                                    label="Fazer algum questionamento sobre o transporte publico ou cuidados em casa?"
                                    answers={questionCovid.questionCovid8}
                                    observation={questionCovid.questionCovidObservation8}
                                />
                                <FieldForChecklistPDF
                                    label="Você recebeu a quantidade necessária de máscaras para trocar a cada 2 horas no turno? (10/12 máscaras)"
                                    answers={questionCovid.questionCovid9}
                                    observation={questionCovid.questionCovidObservation9}
                                />
                            </>
                        )
                    })
                    }
                </View>

                <View style={styles.section}>
                    {props.dataCommunication.map(question => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Comunicação </Text>
                                <FieldForChecklistPDF
                                    label="O mundo BK está atualizado conforme o último comunica?"
                                    answers={question.communicationQuestion1}
                                    observation={question.communicationQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="O colaborador entende os itens que compõe o mundo Bk?"
                                    answers={question.communicationQuestion2}
                                    observation={question.communicationQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="Todos os itens do king board estão preenchidos e atualizados?"
                                    answers={question.communicationQuestion3}
                                    observation={question.communicationQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="O colaborador entende os itens que compõe o King Board?"
                                    answers={question.communicationQuestion4}
                                    observation={question.communicationQuestionObservation4}
                                />
                                <FieldForChecklistPDF
                                    label="No quadro do King Board o Comunica, R.E.V e Guia de treinamento estão atualizados?"
                                    answers={question.communicationQuestion5}
                                    observation={question.communicationQuestionObservation5}
                                />
                            </>
                        )
                    })}
                </View>

                <View style={styles.section}>
                    {props.dataCulture.map(answers => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Cultura </Text>
                                <FieldForChecklistPDF
                                    label="O restaurante tem o quadro de cultura?"
                                    answers={answers.cultureQuestion1}
                                    observation={answers.cultureQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="O colaborador entende os itens que compõe a nossa cultura? Ele soube explicar?"
                                    answers={answers.cultureQuestion2}
                                    observation={answers.cultureQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="O colaborador conhece a trilha de carreira? (Sugerir o quadro da trilha exposto e colado)"
                                    answers={answers.cultureQuestion3}
                                    observation={answers.cultureQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="O gerente ou Sup. G&G sabe acessar o Mini Flipchart no Meu BK?"
                                    answers={answers.cultureQuestion4}
                                    observation={answers.cultureQuestionObservation4}
                                />
                            </>
                        )
                    })}
                </View>

                <View style={styles.section}>
                    {props.dataEngagement.map(answers => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Engajamento </Text>
                                <FieldForChecklistPDF
                                    label="O gerente sabe e entende o engajamento do restaurante?"
                                    answers={answers.engagementQuestion1}
                                    observation={answers.engagementQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="Quais ações de engajamento o gerente fez no mês?"
                                    answers={answers.engagementQuestion2}
                                    observation={answers.engagementQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="Quem é o seu superior imediato?"
                                    answers={answers.engagementQuestion3}
                                    observation={answers.engagementQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="Quem faz parte da Liderança Sênior do BK?"
                                    answers={answers.engagementQuestion4}
                                    observation={answers.engagementQuestionObservation4}
                                />
                            </>
                        )
                    })}
                </View>

                <View style={styles.section}>
                    {props.dataCustomerEx.map(answers => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Experiência do Cliente </Text>
                                <FieldForChecklistPDF
                                    label="A loja está limpa? (área utilizadas por clientes)"
                                    answers={answers.customerExQuestion1}
                                    observation={answers.customerExQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="Os uniformes estão adequados (limpo e camisas para dentro) e em bom estado de conservação?"
                                    answers={answers.customerExQuestion2}
                                    observation={answers.customerExQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="Todos utilizam crachás?"
                                    answers={answers.customerExQuestion3}
                                    observation={answers.customerExQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="O supervisor de vendas está alocado corretamente (no caixa ou na filas)?"
                                    answers={answers.customerExQuestion4}
                                    observation={answers.customerExQuestionObservation4}
                                />
                                <FieldForChecklistPDF
                                    label="A placa do Guest Trac está disponível no balcão?"
                                    answers={answers.customerExQuestion5}
                                    observation={answers.customerExQuestionObservation5}
                                />
                                <FieldForChecklistPDF
                                    label="Se loja drive, o adesivo de Guest está colado na janela?"
                                    answers={answers.customerExQuestion6}
                                    observation={answers.customerExQuestionObservation6}
                                />
                                <FieldForChecklistPDF
                                    label="Se a loja possui porta guardanapo, o adesivo de guest está colado nele?"
                                    answers={answers.customerExQuestion7}
                                    observation={answers.customerExQuestionObservation7}
                                />
                                <FieldForChecklistPDF
                                    label="Foi observado uso de 'por favor' e 'obrigado' com o cliente?"
                                    answers={answers.customerExQuestion8}
                                    observation={answers.customerExQuestionObservation8}
                                />
                                <FieldForChecklistPDF
                                    label="Os membros da equipe cumprimentaram de forma breve e cortês?"
                                    answers={answers.customerExQuestion9}
                                    observation={answers.customerExQuestionObservation9}
                                />
                                <FieldForChecklistPDF
                                    label="Os membros da equipe sorriem e mantem contato visual com o cliente?"
                                    answers={answers.customerExQuestion10}
                                    observation={answers.customerExQuestionObservation10}
                                />
                                <FieldForChecklistPDF
                                    label="Durante sua visita, você observou alguma insatisfação do cliente?"
                                    answers={answers.customerExQuestion11}
                                    observation={answers.customerExQuestionObservation11}
                                />
                                <FieldForChecklistPDF
                                    label="Os colaboradores da loja sabem informar as reclamações e elogios que a loja apresentou na pesquisa de satisfação de Clientes? Foi falado na reunião de posicionamento?"
                                    answers={answers.customerExQuestion12}
                                    observation={answers.customerExQuestionObservation12}
                                />
                            </>
                        )
                    })}
                </View>

                <View style={styles.section}>
                    {props.dataFrame.map(answers => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Quadro </Text>
                                <FieldForChecklistPDF
                                    label="Há divergência na folha de ativos? Comente"
                                    answers={answers.frameQuestion1}
                                    observation={answers.frameQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="O quadro do restaurante está completo? Comente"
                                    answers={answers.frameQuestion2}
                                    observation={answers.frameQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="A loja possui PCDs conforme cota e desdobramento da regional?"
                                    answers={answers.frameQuestion3}
                                    observation={answers.frameQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="A loja possui jovens aprendizes conforme meta do painel de Gente?"
                                    answers={answers.frameQuestion4}
                                    observation={answers.frameQuestionObservation4}
                                />
                            </>
                        )
                    })}
                </View>

                <View style={styles.section}>
                    {props.dataWorkSafety.map(answers => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Segurança do Trabalho </Text>
                                <FieldForChecklistPDF
                                    label="Os acidentes de trabalho estão sendo informados imediatamente?"
                                    answers={answers.workSafetyQuestion1}
                                    observation={answers.workSafetyQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="Os afastamentos estão sendo inseridos imediatamente?"
                                    answers={answers.workSafetyQuestion2}
                                    observation={answers.workSafetyQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="O término dos afastamentos está sendo acompanhado?"
                                    answers={answers.workSafetyQuestion3}
                                    observation={answers.workSafetyQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="É realizado corretamente o processo de retorno ao trabalho (ASO de retorno)?"
                                    answers={answers.workSafetyQuestion4}
                                    observation={answers.workSafetyQuestionObservation4}
                                />
                                <FieldForChecklistPDF
                                    label="Os ASOs estão sendo realizados antes do vencimento? Estão impressos e arquivados?"
                                    answers={answers.workSafetyQuestion5}
                                    observation={answers.workSafetyQuestionObservation5}
                                />
                                <FieldForChecklistPDF
                                    label="Os colaboradores estão realizando os treinamentos de SESMT?"
                                    answers={answers.workSafetyQuestion6}
                                    observation={answers.workSafetyQuestionObservation6}
                                />
                                <FieldForChecklistPDF
                                    label="Os documentos PPRA e PCMSO atualizados estão impressos e disponíveis na loja?"
                                    answers={answers.workSafetyQuestion7}
                                    observation={answers.workSafetyQuestionObservation7}
                                />
                                <FieldForChecklistPDF
                                    label="Todos os colaboradores possuem ordem de serviço? (1)A ordem de serviço está em anexo no documento PPRA. A OS deve ser impressa e entregue para cada colaborador, ele deve assinar e devolver para o Supervisor G&G, que deverá deixar arquivado)"
                                    answers={answers.workSafetyQuestion8}
                                    observation={answers.workSafetyQuestionObservation8}
                                />
                                <FieldForChecklistPDF
                                    label="Os cipeiros estão com a documentação atualizada? (2)CIPA: deverão ser arquivados os certificados de conclusão do curso, que são enviados pela MAG quando os 4 colaboradores finalizam os treinamentos)"
                                    answers={answers.workSafetyQuestion9}
                                    observation={answers.workSafetyQuestionObservation9}
                                />
                                <FieldForChecklistPDF
                                    label="Está sendo realizado o preenchimento da ficha de registro de entrega de EPIs para os colaboradores? (3)EPI: o modelo da ficha de EPI consta em anexo no PPRA. O SUperv G&G deverá imprimir uma ficha por colaborador e preencher cada vez que é entregue um EPI. Deixar a ficha arquivada para fins de fiscalização.)"
                                    answers={answers.workSafetyQuestion10}
                                    observation={answers.workSafetyQuestionObservation10}
                                />
                            </>
                        )
                    })}
                </View>

                <View style={styles.section}>
                    {props.dataRoutinesPmBm.map(answers => {
                        return (
                            <>
                                <Text wrap={false} style={styles.legend}> Rotinas de Gente & Gestão / Gerente de Negocio </Text>
                                <FieldForChecklistPDF
                                    label="Há cadernos diarios na loja, como: Desperdicios, check list, controle de cofre?"
                                    answers={answers.routinesPmBmQuestion1}
                                    observation={answers.routinesPmBmQuestionObservation1}
                                />
                                <FieldForChecklistPDF
                                    label="Colaboradores esta ultrapassando + 2 horas na loja? Se sim, quantos?"
                                    answers={answers.routinesPmBmQuestion2}
                                    observation={answers.routinesPmBmQuestionObservation2}
                                />
                                <FieldForChecklistPDF
                                    label="Colaboradores está realizando suas 11 horas de descanso ? Se não, quantos?"
                                    answers={answers.routinesPmBmQuestion3}
                                    observation={answers.routinesPmBmQuestionObservation3}
                                />
                                <FieldForChecklistPDF
                                    label="Existe pastas de caixa pequeno, R.E.V , Auditoria na loja atualizadas? Se não, quais?"
                                    answers={answers.routinesPmBmQuestion4}
                                    observation={answers.routinesPmBmQuestionObservation4}
                                />
                                <FieldForChecklistPDF
                                    label="Há alguma divergencia em vale transporte de colaboradores?"
                                    answers={answers.routinesPmBmQuestion5}
                                    observation={answers.routinesPmBmQuestionObservation5}
                                />
                                <FieldForChecklistPDF
                                    label="Gerente de negocio está realizando a REUNIAO MENSAL (dia T) com o seu time?"
                                    answers={answers.routinesPmBmQuestion6}
                                    observation={answers.routinesPmBmQuestionObservation6}
                                />
                                <FieldForChecklistPDF
                                    label="Gerente de negocio está realizando a CULTURA BK ate o dia 20 com o seu time?"
                                    answers={answers.routinesPmBmQuestion7}
                                    observation={answers.routinesPmBmQuestionObservation7}
                                />
                                <FieldForChecklistPDF
                                    label="Destaque do mês esta sendo realizado ate o dia 30"
                                    answers={answers.routinesPmBmQuestion8}
                                    observation={answers.routinesPmBmQuestionObservation8}
                                />
                                <FieldForChecklistPDF
                                    label="Há justificativas de quebra de caixa, pac no financeiro"
                                    answers={answers.routinesPmBmQuestion9}
                                    observation={answers.routinesPmBmQuestionObservation9}
                                />
                                <FieldForChecklistPDF
                                    label="Gerencia esta limpa e organizada?"
                                    answers={answers.routinesPmBmQuestion10}
                                    observation={answers.routinesPmBmQuestionObservation10}
                                />
                                <FieldForChecklistPDF
                                    label="Há caderno de ACONSELHAMENTO na loja?"
                                    answers={answers.routinesPmBmQuestion11}
                                    observation={answers.routinesPmBmQuestionObservation11}
                                />
                            </>
                        )
                    })}
                </View>

                {props.storeInfo.map(info => {
                    return (
                        <Text style={styles.footer} render={({ pageNumber, totalPages }) => (
                            `${info.date} ás ${info.hours_min} - Página ${pageNumber} de ${totalPages}`
                        )} fixed />
                    )
                })}
            </ Page>
        </ Document>
    );
}
