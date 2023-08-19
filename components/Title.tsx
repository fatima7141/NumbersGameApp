import { Text,StyleSheet } from "react-native";
import colors from "./colors";

function Title({children} : any){
    return(
    <Text style={styles.title}>{children}</Text>
    )
}

const styles= StyleSheet.create({
    title: {
        textAlign:"center",
        fontSize: 34,
        fontWeight:'bold',
        color: colors.myOrange,
        borderWidth:5,
        borderColor: colors.myOrange,
        padding: 12,
    }
})

export default Title;
