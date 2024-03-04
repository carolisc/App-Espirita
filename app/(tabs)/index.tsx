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
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.h2}>Lembrete Espiritual:</Text>
    <View
      style={{
        borderLeftWidth: 3,
        borderLeftColor: 'black',
        marginLeft: 30,
        marginTop: 30,
      }}
    >
      <Text
        style={{
          paddingLeft: 15,
          fontSize: 25,
          backgroundColor: '#c7edff',
          color: '#1488bf',
        }}
      >
        "Fé inabalável só o é a que pode encarar frente a frente a razão, em todas as épocas da Humanidade."
      </Text>
      
    </View>
    <Text style={styles.quoteAuthor}>Alan Kardec</Text>

    <Text style={styles.h2}>Meditação Guiada:</Text>
    <Card containerStyle={styles.cardContainer}>
      <Card.Title
        style={{
          fontSize: 25,
          textAlign: 'left'
        }}
      >
        Energia do Sol
      </Card.Title>
      <Text style={styles.cardSubtitle}>
        10min
      </Text>
      <Text style={styles.cardTheme}>
        Tema: Felicidade
      </Text>
    </Card>

    <Text style={styles.h2}>Prece Guiada:</Text>
    <Card containerStyle={styles.cardContainer}>
      <Card.Title
        style={{
          fontSize: 25,
          textAlign: 'left'
        }}
      >
        Gratidão
      </Card.Title>
      <Text style={styles.cardSubtitle}>
        5min
      </Text>
    </Card>
  </ScrollView>
  );
}

export default App;