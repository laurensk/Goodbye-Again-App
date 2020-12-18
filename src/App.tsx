import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Scan from './Scan';
import Detail from './Detail';
import {StatusBar} from 'react-native';

const App = () => {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('dark-content');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTitle: 'goodbye again'}}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{headerTitle: 'Scan'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerTitle: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
