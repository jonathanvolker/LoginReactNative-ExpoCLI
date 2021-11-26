import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import { Button , TextInput } from 'react-native-paper';
import axios from 'axios';

export default function Menu(props) {
const [user, setUser] = useState({});

useEffect(() => {
  setUser(props)
  
},[])
console.log(props)
async function goTable(e) {
  props.navigation.navigate("Table"),{user:user}

 };

  return (
    <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="lightblue" barStyle="light-content" />
    
     
      <View style={styles.view1} />
      <Text style= {styles.bottomTitle}> 
         Bienvenido {props.firstName}
      </Text>  
       <Text style= {styles.bottomTitle}> 
         Seleccione la mesa
      </Text>   

      <Button
          style={styles.input}
          mode="outlined" 
          onPress={(e)=>goTable(e) } >
             mesa
      </Button> 
      <View style={styles.view1} />
    
    <Text style= {styles.bottomTitle}> 
      Ver menus
   </Text>   

   <Button
       style={styles.input}
       mode="outlined" 
       onPress={ ()=> props.navigation.navigate("Menus")} >
          Menus
   </Button> 

    
    </KeyboardAvoidingView>
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
    marginTop:5, 
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
  },
  homeButton:{
    marginTop:18,
    marginRight:200,
    borderBottomColor:"lightblue",
    borderBottomWidth:4,
    borderRadius:10,
    fontSize:14,
    color:"lightblue"
  }
});
