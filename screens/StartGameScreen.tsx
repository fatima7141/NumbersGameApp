
import { TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import colors from "../components/colors";
import Title from "../components/Title";
import Card from "../components/Card"
import InstructionText from "../components/InstructionText";

function StartGameScreen({onPickedNumber} : any) {
    const[enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(enteredText : string) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber("");
    }

    function confirmInputHandler(){
        const chosenNumber=parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            //show alert
            Alert.alert(
                "invalid number",
                "Number has to be a number between 0 an 99",
                [{text: "okay", style: "destructive", onPress: resetInputHandler}]);
            return;
        }
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
        <Card>
            <InstructionText style={styles.instructionText}>Enter A Number</InstructionText>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad" //even if we enter a number it will always receive the input as string
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}><PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton></View>
                <View style={styles.buttonContainer}><PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton></View>
                
            </View>
        </Card>
    </View>
    );
}

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:40,
        alignItems: "center"//align items across the cross axe (left to right in this case)

    },


    instructionText:{
        marginBottom: 9,
    },

    numberInput: {
        height: 50,
        width:50,
        fontSize: 32,
        borderBottomColor: colors.myOrange,
        borderBottomWidth: 4,
        color : colors.myOrange,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },

    buttonsContainer:{
        flexDirection: "row",
        marginTop: 20
    },

    buttonContainer: {
        flex:1,
    }
})

export default StartGameScreen;