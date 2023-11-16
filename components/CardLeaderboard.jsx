import { View, Text, StyleSheet , Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Cardleaderboard() {
  return (
    <View style={styles.card}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: "500",
          marginRight: 20,
        }}
      >
        1
      </Text>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/avatar.gif')} style={styles.avatar}/>
      </View>
      <View style={{alignSelf : 'center'}}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Agus Bensin</Text>
        <Text>1000 points</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 7,
    borderRadius: 5,
    flexDirection: "row",
    marginVertical : 3
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50, 
    overflow: 'hidden',
    alignSelf : "center",
    marginRight: 20
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    backgroundColor: "#D9D9D9",
  },
});
