import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("...");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.loginLabel}>TODO LOGIN</Text>
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

      <TouchableOpacity style={styles.loginBtn} onPress={() => {
          try{
            fetch('http://192.168.1.5:3000/login', {
              method: 'post',
              mode: 'cors',
              body: {
                "email":email,
                "password":password,
              }
            }).then(response => response.json())
              .then(json => console.log(json));
            setResult("Logged In successfully");
          }
          catch(err){
            setResult("Couldn't Log in try again later");
          }
      }}>
        <Text style={styles.loginText}>LOGIN</Text> 
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
  loginLabel:{
    fontSize:50,
    marginBottom:30,
  },
  image: {
    marginBottom: 40,
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

  loginBtn: {
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

export default LogIn;