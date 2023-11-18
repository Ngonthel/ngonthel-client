import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import Cardlead from "../components/CardLeaderboard";

export default function Leaderboard() {
  const DATA = [
    {
      id: "1",
      title : "res"
    },
    {
      id: "2",
      title : "res"
    },
    {
      id: "3",
      title : "res"
    },
    {
      id: "4",
      title : "res"
    },
    {
      id: "5",
      title : "res"
    },
    {
      id: "6",
      title : "res"
    },
    {
      id: "7",
      title : "res"
    },
    {
      id: "8",
      title : "res"
    },
    {
      id: "9",
      title : "res"
    },
    {
      id: "10",
      title : "res"
    },
    {
      id: "11",
      title : "res"
    },
    {
      id: "12",
      title : "res"
    },
    {
      id: "13",
      title : "res"
    },
    {
      id: "14",
      title : "res"
    },
    {
      id: "15",
      title : "res"
    },
    {
      id: "16",
      title : "res"
    },
    {
      id: "17",
      title : "res"
    },

  ];

  return (
    <ImageBackground
      source={require("../assets/bg-leaderboard.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.AndroidSafeArea}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LEADERBOARD</Text>
        </View>
        {/* <ScrollView style={styles.containerList}  showsVerticalScrollIndicator={false}>
          <Cardlead />
        </ScrollView> */}
        <FlatList
        style={styles.containerList}
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item  , index}) => <Cardlead title={item.title} index={index} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" || Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
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
