/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {store, selectCounter} from './store';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCounter);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
      <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
        title="go to details"
      />
    </View>
  );
};

const DetailsScreen = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="go back to home"
      />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="open Modal"
      />
    </View>
  );
};

const ModalScreen = ({navigation}) => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{fontSize: 30}}>This is a modal!</Text>
    <Button onPress={() => navigation.goBack()} title="Dismiss" />
  </View>
);

const Stack = createNativeStackNavigator();

const HomeApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="MyModal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Stack.Screen name="Home" component={HomeApp} />
          <Stack.Screen name="Setting" component={SettingsScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
