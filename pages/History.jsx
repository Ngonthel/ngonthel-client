import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  FlatList,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import CardHistory from "../components/CardHistory";
export default function History() {
  const DATA = [
    {
      startTime: "2023-11-18T08:00:00",
      endTime: "2023-11-18T09:30:00",
      avgSpeed: 15.5,
      point: "A to B",
      distance: 20.3,
    },
    {
      startTime: "2023-11-19T14:30:00",
      endTime: "2023-11-19T16:00:00",
      avgSpeed: 12.2,
      point: "C to D",
      distance: 15.8,
    },
    {
      startTime: "2023-11-20T09:45:00",
      endTime: "2023-11-20T11:15:00",
      avgSpeed: 18.0,
      point: "E to F",
      distance: 25.1,
    },
    {
      startTime: "2023-11-21T07:15:00",
      endTime: "2023-11-21T08:00:00",
      avgSpeed: 10.5,
      point: "G to H",
      distance: 12.7,
    },
    {
      startTime: "2023-11-22T17:30:00",
      endTime: "2023-11-22T19:00:00",
      avgSpeed: 14.8,
      point: "I to J",
      distance: 18.4,
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.AndroidSafeArea}>
      {/* History Lates */}
      {/* <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          className="font-bold text-[#293038]"
          style={{
            fontSize: 24,
            marginTop: Platform.OS === "ios" ? 15 : 10,
          }}
        >
          History Latest
        </Text>
      </View> */}
      <View style={styles.ContainerHistoryLatest}>
        <View style={styles.CardShadow}>
          <View>
            <Text style={styles.TitleHistory}>Distance</Text>
            <Text style={styles.DataHistory}>75 Km/H</Text>
          </View>
        </View>
        <View style={styles.CardShadow}>
          <View>
            <Text style={styles.TitleHistory}>Speed</Text>
            <Text style={styles.DataHistory}>75 Km/H</Text>
          </View>
        </View>
        <View style={styles.CardShadow}>
          <View>
            <Text style={styles.TitleHistory}>Time</Text>
            <Text style={styles.DataHistory}>75 Km/H</Text>
          </View>
        </View>
      </View>

      {/* CHART */}
      <View
        style={styles.ChartShadow}
      >
        <LineChart
          data={{
            labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
            datasets: [
              {
                data: [
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 40} // from react-native
          height={200}
          // yAxisLabel="$"
          yAxisSuffix="Km"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            // backgroundColor: "black",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgb(252, 193, 41)`,
            labelColor: (opacity = 1) => `rgb(21, 20, 27)`,
            style: {
              borderRadius: 16,
              backgroundColor: "red",
            },
            propsForDots: {
              r: "5",
              strokeWidth: "2",
              stroke: "#FFC329",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            // borderRadius: 16,
          }}
        />
      </View>

      {/* My History */}
      <Text
        className="font-bold text-[#293038]"
        style={{
          fontSize: 24,
          marginTop: Platform.OS === "ios" ? 15 : 10,
        }}
      >
        My History
      </Text>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardHistory item={item} />}
        keyExtractor={(item) => item.id}
      />
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
  TitleHistory: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    fontWeight: "bold",
    color: "#293038",
  },
  DataHistory: {
    fontSize: Platform.OS === "ios" ? 14 : 10,
    textAlign: "center",
    marginTop: 1,
  },
  CardShadow: {
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
  },
  ContainerHistoryLatest: {
    marginTop: 3,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },
  ChartShadow: {
    marginTop: 20,
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
  }
});
