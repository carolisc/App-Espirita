import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Button, ScrollView, Dimensions, ImageBackground } from 'react-native';
import styles from  '../styles';
import { Card } from '@rneui/themed';


const phrases = [
  '"A nossa felicidade será naturalmente proporcional em relação à felicidade que fizermos para os outros." ',
  '"Fé inabalável só o é a que pode encarar frente a frente a razão, em todas as épocas da Humanidade." ',
  '"O corpo existe tão somente para que o Espírito se manifeste." ',
  // Add more phrases as needed
];

// TO START THE APP: npm start
// TODO idea: have images as background for the cards instead of side icons, then only have play buttons, but they need to match the bg sunrise colors, and be conceptual, although they won't be transparent sadly :/
// TODO fix not being able to scroll a little bit past the last card
// TODO make the titles, links to other pages
// TODO change cards to bootstrap, maybe seek a cards thing library to use

const App = () => {
  const [randomPhrase, setRandomPhrase] = useState('');

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  const bgImage = require('../../assets/images/background-homepage.jpg')

  return (
    <ScrollView>  {/*contentContainerStyle={styles.container} excluí o container de styles */} 
      <ImageBackground source={bgImage} style={styles.bgImage} >
        <Text style={styles.h2BlueBg}>Lembrete Espiritual:</Text>
        <View
          style={{
            borderLeftWidth: 3,
            borderLeftColor: '#1488bf',
            marginLeft: 30, 
            marginTop: 30,
            backgroundColor: 'rgba(255, 255, 255, .0)',
          }}
        >
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 25,
              color: 'white',
              fontFamily: 'OpenSans_300Light',
            }}
          >
            "Fé inabalável só o é a que pode encarar frente a frente a razão, em todas as épocas da Humanidade."
          </Text>
          
        </View>
        <Text style={styles.quoteAuthor}>Allan Kardec</Text>

        <Text style={styles.h2}>Meditação Guiada:</Text>
        <Card containerStyle={styles.cardContainer}>
          <Card.Title
            style={{
              fontSize: 25,
              textAlign: 'left',
              fontFamily: 'OpenSans_300Light',
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
          <View style={styles.cardContent}>
            <View style={styles.cardInfo}>
              <Card.Title
                style={{
                  fontSize: 25,
                  textAlign: 'left',
                  fontFamily: 'OpenSans_300Light',
                }}
              >
                Gratidão
              </Card.Title>
              <Text style={styles.cardSubtitle}>
                5min
              </Text>
            </View>
            <View style={styles.cardImage}>
              <Card.Image 
                style={{ maxHeight: 70, maxWidth: 70 }}
                resizeMode="contain"
                source={require('../../assets/images/meditation.png')} 
              />
            </View>
          </View>
        </Card>
      </ImageBackground>
    </ScrollView>
    );
  }
  

export default App;