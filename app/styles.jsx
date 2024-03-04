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
  },
  cardTheme: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic'
  },
  cardContainer: {
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#c7edff',
    flex: 3,
  },
  quoteAuthor: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    // textAlign: 'right',
    // marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  }
});

export default styles;
