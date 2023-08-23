import { View, Text, StyleSheet } from "react-native";
import colors from "./colors";
import InstructionText from "./InstructionText";



function GuessLogItem({children, guess} : any){
    return (
    <View style={styles.listItem}>
        <InstructionText>{children}</InstructionText>
        <InstructionText>Opponent's Guess : {guess}</InstructionText>
    </View>
    );
}

export default GuessLogItem;
const styles = StyleSheet.create({
    listItem: {
        borderColor:colors.myPurple,
        borderWidth: 2,
        borderRadius:40,
        padding:12,
        marginVertical: 8,
        backgroundColor: colors.myBlue,
        flexDirection : "row",
        justifyContent: "space-between",
        width: "100%",
        elevation : 4, // that is for androids
        shadowColor : colors.myOrange,
        shadowOffset:{width : 0, height:0},
        shadowOpacity: 0.50,
        shadowRadius:3,
    },

    
})