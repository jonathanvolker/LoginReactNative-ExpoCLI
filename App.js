import { StatusBar } from 'expo-status-bar';
import React ,{useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import { Button , TextInput } from 'react-native-paper';
import SignupScreen from './screens/SignupScreen';
export default function App() {


  return (
   <>
    
    <SignupScreen />

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize:35 , 
    marginLeft:18, 
    marginTop:10, 
    color:"blue" },
bottomTitle: {
    fontSize:25 , 
    marginLeft:18, 
    marginTop:10, 
    color:"black" },
createTitle: {
    fontSize:20 , 
    marginLeft:18, 
    marginTop:20, 
   
    }, 
    loginTitle: {
      fontSize:17 , 
      marginLeft:18, 
      marginTop:20, 
     
      },  

views: { 
    borderBottomColor:"blue" ,
    borderBottomWidth:4,
    borderRadius:10,
    marginLeft:20,
    marginRight:150,
    marginTop:4
  },
  input:{
    marginLeft:18,
    marginTop:18,
    marginRight:18,
    borderBottomColor:"lightblue",
    borderBottomWidth:4,
    borderRadius:10,
    fontSize:14,
    color:"lightblue"
  }
});
