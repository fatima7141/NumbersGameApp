import { View,Text,StyleSheet } from "react-native";
import colors from "./colors";



function numberContainer({children}: any){
    return ( 
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    )
}

export default numberContainer;

const styles= StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor:colors.myPurple,
        padding: 24,
        margin:24,
        borderRadius: 8, // for rounded corners
        alignItems: "center",
        justifyContent: "center"
        
    },

    numberText:{
        color: colors.myOrange,
        fontSize: 35,
        fontWeight: "bold", // i could remove this lign because pf open=sans=bold
        fontFamily: "open-sans-bold"

    }
});