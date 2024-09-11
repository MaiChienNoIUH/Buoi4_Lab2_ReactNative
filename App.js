import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, Button, TextInput} from 'react-native';

export default function App() {
  return (


    <View style = {styles.container}>
      <View style = {styles.topView}>
        <Text style = {styles.textTop}>
          PASSWORD GENERATOR
        </Text>
        <View>
             <Text style = {{backgroundColor: '#090214', color:'white', width: '170px', height:'30px'}}>
        </Text>
        </View>
      </View>

      <View style = {styles.middleView}>
        <View style = {styles.subMiddleView}>
          <Text style = {styles.textMiddle}>
            Password length
          </Text>
            <TextInput style = {{backgroundColor:'white',        color:'black', width: '80px', height: '20px'}}></TextInput>         
        </View>

        <Text style = {styles.textMiddle}>
          Include lower case letter
        </Text>
        <Text style = {styles.textMiddle}>
          Include upcase letters
        </Text>
        <Text style = {styles.textMiddle}>
          Include number
        </Text>
        <Text style = {styles.textMiddle}>
          Include special symbol
        </Text>
      </View>

      <View style = {styles.bottomView}>
        <Button title='GENERATE PASSWORD' style={{width: '10px'}}></Button>
      </View>       
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#8c4eed',
    padding:15
  },

  topView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#340f6b'
  },

  textTop:{
    flex:1,
    color:'white', fontSize: 24
  },

  middleView:{
    flex: 1,
    padding: '10px',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#340f6b'
  },

  subMiddleView:{
    flexDirection: 'row',
    justifyContent:  'space-between'
  },

  textMiddle:{
    color:'white',
    fontSize: 20
  },

  bottomView:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#340f6b'
  }
});
