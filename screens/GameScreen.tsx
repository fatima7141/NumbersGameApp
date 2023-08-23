
import { View, StyleSheet, Alert, Text, FlatList} from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";

import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText"
import GuessLogItem from "../components/GuessLogItem";



/* function Card({ children }: CardProps) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}
*/

function generateRandomBetween(min: number, max: number, exclude: any) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

let minBoundary= 1;
let maxBoundary= 100;

function GameScreen({userNumber, onGameOver}: any) {

    const initialGuess= generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess);
    const [guessRouds, setGuessRounds]= useState([initialGuess]);
    

    useEffect(()=> {
        if(currentGuess=== userNumber){
            onGameOver(guessRouds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[])

    function nextGuessHandler(direction: any) { // direction is a string that direct if the number is lower or greater
        if ((direction === "lower" && currentGuess< userNumber) || (direction === "greater" && currentGuess> userNumber)){
            Alert.alert("don't lie, you gave the wrong indication to the computer" /**[{text:"sorry!", style: "cancel" }] */);
            return;
        }
        if (direction ==="lower"){
            maxBoundary=currentGuess;
        } else{
            minBoundary=currentGuess+1;
        }
        
        console.log(minBoundary,maxBoundary)
        const newRndNumber=generateRandomBetween(minBoundary, maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds, ]);
    }

    const guessRoudsListLength= guessRouds.length;

    return (
    <View style= {styles.screen}>
        <Title>Oponent's guest</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText>{"Higher or lower ?"}</InstructionText> 
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}><PrimaryButton onPress={() =>nextGuessHandler("greater")}>{"+"}</PrimaryButton></View>
                <View style={styles.buttonContainer}><PrimaryButton onPress={() =>nextGuessHandler("lower")}>{"-"}</PrimaryButton></View>
            </View> 
        </Card>
        <View style={styles.listContainer}>
            <FlatList data={guessRouds}
            renderItem={(itemData) => <GuessLogItem children={guessRoudsListLength-itemData.index} guess={itemData.item}/>}
            keyExtractor={(item)=>item.toString()}/>
        </View>
    </View>
    )
}




export default GameScreen;

const styles= StyleSheet.create({
    screen:{
        flex:1,
        padding: 38,
    },

    buttonsContainer:{
        flexDirection: "row",
        marginTop: 20
    },

    buttonContainer: {
        flex:1,
        
    },

    instructionText:{
        marginBottom: 22,
    },

    listContainer:{
        flex: 1,
        padding: 7,
        paddingTop: 20,
    }

});