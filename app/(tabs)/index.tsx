import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Button, ScrollView } from 'react-native';
import styles from  '../styles';
import { Card } from '@rneui/themed';

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

    <ScrollView>
      <View style={{ 
          flex: 1, 
          // justifyContent: 'space-around', 
          // alignItems: 'center',
        }}>

        <View>
          <Text style={styles.h2}>Lembrete Espiritual:</Text>
        </View>

        <View
            style={{
            borderLeftWidth: 3,
            borderLeftColor: 'white',
            marginLeft: 30,
            marginTop: 30,
            }}
        >
          <Text
          style={{
            paddingLeft: 15,
            fontSize: 25,
          }}
        >{randomPhrase} - Allan Kardec</Text>
        </View>

        <View style={{
          marginTop: 20,
          padding: 30,
        }}>
          <Button title="Ler Frase do Dia" onPress={getRandomPhrase} />
          <Text style={{
            marginTop: 40,
            fontSize: 25,
          }}></Text>
        </View>

        <View>
          <Text style={styles.h2}>Meditação Guiada:</Text>
        </View>

        <Card>
          <Card.Title
            style={{
              fontSize: 25,
              textAlign: 'left'
            }}
          >Energia do Sol</Card.Title>
          <Text style={styles.cardSubtitle}>
            10min
          </Text>
          <Text style={styles.cardTheme}>
            Tema: Felicidade
          </Text>
        </Card>

      </View>
    </ScrollView>
  );
};

export default App;