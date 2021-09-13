import React from 'react';
// import api from '../../../services/api';
import { View, Text, StyleSheet } from '@react-pdf/renderer';


export default function Create(props) {
    const styles = StyleSheet.create({
        field: {
            backgroundColor: "#fafafa",
            marginTop: "5px",

            flexDirection: "column",
            justifyContent: "center",

            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 3
        },
        group: {
            minHeight: "30px",

            marginHorizontal: 0,
            marginVertical: 10,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

            paddingHorizontal: 4,
            paddingVertical: 0
        },
        label: {
            textAlign: "left",
            fontSize: 12,
            fontWeight: "medium",

            marginRight: 47.5
        },
        yes: {
            width: "40px",

            backgroundColor: "green",
            color: "#fff",

            textAlign: "center",
            padding: 4,
            fontSize: 10,
            fontWeight: "medium",
            
            borderRadius: 3.2
        },
        no: {
            width: "40px",
            backgroundColor: "#f00",
            color: "#fff",

            textAlign: "center",
            padding: 4,
            fontSize: 10,
            fontWeight: "medium",
            
            borderRadius: 3.2
        },
        notExist: {
            width: "40px",
            backgroundColor: "#333",
            color: "#fff",

            textAlign: "center",
            padding: 4,
            fontSize: 10,
            fontWeight: "medium",
            
            borderRadius: 3.2
        },
        observation: {
            overflow: "visible",
            // minHeight: "auto",
            // height: "auto",
            
            paddingVertical: 13,
            paddingHorizontal: 10,
            
            fontSize: 9,
            fontWeight: "medium",

            borderTopWidth: 1,
            borderTopColor: "#ccccc8",
        },
        emptyObservation: {
            width: "100%",
            height: "0",
            
            overflow: "hidden",
        },
        labelObservation: {
            fontSize: 10,
            marginBottom: 10
        },
        testObservation: {
            padding: 5,
            fontSize: 9,
            // marginBottom: 10
        }
    })

    return (
        <View wrap={ false } style={styles.field}>
            <View style={styles.group}>
                <Text style={styles.label}>{props.label}</Text>
                <Text style={props.answers === "Sim" ? styles.yes : props.answers === "Não" ? styles.no : styles.notExist}>
                    {props.answers}
                </Text>
            </View>

            <View style={props.observation === "" ? styles.emptyObservation : styles.observation}>
                <Text style={styles.labelObservation}>Observações:</Text>
                <Text style={styles.testObservation}>{props.observation}</Text>
            </View>
        </View>
    );
}