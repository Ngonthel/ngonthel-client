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
    <ImageBackground
      source={require("../assets/bg-profile1.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.AndroidSafeArea}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../assets/avatar.gif")}
            style={styles.avatar}
          />
        </View>
        <View style={{ alignSelf: "center", marginVertical: 15 }}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Agus Bensin</Text>
        </View>
        <View style={{ borderBottomWidth: 2, borderBottomColor: "grey" }} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 14,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
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
});
