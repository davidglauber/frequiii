import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import VarelaFont from './assets/fonts/VarelaRound-Regular.ttf'

import { useFonts } from '@expo-google-fonts/inter';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  let [fontsLoaded] = useFonts({
    VarelaFont
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex:1, alignItems:'flex-start', marginTop:height/5, flexDirection:'row'}}>
        <Text style={styles.title}>Control</Text>
        <Text style={styles.title2}> all</Text>
      </View>
      <LottieView source={require("./assets/remotecontrol.json")} loop autoPlay />
      <View style={{flex:1, flexDirection:'row', marginTop:height/3}}>
        <Text style={styles.title}>change</Text>
        <Text style={styles.title3}> everything</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'VarelaFont',
    fontSize: 40
  },
  title2: {
    fontFamily: 'VarelaFont',
    fontSize: 40,
    color: '#1faef0'
  },
  title3: {
    fontSize: 20,
    marginBottom: height/7,
    color:'#0ecf82'
  }
});
