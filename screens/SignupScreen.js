import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import { Button , TextInput } from 'react-native-paper';
import axios from 'axios';

export default function SignupScreen(props) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [password1, setPassword1] = useState("");
const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
let token = "";


const handleEmailChange =(e)=> {
 
  setEmail(e);
}

const handlePasswordChange =(e)=>{
 // e.preventDefault()
  setPassword(e);
}
const handlePassword1Change =(e)=>{
  // e.preventDefault()
   setPassword1(e);
 }
const handleNameChange =(e)=>{
  // e.preventDefault()
   setName(e);
 }
 const handleLastNameChange =(e)=>{
  // e.preventDefault()
   setLastName(e);
 }

async function handleSubmit(e) {
  if(!/\S+@\S+\.\S+/.test(email)) {
    alert('el usuario tiene que ser un email');
  } 
  else if(password.length < 6) {
    alert("la contraseña debe tener 6 caracteres")
  }else if(password1.length < 6) {
    if(password1 !== password) {
      alert("las contraseñas no coinciden")
    }

  } else if(name.length < 1){
    alert("el nombre no puede estar vacio")
  }else if(lastName.length < 1){
    alert("el apellido no puede estar vacio")
  }else {
    const data = { 
      email : email,
      password : password,
      firstName : name,
      lastName : lastName
    }
    const post = await axios.post("https://apimongoprueba.herokuapp.com/signup",data)
    const response = await post;
    console.log(response.data)

    if(response.data.error==="failed to create user"){
        alert("fallo al crear el usuario")
    }
   
    if(response.data.token){
         token = response.data.token;
         alert("usuario creado con exito!!!")
          props.navigation.navigate('Login',{token:token})
    }

  }

 };

  return (
    <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="lightblue" barStyle="light-content" />
     <Button
          style={styles.homeButton}
          mode="outlined" 
          onPress={()=> props.navigation.navigate("Home")} >
             Home
      </Button>
     
      <View style={styles.view1} />
    
       <Text style= {styles.bottomTitle}> 
         Nueva cuenta
      </Text>   

      <TextInput style={styles.input}
                 mode="outlined"
                 name="nombre"
                 label="Nombre"
                 value ={name}
                 onChangeText={e => handleNameChange(e)}
                 />  
      
      <TextInput style={styles.input}
                 mode="outlined"
                 name="apellido"
                 label="Apellido"
                 value ={lastName}
                 onChangeText={e => handleLastNameChange(e)}
                 />  
      <TextInput style={styles.input}
                 mode="outlined"s
                 name="email"
                 label="email"
                 value ={email}
                 onChangeText={e => handleEmailChange(e)}
                 />
     
      <TextInput 
                style={styles.input}
                mode="outlined"
                name="password"
                label="contraseña"
                value ={password}
                onChangeText={e => handlePasswordChange(e)}
      /> 
         <TextInput 
                style={styles.input}
                mode="outlined"
                name="password1"
                label="repetir contraseña"
                value ={password1}
                onChangeText={e => handlePassword1Change(e)}
      /> 
     
      <Button
          style={styles.input}
          mode="outlined" 
          onPress={(e)=> { handleSubmit(e)}} >
             Crear cuenta
      </Button> 

      <TouchableOpacity>
        <Text style= {styles.loginTitle}  onPress={()=> props.navigation.navigate("Login")}> 
            ya tiene una? Inicia sesion aqui!!!
        </Text> 
  
       
      </TouchableOpacity>

    
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
