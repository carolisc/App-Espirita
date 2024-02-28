import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Button } from 'react-native';
import styles from  '../styles'

const phrases = [
  '"A nossa felicidade será naturalmente proporcional em relação à felicidade que fizermos para os outros." ',
  '"Fé inabalável só o é a que pode encarar frente a frente a razão, em todas as épocas da Humanidade." ',
  '"O corpo existe tão somente para que o Espírito se manifeste." ',
  // Add more phrases as needed
];

// TO START THE APP: npm start

// TODO: ver como fazer pra mandar os estilos pra outra página

const App = () => {
  const [randomPhrase, setRandomPhrase] = useState('');

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
      <View style={{ 
          flex: 1, 
          // justifyContent: 'space-around', 
          alignItems: 'center',
        }}>

        <View>
          <Text style={styles.h1}>Bem vindo(a) ao AppEspirita!</Text>
          <Text style={{
            fontSize: 25,
            padding: 20,
          }} >Veja uma frase de Kardec clicando no botão:</Text>
        </View>

        <View style={{
          marginTop: 40,
          padding: 30,
        }}>
          <Button title="Ler Frase do Dia" onPress={getRandomPhrase} />
          <Text style={{
            marginTop: 40,
            padding: 30,
            fontSize: 25,
          }}>{randomPhrase} - Allan Kardec</Text>
        </View>
      </View>
  );
};

export default App;