import { StyleSheet, View, } from "react-native";
import colors from "./colors";


const Card=({children} : any) => {
    return ( <View style={styles.inputContainer}>{children}</View>)
}



export default Card;

const styles= StyleSheet.create({

    inputContainer:{
        justifyContent: "center", //will position the element along the main axis (top to bottom by default) 
        alignItems: "center", // will position the elements along the cross axis
        padding: 60,
        marginTop:36,
        marginHorizontal: 24,
        backgroundColor: colors.myPurple,
        borderRadius:8,
        elevation: 10, //to add a shadow on androids
        shadowColor: colors.myOrange , //to add a shadow on os
        shadowOffset: {width:0 , height:2 },
        shadowRadius: 7,
        shadowOpacity: 0.80,
  }
})



