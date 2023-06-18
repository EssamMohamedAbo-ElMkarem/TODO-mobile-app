import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("...");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.signupLabel}>TODO Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your username"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 

      <TouchableOpacity style={styles.signupBtn} onPress={() => {
          try{
            fetch('http://192.168.1.5:3000/register', {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              mode: 'no-cors',
              body: JSON.stringify({
                "email":email,
                "password":password,
                "tasks":[]
              })
            }).then(response => response.json())
            .then(json => setRes(json));
              setResult("Signed Up successfully");
              setTimeout(() => {
                navigation.navigate('Login');
              }, 1500);
          }
          catch(err){
            setResult("Couldn't sign up try again later");
          }
      }}>
        <Text style={styles.signupText}>Sign Up</Text> 
      </TouchableOpacity> 
      <Text style={styles.ResultText}>{result}</Text>
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
    justifyContent: "center",
  },
  signupLabel:{
    fontSize:50,
    marginBottom:30,
  },
  inputView: {
    backgroundColor: "#d3d3d3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  signupBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#55BCF6",
  },

  ResultText: {
    fontSize:20,
    marginTop:15
  },
});

export default SignUp;