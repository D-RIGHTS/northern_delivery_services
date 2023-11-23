import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

import { colors } from './global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

export default function App() {
  
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle = 'light-content'
        backgroundColor = 'red'
      />
      <SignInScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex:1}
})
