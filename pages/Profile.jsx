import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
export default function Profile() {
  return (
    // <ImageBackground
    //   source={require("../assets/bg-leaderboard.jpg")}
    //   style={{ flex: 1 }}
    // >
    <View style={styles.AndroidSafeArea}>
      <View style={styles.avatarContainer}>
        <Image source={require("../assets/avatar.gif")} style={styles.avatar} />
      </View>
      <View style={{ marginTop : 50 , marginBottom : 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Personal Information
        </Text>
      </View>
      <View style={{ flexDirection: "row" , columnGap :15 }}>
        <View>
          <Text style={styles.title}>Name : </Text>
          <Text style={styles.title}>Username : </Text>
          <Text style={styles.title}>Address : </Text>
        </View>
        <View>
          <Text style={styles.containTitle}>Agus Bensin</Text>
          <Text style={styles.containTitle}>Agus Anjay Mabar</Text>
          <Text style={styles.containTitle}>Sebelah Mie Gacoan Deket Masjid</Text>
        </View>
      </View>
      <View style={{ marginTop : 50 , marginBottom : 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Private Information
        </Text>
      </View>
      <View style={{ flexDirection: "row" , columnGap :35 }}>
        <View>
          <Text style={styles.title}>Email : </Text>
          <Text style={styles.title}>Phone : </Text>
          <Text style={styles.title}>Gender : </Text>
        </View>
        <View>
          <Text style={styles.containTitle}>agusbensin@mail.com</Text>
          <Text style={styles.containTitle}>+62 12909210129</Text>
          <Text style={styles.containTitle}>Male</Text>
        </View>
      </View>
      <View style={{ marginTop : 50 , marginBottom : 15 }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
        Cycle Statistics
        </Text>
      </View>
      <View style={{ flexDirection: "row" , columnGap :15 }}>
        <View>
          <Text style={styles.title}>Total Point : </Text>
          <Text style={styles.title}>Total Time : </Text>
          <Text style={styles.title}>Total distance : </Text>
        </View>
        <View>
          <Text style={styles.containTitle}>10219039 pts</Text>
          <Text style={styles.containTitle}>20 Hour 20 Minutes</Text>
          <Text style={styles.containTitle}>21312 m</Text>
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 14,
    backgroundColor: "white",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    backgroundColor: "#D9D9D9",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#B7BAC3",
    marginVertical : 5
  },
  containTitle : {
    fontSize : 18,
    marginVertical : 5

  }
});
