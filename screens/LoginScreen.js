import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import { Button , TextInput } from 'react-native-paper';
import axios from 'axios'

export default function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token = "";
    
    const handleEmailChange =(e)=>{
      //e.preventDefault()
      setEmail(e);
    }
    const handlePasswordChange =(e)=>{
     // e.preventDefault()
      setPassword(e);
    }
    
    async function handleSubmit(e) {
     // e.preventDefault();ç
     if(!/\S+@\S+\.\S+/.test(email)) {
      alert('el usuario tiene que ser un email');
    } 
    else if(password.length < 6) {
      alert("la contraseña debe tener 6 caracteres")
    } else {
      const data = { 
        email : email,
        password : password,
        
      }
      const post = await axios.post("https://apimongoprueba.herokuapp.com/signin",data)
      const response = await post;
      console.log(response.data)
  
      if(response.data.error==="Must provide email and password'"){
          alert("debe ingresar usuario y contraseña")
      }else if(response.data.error==="not user"){
          alert("usuario no registrado")
      }else {
        if(response.data.token){
          token = response.data.token;
          alert("usuario creado con exito!!!")
           props.navigation.navigate('Login',{token:token})
        }
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
          Iniciar sesion
      </Text>   
      
      <Text style= {styles.loginTitle}> 
          ingrese su mail
      </Text>  
      <TextInput style={styles.input}
                 mode="outlined"
                 name="email"
                 label="Email"
                 value ={email}
                 onChangeText={e => handleEmailChange(e)}
                 />  
      <Text style= {styles.loginTitle}> 
          ingrese su contraseña
      </Text>   
      <TextInput 
                style={styles.input}
                mode="outlined"
                name="password"
                label="Password"
                value ={password}
                onChangeText={e => handlePasswordChange(e)}
      /> 
   

      <TouchableOpacity>
        
        <Button
            style={styles.input}
            mode="outlined" 
            onPress={(e)=> { handleSubmit(e)}} >
              Iniciar sesion
        </Button> 



      

     <Text style= {styles.loginTitle} > 
         No tiene cuenta? puede crear una ...
     </Text>
     <Button
            style={styles.input}
            mode="outlined" 
            onPress={()=> props.navigation.navigate("Signup")} >
              Crear una cuenta nueva
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
    marginTop:25, 
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
      fontSize:15 , 
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
