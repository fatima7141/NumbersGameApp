// Here I plan to the data JSX code and functionality
import { StyleSheet, Text, View, Button, TextInput, Modal, Image} from 'react-native'
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
    <Modal visible={props.visible} animationType='slide'>
    <View style={styles.inputContainer}>
        <Image style={styles.iamge} source={require("../assets/images/goal.png")}/>
        <TextInput style={styles.TextInput} placeholder='Your course goal :)' onChangeText={goalInputHandler}
        value={enteredGoalText}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="add Goal" onPress={addGoalHandler} color= "#90ee90"/></View>
            <View style={styles.button}><Button title= "cancel " onPress={props.onCancel} color= "#90ee90" /></View>
        </View>
      </View>
      </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: "center",
        alignItems : "center",
        padding:16,
        borderColor: `#90ee90`,
        backgroundColor :`#2f4f4f`
        
      },

      iamge:{
        width:400,
        height:400,
        marginBottom:30,
      },
  
      TextInput : {
        borderWidth: 2,
        borderColor: `#90ee90`,
        color:`#90ee90`,
        borderRadius: 6,
        width: "90%",
        padding : 16
      },

      buttonContainer:{
        marginTop:16,
        flexDirection: "row"
      },

      button: {
        width: 100,
        marginHorizontal: 8,
      }
})