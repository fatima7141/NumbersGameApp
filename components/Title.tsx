import { Text,StyleSheet } from "react-native";
import colors from "./colors";

function Title({children} : any){
    return(
    <Text style={styles.title}>{children}</Text>
    )
}

const styles= StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        textAlign:"center",
        fontSize: 34,
        fontWeight:'bold', // i can remove this because of open-sans-bold
        color: colors.myOrange,
        borderWidth:5,
        borderColor: colors.myOrange,
        padding: 12,
        marginBottom: 39
        
        
    }
})

export default Title;
