
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() { // that is a functional component
  
  const [enteredGoalText, setEnteredGoalText]=useState("");
  const [courseGoals, setCourseGoals]= useState<string[]>([]);
  
  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentcourseGoal=>[...courseGoals, enteredGoalText,]);
  };
  
  
  return (
    <View style={styles.appContainer}/*style={styles.container}*/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title="a d d G o a l " onPress={addGoalHandler}/>
      </View>
      <View style={styles.GoalsContainer}>
        {courseGoals.map((goal)=><Text>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ //Stylesheet is a builtin methode that adds validation and potential performance improvements
    appContainer: {
      flex:1,
      padding: 77,
      paddingHorizontal: 16
    },

    inputContainer:{
      flex:1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems : "center",
      marginBottom: 24,
      borderBottomWidth: 2,
      borderColor: "green"
      
    },

    TextInput : {
      flex:1,
      borderWidth: 2,
      borderColor: "blue",
      width: "75%",
      marginRight: 8,
      padding : 8,
    },

    GoalsContainer: {
      flex :7,
    }


  /*  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{ 
    margin : 20, 
    borderWidth: 2, 
    borderColor : "green", 
    padding: 15,}
  */});
