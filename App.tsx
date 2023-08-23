
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './components/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



export default function App() { //if i set the background color here it will apear for all my pages 
  const [userNumber, setUserNumber]= useState<number | null>(null);

  const [gameIsOver, setGameIsOver]=useState(true);

  const [guessRounds, setGuessRounds]=useState(0);

  const [fontsLoaded] =useFonts({
    "open-sams" : require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sams-bold" : require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  function pickedNumberHandler(pickedNumber: any){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }


  function gameOverHandler(numberOfRounds : any){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if(userNumber) {
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/> 
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onSartNewGame={startNewGameHandler}/>
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