import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, Picker, Button, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';

const image = require('./img/background.jpg');

const Creer = () => {
  const goToAcceil = () => {
     Actions.Accueil()
  }
    return (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
     
    <Image 
        source={
          require('./img/new.png')
        } style ={styles.image2}
        />
      <Picker       
        style={styles.picker1}
      >
        <Picker.Item label="Femme" value="Femme" />
        <Picker.Item label="Masculin" value="Masculin" />
      </Picker>
      <Picker       
        style={styles.picker2}
      >
        <Picker.Item label="A" value="A" />
        <Picker.Item label="O" value="o" />
        <Picker.Item label="AB" value="AB" />
      </Picker>
      <Picker       
        style={styles.picker3}
      >
        <Picker.Item label="Votre Age" value="" />
        <Picker.Item label="Masculin" value="Masculin" />
      </Picker>

      <TextInput
        style={styles.textInput1}
        placeholder="  Saisir votre Nom ici ..."
        />
      <TextInput
        style={styles.textInput2}
        placeholder="  Saisir votre Prenom ici ...        "
        />
      <TextInput
        style={styles.textInput3}
        placeholder="  Saisir votre Date de naissance ici ...        "
        />
      <TextInput
        style={styles.textInput4}
        placeholder="  Saisir votre Lieu de naissance ici ...        "
        />  
      <Picker       
        style={styles.picker4}
      >
        <Picker.Item label="Celibataire" value="Celibataire" />
        <Picker.Item label="Marie" value="Marie" />
        <Picker.Item label="-" value="-" />
      </Picker>
      <TextInput
        style={styles.textInput5}
        placeholder="  Saisir votre Telephone ici ... "
        />
      <TextInput
        style={styles.textInput6}
        placeholder="  Saisir votre Email ici ...        "
        />
      <TextInput
        style={styles.textInput7}
        placeholder="  Saisir mot de passe         "
        />
      <TextInput
        style={styles.textInput8}
        placeholder="  Confirmer mot de passe        "
        />  
      <TouchableOpacity onPress = {goToAcceil}
        style={styles.button3} 
      >
        <Text style={{color:'white'}}>Ajouter</Text>
      </TouchableOpacity> 
    </ImageBackground>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",  

    
  },
  image2: {
    width: 100,
    height: 100,
    marginLeft:150,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: "center",
    marginTop:2
  },

  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  textInput1:{
    height: 40, 
    width:'80%',
    marginLeft:40,
    marginBottom:10,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInput2:{
    height: 40, 
    width:'80%',
    marginLeft:40,
    marginBottom:10,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInput3:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    marginLeft:40,
    marginBottom:10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInput4:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput5:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput6:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput7:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  textInput8:{
    height: 40, 
    width:'80%',
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft:40,
    marginBottom:10,
  },
  button:{
    width:'50%',
    height:'50%',
    backgroundColor : '#FFF000'
  },
  button1:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:50,
    height:50,
    marginLeft:20,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button2:{
    
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width:50,
    height:50,
    marginLeft:250,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button3:{
    alignItems: "center",
    backgroundColor: "red",
    padding: 5,
    width:'60%',
    height:40,
    marginLeft:90,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  picker1:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40
  },
  picker2:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40
  },
  picker3:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40
  },
  picker4:{
    marginLeft:40,
    marginBottom:10,
    width:'83%',
    height:40
  },
});

export default Creer


/*


<View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >
                <TouchableOpacity  activeOpacity={0.5}>
                    <Image
                    source={require('./img/left.png')}
                    style={styles.button1}
                    />  
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.5}>
                    <Image
                    source={require('./img/logout.jpg')}
                    style={styles.button2}
                    />  
                </TouchableOpacity>
      </View> 

      */