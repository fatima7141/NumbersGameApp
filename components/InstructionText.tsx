import { StyleSheet } from "react-native";
import colors from "./colors";
import { Text } from "react-native";

function InstructionText({children,}: any){
    return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;


const styles= StyleSheet.create({

    instructionText:{
        color: colors.myOrange,
        fontSize: 23,
    }
})