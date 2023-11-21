import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cardleaderboard({ data, index }) {
  let medalColor = "transparent"; 
  if (index === 0) {
    medalColor = "#FFD700"
  } else if (index === 1) {
    medalColor = "#C0C0C0"
  } else if (index === 2) {
    medalColor = "#964B00"
  }
  // console.log(data,"<><><<<<<<<<<<<>>>>>>>>>>>>>>");
  return (
    <View style={styles.card}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        {index + 1}
      </Text>
      <View style={styles.avatarContainer}>
        <Image source={require("../assets/default-person.jpg")} style={styles.avatar} />
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{data.name}</Text>
        <Text>{data.totalPoint} points</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
      <FontAwesome5 name="medal" size={24} color={medalColor} />
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
    marginVertical: 3,
    justifyContent : "space-around"
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    alignSelf: "center",
    marginRight: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    backgroundColor: "#D9D9D9",
  },
});
