import { View, Text, StyleSheet } from "react-native";

export default function CardHistory({ item }) {
  const currentDateTime = new Date();
  const formattedDate = `${currentDateTime.toDateString()}`;

  const startDate = new Date(item.startTime);
  const endDate = new Date(item.endTime);

  // Mendapatkan jam dan menit dari objek Date
  const startHours = startDate.getHours();
  const startMinutes = startDate.getMinutes();

  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();

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
    <View
      style={{
        marginTop: Platform.OS === "ios" ? 20 : 20,
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
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#293038",
          }}
        >
          {formattedDate}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 90,
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#293038",
            }}
          >
            Start Time
          </Text>
          <Text style={styles.DataHistory}>{formattedStartTime}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#293038",
            }}
          >
            |
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#293038",
            }}
          >
            End Time
          </Text>
          <Text style={styles.DataHistory}>{formattedEndTime}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DataHistory: {
    fontSize: Platform.OS === "ios" ? 14 : 10,
    textAlign: "center",
    marginTop: 1,
  },
});
