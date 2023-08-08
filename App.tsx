
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() { // that is a functional component
  
  const [enteredGoalText, setEnteredGoalText]=useState("");
  const [courseGoals, setCourseGoals]= useState<any[]>([]); // j'ai mis trop de truc de type any pour que ca marche 
  
  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentcourseGoal : any[])=>[ // a demander pour le type
      ...currentcourseGoal, {text: enteredGoalText,
       Key: Math.random().toString()},]);}  //Je dois reviser le math.random for the key parce que je n'ai pas trop compris 
  
  
  return (
    <View style={styles.appContainer}/*style={styles.container}*/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal :)' onChangeText={goalInputHandler}/>
        <Button title="add Goal" onPress={addGoalHandler}/> 
      </View>
      <View style={styles.ListOfGoals}><Text style={styles.ListOfGoals}>List Of Goals</Text></View>
      <View  style={styles.GoalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData=>{
        return <View style={styles.GoalItem}>
        <Text style={styles.GoalText}> {itemData.item.text} </Text>
      </View>
      }}alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

//I really have to understand and add the keyExtractor mentioner vers la fin du viddeo 26

const styles = StyleSheet.create({ //Stylesheet is a builtin methode that adds validation and potential performance improvements
    appContainer: {
      flex:1,
      paddingTop: 70,
      paddingHorizontal: 16,
      backgroundColor : `#2f4f4f`
    },

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

    GoalsContainer: {
      flex :7,
    },

    GoalItem: {
      margin:8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: `#3cb371`,
      

    },

    GoalText: {
      color:`#90ee90`
    },

    ListOfGoals: { 
      color:`#90ee90`,
      paddingBottom: 5,
      fontSize: 20
    }
});
