
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() { // that is a functional component
  
  const [enteredGoalText, setEnteredGoalText]=useState("");
  const [courseGoals, setCourseGoals]= useState<string[]>([]);
  
  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentcourseGoal)=>[...currentcourseGoal, enteredGoalText,]);
  };
  
  
  return (
    <View style={styles.appContainer}/*style={styles.container}*/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title="add Goal" onPress={addGoalHandler}/>
      </View>
      <View><Text style={styles.GoalText}>list of goals</Text></View>
      <View  style={styles.GoalsContainer}>
      <ScrollView> 
        {courseGoals.map((goal)=> (
        <View key={goal} style={styles.GoalItem}>
          <Text style={styles.GoalText}> {goal} </Text>
        </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ //Stylesheet is a builtin methode that adds validation and potential performance improvements
    appContainer: {
      flex:1,
      paddingTop: 70,
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
      borderColor: "green",
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
      backgroundColor: "green",
      

    },

    GoalText: {
      color:"orange"
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
