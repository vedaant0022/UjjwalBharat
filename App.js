import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import FlashMessage from 'react-native-flash-message'
import Stack from './src/navigation/Stack'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack />
      <FlashMessage />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App

