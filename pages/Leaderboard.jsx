import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
  FlatList,
  Platform,
  Alert,
} from "react-native";
import Cardlead from "../components/CardLeaderboard";
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Leaderboard() {

  const [leaderboard , setLeaderboard] = useState(null)

  const cekToken = async () => {
    const token = await AsyncStorage.getItem("access_token");
    return token;
  };

  const getLeaderboard = async () => {
    const GET_LEADERBOARD = gql`
      query GetLeaderboard($headers: Headers!) {
        getLeaderboard(headers: $headers) {
          _id
          name
          totalPoint
        }
      }
    `

    try {
        const client = new ApolloClient({
          uri : 'http://18.140.54.54:3000/',
          cache: new InMemoryCache()
        })

        const {data} = await client.query({
          query: GET_LEADERBOARD,
          variables : {
            headers: {
              access_token: await cekToken()
            }
          }
        })
        // console.log(leaderboard,"<><><><><>");
        setLeaderboard(data.getLeaderboard)
    } catch (error) {
      console.log(error);
      Alert.alert("Error Getting Leaderboard,Check your Connection!")
    }
  }

  useEffect(() => {
    // console.log(leaderboard, "<<<<<<<<<<<<<<");
    getLeaderboard()
  })

  // console.log(leaderboard, "<><><><><");

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
          data={leaderboard}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Cardlead key={index} data={item} index={index} />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </ImageBackground>
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
