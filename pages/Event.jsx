import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Tab, TabView } from "@rneui/themed";
import CardEvent from "../components/CardEvent";
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  ApolloProvider,
  gql,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const GET_EVENTS = gql`
  query GetEvents($headers: Headers!, $filter: String) {
    getEvents(headers: $headers, filter: $filter) {
      _id
      name
      eventCode
      eventDate
      createdBy
      isActive
      from {
        altitude
        longtitude
        latitude
      }
      dest {
        altitude
        longtitude
        latitude
      }
    }
  }
`;
export default function Event() {
  const [token, setToken] = useState("");
  const navigation = useNavigation()
  useEffect(() => {
    cekToken();
  }, []);

  const cekToken = async () => {
    const token = await AsyncStorage.getItem("access_token");
    setToken(token);
  };

  const { data, loading, error } = useQuery(GET_EVENTS, {
    variables: {
      headers: {
        access_token: token,
      },
      filter: "active",
    },
  });

  console.log(data);

  const [index, setIndex] = useState(0);
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
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        style={styles.tabContainer}
        indicatorStyle={styles.tabIndicator}
      >
        <Tab.Item
          title="Active Event"
          titleStyle={
            index === 0
              ? [styles.tabTitle, styles.selectedTabTitle]
              : styles.tabTitle
          }
        />
        <Tab.Item
          title="Past Event"
          titleStyle={
            index === 1
              ? [styles.tabTitle, styles.selectedTabTitle]
              : styles.tabTitle
          }
        />
        <Tab.Item
          title="Your Event"
          titleStyle={
            index === 2
              ? [styles.tabTitle, styles.selectedTabTitle]
              : styles.tabTitle
          }
        />
      </Tab>
      <TabView
        value={index}
        onChange={setIndex}
        animationType="spring"
        style={styles.tabViewContainer}
      >
        <TabView.Item style={styles.tabViewItem}>
          <FlatList
            data={data?.getEvents}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CardEvent item={item} />}
            keyExtractor={(item) => item._id}
          />
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          {/* <Text h1>Your Event</Text> */}
          <View
          >
            <Text style={styles.Title}>You don't have an event yet.</Text>
            <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Create Event')}>
              <Text style={styles.TextButton}>Create Event</Text>
            </TouchableOpacity>
            </View>
          </View>
        </TabView.Item>
      </TabView>
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
    // paddingHorizontal: 14,
    backgroundColor: "white",
  },
  RowRecentHistory: {
    flexDirection: "row",
    gap: 55,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: Platform.OS === "ios" ? 25 : 10,
    padding: 3,
  },
  FilterData: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    fontWeight: "bold",
    color: "#293038",
  },
  tabContainer: {
    // backgroundColor: "#F5F5F5",
    // borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  tabIndicator: {
    backgroundColor: "#293038",
    height: 0,
    borderRadius: 10,
  },
  selectedTabTitle: {
    borderRadius: 10,
    backgroundColor: "#293038",
    color: "white", // Adjust the color as needed
    overflow: "hidden",
  },
  tabTitle: {
    fontSize: Platform.OS === "ios" ? 13 : 10,
    fontWeight: "bold",
    color: "#293038",
  },
  tabViewContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
  },
  tabViewItem: {
    width: "100%",
    justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
    // flex: 1,
    padding: 5,
    // marginLeft: 10
  },
  TouchableOpacity: {
    borderRadius: 10,
    width: "50%",
    height: 40,
    backgroundColor: "#FFC329",
    alignItems: "center",
    justifyContent: "center",
  },
  TextButton: {
    fontSize: 14,
    color: "white",
    fontWeight: 'bold'
  },
  Title: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    // marginTop: Platform.OS === "ios" ? 15 : 10,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#293038",
    marginTop: 1,
  },
  ButtonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});
