/*import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import SecondScreen from './src/components/SecondScreen';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  const [textVisible, setTextVisible] = useState(false);

  const handlePress = () => {
    setTextVisible(!textVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.container}>
      <Image 
        source={require('./assets/Intertek_Logo.png')} 
        style={styles.image}
      />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Mostrar texto" onPress={() => navigation.navigate('Second')} />
      </View>
      {textVisible && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>¡Hola, este es el texto mostrado!</Text>
        </View>

      )}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default App;*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import SecondScreen from './src/components/SecondScreen';
import { foregroungImage } from 'react-native';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
