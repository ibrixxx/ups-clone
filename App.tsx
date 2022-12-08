import { StatusBar } from 'expo-status-bar';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./navigation";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5001/api/eponymous-snake',
    cache: new InMemoryCache(),
});

export default function App() {
  return (
      // @ts-ignore
      <NavigationContainer>
          <ApolloProvider client={client}>
              <TailwindProvider utilities={utilities}>
                 <RootNavigator />
              </TailwindProvider>
          </ApolloProvider>
      </NavigationContainer>

  );
}
