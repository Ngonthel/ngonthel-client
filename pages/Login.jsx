import { View, Text, StyleSheet, StatusBar, TextInput } from "react-native";
import Logo from "../assets/logo-gowez.svg";
export default function Login() {
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={{ alignItems : 'center'}}>
      <Logo width={250} />
      <Text style={{fontSize : 26 , fontWeight : 'bold'}}>Login</Text>
      </View>
      <View style={styles.containerForm}>
        <TextInput  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 14,
    backgroundColor : 'white'
  },
  containerForm : {
    padding : 15,
    backgroundColor : '#696e74',
    marginTop : 20,
    borderRadius : 10
  }
});
