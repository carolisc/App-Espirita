import { useFonts } from 'expo-font';
import {AppLoading} from 'expo'
import { Montserrat_100Thin } from '@expo-google-fonts/montserrat'

export default function App() {
    const [fontsLoaded, error] = useFonts({
      Montserrat_100Thin,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
};