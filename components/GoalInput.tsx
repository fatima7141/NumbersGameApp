// Here I plan to the data JSX code and functionality
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';




const GoalInput = (props: any) => {
    const [enteredGoalText, setEnteredGoalText]=useState("");

    function goalInputHandler(enteredText : string) {
        setEnteredGoalText(enteredText);
      }
    
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText("");
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal :)' onChangeText={goalInputHandler}
        value={enteredGoalText}/>
        <Button title="add Goal" onPress={addGoalHandler}/> 
      </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "center",
        marginBottom: 24,
        borderBottomWidth: 2,
        borderTopWidth: 0.01,
        borderColor: `#90ee90`,
        
      },
  
      TextInput : {
        flex:1,
        borderWidth: 2,
        borderColor: `#90ee90`,
        width: "75%",
        marginRight: 8,
        padding : 8,
      },
})