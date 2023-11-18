import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CardHistory({ item }) {
  const currentDateTime = new Date();
  const formattedDate = `${currentDateTime.toDateString()}`;

  const startDate = new Date(item.startTime);
  const endDate = new Date(item.endTime);

  // Format waktu
  const formattedStartTime = startDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedEndTime = endDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Text style={styles.SubTitle}>{formattedDate}</Text>
      <View style={styles.CardShadow}>

        <View style={styles.ContainerCard}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons
              name="hand-coin"
              size={24}
              color="#ffc329"
            />
          </View>
          <View>
            <Text style={styles.TitleHistory}>Points</Text>
            <Text style={styles.DataHistory}>0 Point</Text>
          </View>
        </View>
        <View style={styles.ContainerCard}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons
              name="map-marker-distance"
              size={24}
              color="#ffc329"
            />
          </View>
          <View>
            <Text style={styles.TitleHistory}>Distance</Text>
            <Text style={styles.DataHistory}>1 Km</Text>
          </View>
        </View>
        <View style={styles.ContainerCard}>
          {/* <View className="flex-1 items-left justify-center"> */}

          {/* </View> */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons
              name="car-speed-limiter"
              size={24}
              color="#ffc329"
            />
          </View>
          <View>
            <Text style={styles.TitleHistory}>Average Speed</Text>
            <Text style={styles.DataHistory}>1 Km</Text>
          </View>
        </View>

        <View style={styles.ContainerCard}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <MaterialCommunityIcons
              name="clock-time-four"
              size={24}
              color="#ffc329"
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.TitleHistory}>Start Time</Text>
            <Text style={styles.DataHistory}>{formattedStartTime}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.TitleHistory}>|</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.TitleHistory}>End Time</Text>
            <Text style={styles.DataHistory}>{formattedEndTime}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  DataHistory: {
    fontSize: Platform.OS === "ios" ? 14 : 10,
    marginTop: 1,
    color: "#696e74",
  },
  SubTitle: {
    marginTop: 20,
    marginBottom: 7,
    fontSize: 14,
    fontWeight: "bold",
    color: "#293038",
  },
  CardShadow: {
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    // height: "50%",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 2,
      },
    }),
    padding: Platform.OS === "ios" ? 8 : 7.5,
  },
  ContainerCard: {
    flexDirection: "row",
    gap: 12,
    padding: 3,
    alignItems: "left",
    justifyContent: "left",
  },
  TitleHistory: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#293038",
  },
});
