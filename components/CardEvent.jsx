import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";

export default function CardEvent({ item }) {
  return (
         <View style={styles.ShadowGoCycling}>
            <Text style={styles.Date}>Date</Text>
            <Text style={styles.Title}>Nama Event</Text>
            <Text style={styles.Destination}>From - Destination</Text>
            {/* <View style={styles.CardShadow}> */}
            <View style={{ flex: 1, flexDirection: 'column' }}>
            <MapView style={styles.map}  />
            </View>
            {/* </View> */}
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => navigation.navigate("Cycling")}
              >
                <Text style={styles.TextButton}>See Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  ShadowGoCycling: {
    // backgroundColor: "white",
    backgroundColor: "red",
    // marginTop: 15,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        // shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    padding: 8,
    // height: '70%',
    width: '100%'
  },
  Title: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    // marginTop: Platform.OS === "ios" ? 15 : 10,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#293038",
    marginTop: 1,
  },
  Date: {
    marginTop: 10,
    fontSize: Platform.OS === "ios" ? 15 : 10,
    color: "#FFC329",
    fontWeight: 'bold'
  },
  Destination: {
    fontSize: Platform.OS === "ios" ? 14 : 10,
    marginTop: 1,
    color: "#696e74",
    marginBottom: 10,
  },
  TouchableOpacity: {
    borderRadius: 10,
    width: '30%',
    height: 25,
    backgroundColor: "#FFC329",
    alignItems: "center",
    justifyContent: "center",
  },
  TextButton: {
    fontSize: 14,
    color: "white",
  },
  // CardShadow: {
  //   marginTop: 10,
  //   marginBottom: 10,
  //   // flex: 1,
  //   backgroundColor: "white",
  //   backgroundColor: "green",
  //   borderRadius: 10,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "rgba(0, 0, 0, 0.2)",
  //       shadowOffset: { width: 0, height: 2 },
  //       shadowOpacity: 1,
  //     },
  //     android: {
  //       elevation: 5,
  //     },
  //   }),
  //   padding: 3,
  //   alignItems: "center",
  // },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'black'
  // },
  map: {
    width: "100%",
    height: "50%",
    borderRadius: '10',
  },
  ButtonContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 10
  },
});
