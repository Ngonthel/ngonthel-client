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
      source={require("../assets/bg-leaderboard.jpg")}
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
        {/* INI GARIS UNDERLINE */}
        <View style={{ borderBottomWidth: 2, borderBottomColor: "grey" }} />
        {/* INI GARIS UNDERLINE */}
        <View style={{ flex: 1 }} />

        <View style={{ flex: 2 }}>
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.title}>Email : </Text>
            <Text style={{ fontSize: 16 }}>agusbensing@mail.com</Text>
          </View>
          {/* INI GARIS UNDERLINE */}
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginVertical: 3,
            }}
          />
          {/* INI GARIS UNDERLINE */}
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.title}>Phone Number : </Text>
            <Text style={{ fontSize: 16 }}>+62 8123432423</Text>
          </View>
          {/* INI GARIS UNDERLINE */}
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginVertical: 3,
            }}
          />
          {/* INI GARIS UNDERLINE */}
          <View style={{ marginVertical: 5 }}>
            <Text style={styles.title}>Address : </Text>
            <Text style={{ fontSize: 16 }}>jalan Jalan</Text>
          </View>
          {/* INI GARIS UNDERLINE */}
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginVertical: 3,
            }}
          />
        </View>
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
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
