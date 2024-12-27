import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, ResetPassword, Counting } from '@/pages';

const Stack = createNativeStackNavigator();

export function RouteStack() {
  return (
    <Stack.Navigator initialRouteName={'login'}>
      <Stack.Screen name={'login'} component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name={'reset'} component={ResetPassword}/>
      <Stack.Screen name={'counting'} component={Counting}/>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export function CountingDrawer() {
  return (
    <Drawer.Navigator initialRouteName={'home'}>
      <Drawer.Screen name={'home'} component={RouteStack} options={{}} />
    </Drawer.Navigator>
  );
}
