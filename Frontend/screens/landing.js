import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const Landing = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.signupLabel}>TODO Sign Up</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.btnText}>Sign Up</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>Log In </Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Todo')}>
        <Text style={styles.btnText}>Guest </Text> 
      </TouchableOpacity>
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

  btn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    margin:15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#55BCF6",
  },
});

export default Landing;