import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Modal, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import VarelaFont from './assets/fonts/VarelaRound-Regular.ttf'
import { Ionicons } from '@expo/vector-icons';

import { useFonts } from '@expo-google-fonts/inter';
import { TouchableOpacity as TC } from 'react-native-gesture-handler';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function App() {
  let [fontsLoaded] = useFonts({
    VarelaFont
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <ScrollView contentContainerStyle={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hellow, how are you? This app is amazing, you know why? {'\n\n'}Because we can verify which infrared waves are around you and we configure it for you with one just click</Text>

              <TouchableOpacity
                style={{ width:200, backgroundColor: '#0ecf82',  borderRadius: 20, padding: 10}}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>Close Pop-up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
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
          <TC onPress={() => alert('Feature not finished yet')} style={styles.customButton}>
            <Ionicons name="radio-outline" size={32} color="white" />
          </TC>
          <TC onPress={() => setModalVisible(true)} style={{marginLeft:10, marginTop:10, elevation:5, backgroundColor:'#171010', width: width/7, padding:5, alignItems:'center', justifyContent:'center', borderRadius:15}}>
            <Ionicons name="information-circle-outline" size={24} color="white" />
          </TC>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#0ecf82',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:17,
    fontWeight: 'bold',
    fontFamily: 'VarelaFont'
  },
});
