import { useFonts } from 'expo-font';
import { OpenSans_300Light, OpenSans_400Regular, OpenSans_500Medium, OpenSans_600SemiBold, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import {AppLoading} from 'expo'

export default function App() {
    const [fontsLoaded, error] = useFonts({
      OpenSans_300Light,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }
};