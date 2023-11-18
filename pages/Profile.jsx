import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.AndroidSafeArea}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../assets/avatar.gif")}
            style={styles.avatar}
          />
        </View>
        <View style={{ marginTop: 50, marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Personal Information
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Name : </Text>
            <Text style={styles.containTitle}>Agus Bensin</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Username : </Text>
            <Text style={styles.containTitle}>Agus Anjay Slebew</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Address : </Text>
            <Text style={styles.containTitle}>Sebelah Bebek Purnama</Text>
          </View>
        </View>
        <View style={{ marginTop: 50, marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Private Information
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Email : </Text>
            <Text style={styles.containTitle}>agusbensin@gmail.com</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Phone Number : </Text>
            <Text style={styles.containTitle}>+62 2390129301</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Gender : </Text>
            <Text style={styles.containTitle}>Male</Text>
          </View>
        </View>
        <View style={{ marginTop: 50, marginBottom: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Cycle Statistics
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Total Point : </Text>
            <Text style={styles.containTitle}>12301 pts</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Total Time : </Text>
            <Text style={styles.containTitle}>20 Hours</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.title}>Total Distance : </Text>
            <Text style={styles.containTitle}>123122 m</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 16,
    fontWeight: "500",
    color: "#B7BAC3",
    marginVertical: 5,
  },
  containTitle: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "500",
  },
});
