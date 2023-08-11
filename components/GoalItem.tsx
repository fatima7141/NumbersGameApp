//Here I plan to store the actual JSX code and functionality that is  related with outputting single goal items

import { StyleSheet, Text, View, Pressable} from 'react-native';


// in react Native, if you want an item to be pressable you have to put it under <pressable> <pressable/>

function GoalItem(props: any) { 

  return (
    <Pressable onPress={()=>props.onDeleteitem(props.id)} style={({ pressed })=>pressed && styles.pressedItem}> 
    <View style={styles.goalItem}>
      <Text style={styles.goalText}> {props.text}</Text>
    </View> 
    </Pressable>
  )
    
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin:8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: `#3cb371`,
        
  
      },

      pressedItem:{
        opacity: 0.
      },
  
      goalText: {
        color: `#90ee90`
      },
  
      ListOfGoals: { 
        color:`#3cb371`,
        paddingBottom: 5,
        fontSize: 20
      }
})