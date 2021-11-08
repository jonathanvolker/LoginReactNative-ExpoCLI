import React  from 'react';
import {StyleSheet, Text ,View} from 'react-native';
import { Button , TextInput } from 'react-native-paper';



export default function HomeScreen(props) {


  return (
  <View style={styles.container}>
  <View style={styles.titleContainer}>
    <Text style= {styles.title}> Bienvenido a la pagina de turnos</Text>
    
    <Text style= {styles.loginTitle}> Inicie sesion para que podamos registrar su pedido</Text>
    </View>
    <Button
          style={styles.input}
          mode="outlined" 
          onPress={()=> props.navigation.navigate("Login")} >
             Iniciar sesion
      </Button> 
      <Text style= {styles.loginTitle}> si no tiene cuenta puede crear una...</Text>
      <Button
          style={styles.input}
          mode="outlined" 
          onPress={()=> props.navigation.navigate("Signup")} >
             Nueva cuenta
      </Button> 

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
    titleContainer:{
        
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
    }
  });