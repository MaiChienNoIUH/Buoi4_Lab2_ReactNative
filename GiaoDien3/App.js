import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, TextInput } from 'react-native';

export default function App() {
  // Tạo trạng thái để kiểm soát việc hiển thị TextInput
  // const [showLowerCase, setShowLowerCase] = useState(false);
  // const [showUpperCase, setShowUpperCase] = useState(false);
  // const [showNumbers, setShowNumbers] = useState(false);
  // const [showSpecialSymbols, setShowSpecialSymbols] = useState(false);

   const [result, setResult] = useState(''); // Ban đầu là chuỗi rỗng

  return (
    <View style={styles.container}>
      {/* Phần tiêu đề */}
      <View style={styles.topView}>
        <Text style={styles.textTop}>
          PASSWORD GENERATOR
        </Text>
        <View>
          <Text style={{ backgroundColor: '#090214', color: 'white', width: 170, height: 30 }}>
            {/* Chỗ này để trống */}
            {result}
          </Text>
        </View>
      </View>

      {/* Phần các tùy chọn */}
      <View style={styles.middleView}>
        <View style={styles.subMiddleView}>
          <Text style={styles.textMiddle}>
            Password length
          </Text>
          <TextInput style={{ backgroundColor: 'white', color: 'black', width: 80, height: 20 }} />
        </View>

        {/* Tùy chọn "Include lower case letter" */}
        <TouchableOpacity onPress={() => setResult('Include lower case letter')}>
          <Text style={styles.textMiddle}>
            Include lower case letter
          </Text>
        </TouchableOpacity>
   
        <TouchableOpacity onPress={() => setResult('Include upper case letters')}>
          <Text style={styles.textMiddle}>
            Include upper case letters
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setResult('Include numbers')}>
          <Text style={styles.textMiddle}>
            Include numbers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setResult('Include special symbols')}>
          <Text style={styles.textMiddle}>
            Include special symbols
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nút tạo mật khẩu */}
      <View style={styles.bottomView}>
        <Button title="GENERATE PASSWORD" style={{ width: 10 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#8c4eed',
    padding: 15,
  },

  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#340f6b',
  },

  textTop: {
    flex: 1,
    color: 'white',
    fontSize: 24,
  },

  middleView: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#340f6b',
  },

  subMiddleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textMiddle: {
    color: 'white',
    fontSize: 20,
  },

  textInput: {
    backgroundColor: 'white',
    color: 'black',
    height: 30,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },

  bottomView: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#340f6b',
  },
});
