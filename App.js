import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import VarelaFont from './assets/fonts/VarelaRound-Regular.ttf'
import { Ionicons } from '@expo/vector-icons';

import { useFonts } from '@expo-google-fonts/inter';
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  let [fontsLoaded] = useFonts({
    VarelaFont
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />
        <View style={{flex:1, alignItems:'flex-start', marginTop:height/5, flexDirection:'row'}}>
          <Text style={styles.title}>Control</Text>
          <Text style={styles.title2}> all</Text>
        </View>
        <LottieView source={require("./assets/remotecontrol.json")} loop autoPlay />
        <View style={{flex:1, flexDirection:'row', marginTop:height/2.5}}>
          <Text style={styles.title}>change</Text>
          <Text style={styles.title3}> everything</Text>
        </View>

        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={() => alert('Feature not finished yet')} style={styles.customButton}>
            <Ionicons name="radio-outline" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:10, marginTop:10, elevation:5, backgroundColor:'#171010', width: width/7, padding:5, alignItems:'center', justifyContent:'center', borderRadius:15}}>
            <Ionicons name="information-circle-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
    </ScrollView>
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
  },
  customButton: {
    elevation:20, 
    backgroundColor:'#171010', 
    width: width/3, 
    padding:10, 
    alignItems:'center', 
    justifyContent:'center', 
    borderRadius:15, 
    marginBottom: height/28, marginLeft: width/6
  }
});
