import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import { Button , TextInput } from 'react-native-paper';

export default function SignupScreen() {
const [state, setState] = useState({
  email:"",
  password:"",
  password2:"",
});
console.log(state)

const handleChange = (e) => {
  setState({
      ...state,
      [e.target]: e.target.value
  })
};

async function handleSubmit(e) {
  e.preventDefault();
   const response =  axios.post("http://localhost:3001/sigup", state).
    then(response => {
      console.log(response.data.data)
            if(response.data.message === "juego creado"){
                window.location.href = `/gamecreated` 

            }})
};

  return (
    <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="lightblue" barStyle="light-content" />
      <Text style={ styles.title} >
          Bienvenido 
      </Text>
      <View style={styles.view1} />
    
       <Text style= {styles.bottomTitle}> 
          Ingrese su correo y contraseña
      </Text>   
      
      <TextInput style={styles.input}
                 mode="outlined"
                 name="email"
                 label="Email"
                 value ={state.email}
                 onChangeText={e => handleChange(e.target)}
                 />  
      <Text style= {styles.loginTitle}> 
          ingrese su contraseña
      </Text>   
      <TextInput 
                style={styles.input}
                mode="outlined"
                name="password"
                label="Password"
                value ={state.password}
                onChangeText={e => handleChange(e.target)}
      /> 
       <Text style= {styles.loginTitle}> 
          repita su contraseña
      </Text> 
       <TextInput 
                style={styles.input}
                mode="outlined"
                name="password2"
                label="Password"
                value ={state.password2}
                onChangeText={e => handleChange(e)}
      />                    
    


   
      <Button
          style={styles.input}
          mode="outlined" 
          onPress={(e)=> {console.log("pressed!")}} >
             Crear cuenta
      </Button> 

      <TouchableOpacity>
        <Text style= {styles.loginTitle}> 
            ya tiene una nueva cuenta?
        </Text> 
        <Button
            style={styles.input}
            mode="outlined" 
            onPress={(e)=> {console.log("pressed!")}} >
              Iniciar sesion
        </Button> 
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
