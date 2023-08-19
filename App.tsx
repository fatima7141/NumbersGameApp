
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './components/colors';
import GameOverScreen from './screens/GameOverScreen';




export default function App() { //if i set the background color here it will apear for all my pages 
  const [userNumber, setUserNumber]= useState();

  const [gameIsOver, setGameIsOver]=useState(true);

  function pickedNumberHandler(pickedNumber: any){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if(userNumber) {
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/> 
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen/>
  }

  
  

  return (
    <LinearGradient colors={[colors.myBlue,colors.otherPurple ]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/dices.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage : {
    opacity: 0.15
  }
});