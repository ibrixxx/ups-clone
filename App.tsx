import { StatusBar } from 'expo-status-bar';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./navigation";


export default function App() {
  return (
      // @ts-ignore
      <NavigationContainer>
          <TailwindProvider utilities={utilities}>
             <RootNavigator />
          </TailwindProvider>
      </NavigationContainer>

  );
}
