import { Image,View, StyleSheet, Text } from "react-native";
import Title from "../components/Title";
import colors from "../components/colors";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";



function GameOverScreen({roundsNumber, userNumber, onStartNewGame} : any){
    return( 
        <View style={styles.rootContainer}>
            <Title>Game is Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.Image}source={require("../assets/success.png")}/>
            </View>
            <View style={styles.instructionText}>
                <InstructionText style={styles.instructionText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text> !</InstructionText>
            </View>
            <View style={styles.centerButton}>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton></View>
            
        </View>
        
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    imageContainer:{
        alignItems:'center',
        borderRadius:150,// when we set up a square that has the same height and width and put a borderRadius of half of the heigt or widrt it will create a circle
        width: 300,
        height: 300,
        borderWidth:4,
        borderColor: colors.myPurple,
        overflow: "hidden", //check this part later 
        marginTop:55,
        marginLeft:40,

        
        
    },

    Image: {
        width: "100%",
        height: "100%",
    },

    rootContainer: {
        flex:1,
        padding: 30,
    },

    centerItems: {
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        paddingBottom:100,
    },

    instructionText: {
        alignItems:'center',
        marginTop:10,
        marginHorizontal:10,
        textAlign: 'center'
        
    },

    highlight: {
        fontSize:25,
        fontWeight: "bold",
    },

    centerButton: {
        paddingTop:170,
        paddingHorizontal:27,
    },

    });