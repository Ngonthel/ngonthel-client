import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
} from "react-native";
import Cardlead from "../components/CardLeaderboard";

export default function Leaderboard() {
  return (
    <ImageBackground
      source={require("../assets/bg-leaderboard.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.AndroidSafeArea}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LEADERBOARD</Text>
        </View>
        <ScrollView style={styles.containerList}  showsVerticalScrollIndicator={false}>
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
          <Cardlead />
        </ScrollView>
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
  },
  containerList: {
    marginTop: 10,
  },
});
