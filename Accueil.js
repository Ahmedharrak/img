
import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity,ScrollView  } from "react-native";
import { Actions } from 'react-native-router-flux';

const image = require('./img/background.jpg');

const Accueil = () => {
  const goToCarnet = () => {
     Actions.Carnet()
  }
 const goToCabinet = () => {
  Actions.Cabinets()
}
const goToService = () => {
  Actions.Services()
}
const goToHopitaux = () => {
 Actions.Hopitaux()
}
const goToLaboratoires = () => {
Actions.Laboratoires()
}
    return (
      <ImageBackground source={image} style={styles.image}>
  <ScrollView style={styles.container}>
            <Text style={styles.text}>Accueil</Text>
            <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >
            <Image source={require('./img/Carnetpersonne.jpg')} style={styles.image1}  />
              <TouchableOpacity onPress = {goToCarnet}
              style={styles.button1}
            >
              <Text style={{color:'red'}}>Carnet personne</Text>
            </TouchableOpacity>
      </View>  
      <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >   
            <Image source={require('./img/Cabinets.png')} style={styles.image3}  />
            <TouchableOpacity  onPress = {goToCabinet}
              style={styles.button3} 
            >
              <Text style={{color:'red'}}>Cabinets selon symptômes</Text>
            </TouchableOpacity>  
      </View> 
      <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >     
            <Image source={require('./img/Services.jpg')} style={styles.image4}  />
            <TouchableOpacity onPress = {goToService}
              style={styles.button4} 
            >
              <Text style={{color:'red'}}>  Services d'urgence </Text>
            </TouchableOpacity> 
      </View> 
      <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >
      <Image source={require('./img/Hopitaux.jpg')} style={styles.image5}  />
      <TouchableOpacity
        style={styles.button5}  onPress = {goToHopitaux}
      >
        <Text style={{color:'red'}}>Hôpitaux et cliniques </Text>
      </TouchableOpacity>
      </View> 
      <View       
            style={{
            flexDirection: "row",
            height: 100,
            padding: 20
      }}
       >
      <Image source={require('./img/Laboratoires.jpg')} style={styles.image6}  />
      <TouchableOpacity
        style={styles.button6}  onPress = {goToLaboratoires}
      >
        <Text style={{color:'red'}}>Laboratoires d'Analyses </Text>
      </TouchableOpacity>        
      </View>            
    
  </ScrollView></ImageBackground>
    )}

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
  text: {
    color: "yellow",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:'center',
    marginTop:30,
    marginBottom:30
    
  },
  button1:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button2:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button3:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button4:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button5:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button6:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width:'60%',
    height:'80%',
    marginLeft:10,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  button7:{
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
  button8:{
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
  image1:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image2:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image3:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image4:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image5:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  image6:{
    width:50,
    height:50,
    marginLeft:40,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    
  },
  image7:{},


});

export default Accueil




