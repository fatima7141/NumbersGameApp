import {View, Text, Pressable, StyleSheet} from "react-native";
export default PrimaryButton;
import colors from "./colors";

function PrimaryButton({children, onPress}: any){
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonOuterContainer}
                 onPress={onPress} 
                 android_ripple={{color: colors.otherBlue}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
        )
}

const styles = StyleSheet.create({
    
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow: "hidden",
        backgroundColor: colors.myBlue
    },

    buttonInnerContainer: {
        backgroundColor: colors.otherBlue,
        paddingVertical:8,
        paddingHorizontal:60,
        elevation: 2,
    },

    buttonText : {
        color:"orange",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },

    pressed : {
        opacity: 0.75,
    }
});

