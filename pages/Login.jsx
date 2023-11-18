import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
} from 'react-native';
import Logo from '../assets/logoo.svg';

export default function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.AndroidSafeArea}
    >
      <View style={styles.logoContainer}>
        <Logo  width={250} />
      </View>
        <Text style={{ fontSize: 26, fontWeight: 'bold' , alignSelf : "center" }}>Login</Text>
      <View style={styles.containerForm}>
        <View>
          <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: '500' }}>Email:</Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              height: 40,
              fontSize: 18,
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
            placeholder="Enter Email ...."
          />
        </View>
        <View>
          <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: '500' }}>Password:</Text>
          <TextInput
            style={{
              backgroundColor: 'white',
              height: 40,
              fontSize: 18,
              borderRadius: 20,
              paddingHorizontal: 5,
            }}
            placeholder="Enter Password ...."
            secureTextEntry={true}
          />
        </View>
      </View>
      <View>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 14,
    backgroundColor: 'white',
    marginTop: -20
  },
  logoContainer: {
    alignItems: 'center',
    width: 'auto',
  },
  containerForm: {
    padding: 15,
    backgroundColor: '#F4F4F4',
    marginTop: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#293038',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical : 20,
    alignSelf : 'center',
    width :200
  },
  buttonText: {
    color: '#FFC329',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
