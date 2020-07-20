import { ImageBackground,  StyleSheet, Text, View, Image, TextInput, value,onChangeText ,TouchableOpacity, Navigator} from "react-native";
import * as React from 'react';
import { Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


const image = require('./img/background.jpg');
const Login = () => {
  const goToAccueil= () => {
     Actions.Accueil()
  }
  
    const goToCreer= () => {
       Actions.Creer()
    }
return (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>SAHTKOM</Text>
      <Image 
        source={
          require('./img/login.jpg')
        } style ={styles.image2}
        />
        <Text style={styles.text1}>Nom User</Text>
        <TextInput
        style={styles.textInput1}
        
        value={value}
        />
        <Text style={styles.text2}>Mot de passe</Text>
        <TextInput
        style={styles.textInput2}
        
        value={value}
        />
        <TouchableOpacity onPress = {goToAccueil}
          style={styles.button1} 
          >
          <Text style={{color:'white'}} >Login</Text>
        </TouchableOpacity> 
        <TouchableOpacity  onPress = {goToCreer}
          style={styles.button1} 
          >
        <Text style={{color:'white'}} >Créer un compte</Text>
        </TouchableOpacity> 
        <Text style={styles.text4}>Informations de compte oubliées?</Text>

    </ImageBackground>
    
  </View>
);
      }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image2:{
    
    width:150,
    height:150,
    marginLeft:130,
    marginBottom:20
    
  },
  text: {
    fontSize: 30,
    fontWeight: "bold" ,
    textAlign:'center',
    marginBottom:20
    
  },
  text1:{  
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    marginBottom:20
  },
  text2:{  
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    marginBottom:20
    
  },
  textInput1:{
    height: 40, 
    width:'60%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:100,
    marginBottom:20
  },
  textInput2:{
    height: 40, 
    width:'60%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:100,
    marginBottom:20
  },
  text3:{  
    color:'yellow',
    fontSize: 20,
    fontWeight: "bold" ,
    marginLeft:100,
    marginBottom:20
  },
  text4:{  
    color:'yellow',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:100,
    
  },
  button1:{
    alignItems: "center",
    backgroundColor: "red",
    padding: 5,
    width:'60%',
    height:40,
    marginLeft:100,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    marginBottom:20,
  },
});


export default Login