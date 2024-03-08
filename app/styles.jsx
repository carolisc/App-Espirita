import { StyleSheet } from 'react-native';
import './fonts'

const styles = StyleSheet.create({
  h2: {
    fontSize: 30,
    marginTop: 20,
    paddingLeft: 30,
    fontFamily: 'Montserrat_100Thin',
    color: '#1488bf',
  },
  cardSubtitle: {
    fontSize: 20,
    color: 'grey',
    // flex: 3,
  },
  cardTheme: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic'
  },
  cardContainer: {
    borderRadius: 10,
    // flexDirection: 'row',
  },
  container: {
    backgroundColor: '#c7edff',
  },
  quoteAuthor: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    // textAlign: 'right',
    // marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  image: {
    height: 10,
    width: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  cardInfo: {
    backgroundColor: 'white', // has to be the same color as the card, idk why its different, just bc it has it's own view i guess
    flex: 3,
  },
  cardContent: {
    flexDirection: 'row',
  }
});

export default styles;
