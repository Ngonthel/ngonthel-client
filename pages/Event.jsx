import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Event() {
  return (
    <View style={styles.AndroidSafeArea}>
        {/* TITLE EVENTS */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: Platform.OS === "ios" ? 15 : 10,
        }}
      >
        <Text
          className="font-bold text-[#293038]"
          style={{
            fontSize: 24,
            marginTop: Platform.OS === "ios" ? 15 : 10,
          }}
        >
          Events
        </Text>
      </View>

      {/* FILTER EVENT */}
      <View style={styles.RowRecentHistory} >
      <Text style={styles.FilterData}>Active Event</Text>
      <Text style={styles.FilterData}>Past Event</Text>
      <Text style={styles.FilterData}>Your Event</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" || Platform.OS === "ios"
        ? StatusBar.currentHeight
        : 0,
    paddingHorizontal: 14,
    backgroundColor: "white",
  },
  RowRecentHistory: {
    flexDirection: "row",
    gap: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 15 : 10,
    // padding: 3,
  },
  FilterData: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    fontWeight: "bold",
    color: "#293038",
  },
});
