import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bgImage: {
    height: '100%',
    width: '100%',
  },
  h2: {
    fontSize: 30,
    marginTop: 20,
    paddingLeft: 30,
    fontFamily: 'OpenSans_300Light',
    color: '#1488bf',
  },
  h2BlueBg: {
    fontSize: 30,
    marginTop: 20,
    paddingLeft: 30,
    fontFamily: 'OpenSans_300Light',
    color: 'white'
  },
  quoteAuthor: {
    color: '#1488bf',
    fontSize: 20,
    fontStyle: 'italic',
    marginLeft: 40,
    marginTop: 10,
    fontFamily: 'OpenSans_300Light',
  },
  cardContent: {
    flexDirection: 'row',
    fontFamily: 'OpenSans_300Light',
    backgroundColor: 'rgba(255, 255, 255, .4)',
  },
  cardImage: {
    flex: 1, 
    maxHeight: 70,
    maxWidth: 70, // I DON'T UNDERSTAND WHY THESE WORK DIFFERENTLY AND BETTER IN INLINE STYLE={}
    backgroundColor: 'rgba(255, 255, 255, .0)',
  },
  cardInfo: {
    flex: 3,
    fontFamily: 'OpenSans_300Light',
    backgroundColor: 'rgba(255, 255, 255, .0)',
  },
  cardSubtitle: {
    fontSize: 20,
    color: 'grey',
    fontFamily: 'OpenSans_300Light',
  },
  cardTheme: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic',
    fontFamily: 'OpenSans_300Light',
  },
  cardContainer: {
    borderRadius: 10,
    fontFamily: 'OpenSans_300Light',
    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
  
});

export default styles;
