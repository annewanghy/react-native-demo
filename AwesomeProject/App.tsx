/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ({}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>1221Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};

const DetailsScreen = ({}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Details Screen</Text>
    {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
