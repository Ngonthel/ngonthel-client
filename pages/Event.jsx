import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Tab, TabView } from "@rneui/themed";
import CardEvent from "../components/CardEvent";
import CardLeader from '../components/CardLeaderboard'
export default function Event() {
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
        <TabView.Item
        style={styles.tabViewItem}
        >
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CardEvent item={item} />}
            keyExtractor={(item) => item.id}
          />
        </TabView.Item>
        <TabView.Item 
        style={styles.tabViewItem}
        >
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item 
        style={styles.tabViewItem}
        >
          <Text h1>Your Event</Text>
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
    paddingHorizontal: 14,
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
    // width: "100%",
    flex: 1,
    backgroundColor: 'blue'
  },
});
