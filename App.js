import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/homescreen';
import AvaliacoesScreen from './screens/avaliacoes';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = 'home' headerMode = 'none'>
            <Stack.Screen name = 'home' component = {HomeScreen} />
            <Stack.Screen name = 'avaliacoes' component = {AvaliacoesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}