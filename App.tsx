/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RouteStack } from '@/config';
import { loading$ } from '@/stores';


function App() {
  const [loading, setLoading] = useState(false);
  loading$.subscribe({
    next: value => {
      setLoading(value.length > 0);
    },
  });
  return (
    <NavigationContainer>
      <ActivityIndicator animating={loading} size={'large'}/>
      <RouteStack/>
    </NavigationContainer>
  );
}

export default App;
