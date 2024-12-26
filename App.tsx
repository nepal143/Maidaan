import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MaidaanLoginScreen from './Components/LoginPage'; // Adjust the path based on the location of MaidaanLoginScreen.js

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle="light-content" />
      <MaidaanLoginScreen />
    </SafeAreaView>
  );
};

export default App;
