/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RouteStack } from '@/config/route';
import { _loading } from '@/stores';


function App() {
  const [loading, setLoading] = useState(() => true);
  _loading.subscribe({
    next: value => {
      if (value.length > 0 !== loading) {
        setLoading(value.length > 0);
      }
    },
  });
  return (
    <NavigationContainer>
      {loading && <ActivityIndicator style={styles.loading} size={'large'}/>}
      <RouteStack/>
    </NavigationContainer>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 10,
  },
});

export default App;
