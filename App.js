import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen.js';
import SecondScreen from './src/components/SecondScreen.js';
import ThirdScreen from './src/components/ThirdScreen.js';
import FourthScreen from './src/components/FourthScreen.js';
import { foregroungImage } from 'react-native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
        <Stack.Screen name="Fourth" component={FourthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
