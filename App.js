import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

import { colors } from './global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import SignInWelcomeScreen from './src/screens/authScreens/SignInWelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle = 'light-content'
        backgroundColor = 'red'
      />
      
      <RootNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex:1}
})
