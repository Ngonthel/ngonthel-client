import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
function HomePage() {
  return (
    <View style={styles.AndroidSafeArea}>
      <View
        className="flex flex-row"
        style={{ marginTop: Platform.OS === "ios" ? 20 : 20 }}
      >
        <View className="flex-1 items-left justify-center">
          <Text
            className="text-lg text-[#696e74]"
            style={{ fontSize: Platform.OS === "ios" ? 16 : 11 }}
          >
            Hi, <Text className="font-bold text-[#293038]">[ Username ]</Text>
          </Text>
        </View>
        <View
          style={{
            borderWidth: 4,
            borderColor: "#FFC329",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <Image
            style={{ width: 48, height: 48 }}
            source={require("../assets/profile.jpg")}
          />
        </View>
      </View>
      <View
        style={{
          width: "85%",
          height: "10%",
          marginTop: Platform.OS === "ios" ? 10 : 20,
        }}
      >
        <Text
          style={{
            fontSize: Platform.OS === "ios" ? 24 : 15,
            fontWeight: "bold",
            color: "#696e74",
          }}
        >
          Get <Text style={{ fontWeight: "bold", color: "#293038" }}>Out!</Text>
        </Text>
        <Text
          style={{
            fontSize: Platform.OS === "ios" ? 24 : 15,
            fontWeight: "bold",
            color: "#696e74",
            marginTop: Platform.OS === "ios" ? 5 : 3,
          }}
        >
          Wheels Every{" "}
          <Text style={{ fontWeight: "bold", color: "#293038" }}>Zone</Text>
        </Text>
      </View>

      <View style={{ width: "100%", height: "100%" }}>
        <Image
          style={{
            width: "100%",
            height: "25%",
            marginTop: Platform.OS === "ios" ? 15 : 10,
          }}
          source={require("../assets/ngontel2.png")}
        />
        {/* RECENT HISTORY */}
        <Text
          className="font-bold mb-3 text-[#293038]"
          style={{
            fontSize: Platform.OS === "ios" ? 24 : 15,
            marginTop: Platform.OS === "ios" ? 15 : 10,
          }}
        >
          Recent History
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: 10,
              ...Platform.select({
                ios: {
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 1,
                },
                android: {
                  elevation: 5,
                },
              }),
              padding: Platform.OS === "ios" ? 15 : 7.5,
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 18 : 14,
                  fontWeight: "bold",
                  color: "#293038",
                }}
              >
                Distance
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 14 : 10,
                  textAlign: "center",
                  marginTop: 1,
                }}
              >
                50mil
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: 10,
              ...Platform.select({
                ios: {
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 1,
                },
                android: {
                  elevation: 5,
                },
              }),
              padding: Platform.OS === "ios" ? 15 : 7.5,
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 18 : 14,
                  fontWeight: "bold",
                  color: "#293038",
                }}
              >
                Speed
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 14 : 10,
                  textAlign: "center",
                  marginTop: 1,
                }}
              >
                75 Km/H
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: 10,
              ...Platform.select({
                ios: {
                  shadowColor: "rgba(0, 0, 0, 0.2)",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 1,
                },
                android: {
                  elevation: 5,
                },
              }),
              padding: Platform.OS === "ios" ? 15 : 7.5,
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 18 : 14,
                  fontWeight: "bold",
                  color: "#293038",
                }}
              >
                Time
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 14 : 10,
                  textAlign: "center",
                  marginTop: 1,
                }}
              >
                387 wH
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
              marginTop: Platform.OS === "ios" ? 5 : 3,
            }}
          >
            <Text
              style={{
                fontSize: Platform.OS === "ios" ? 16 : 10,
                fontWeight: "bold",
                color: "#FFC329",
              }}
            >
              See all 
            </Text>
          </View>
        </View>
        {/* GO CYCLING */}
        <Text
          className="font-bold mb-3 text-[#293038]"
          style={{
            fontSize: Platform.OS === "ios" ? 24 : 15,
            marginTop: Platform.OS === "ios" ? 15 : 10,
          }}
        >
          Go Cycling
        </Text>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
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
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/map.png")}
            />
            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text
                style={{
                  fontSize: Platform.OS === "ios" ? 15 : 8,
                  width: Platform.OS === "ios" ? 200 : 200,
                  marginTop: Platform.OS === "ios" ? 20 : 10,
                }}
              >
                Find your location, and unlock a world of cycling adventures
                with Gowez!
              </Text>
              <View
                style={{
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  // backgroundColor: "red",
                  marginBottom: "50",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 100,
                    width: Platform.OS === "ios" ? 50 : 50,
                    height: Platform.OS === "ios" ?  50 : 50,
                    backgroundColor: "#FFC329",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: Platform.OS === "ios" ? 16 : 8,
                      color: "white",
                    }}
                  >
                    Go
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </View>
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
});

export default HomePage;
