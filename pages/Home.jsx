import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-row ml-5 mr-5 mt-5">
        <View className="flex-1 w-64 items-left justify-center">
          <Text className="text-lg text-[#696e74]">
            Hi, <Text className="font-bold text-[#293038]">[ Username ]</Text>
          </Text>
        </View>
        <Image
          className="rounded-md p-4 h-12 w-12 border-4 border-yellow-400"
          source={require("../assets/profile.jpg")}
        />
      </View>
      <View className="w-15 h-25 mt-2 ml-5 mr-5">
        <Text className="text-3xl font-medium text-[#696e74]">
          Get <Text className="font-extrabold text-[#293038]">Out!</Text>
        </Text>
        <Text className="text-3xl font-medium text-[#696e74]">
          Wheels Every{" "}
          <Text className="font-extrabold text-[#293038]">Zone</Text>
        </Text>
      </View>
      <View className="w-15 h-25 mt-7 ml-5 mr-5 ">
        <Image
          className=" w-96 h-44"
          source={require("../assets/ngontel2.png")}
        />
        {/* RECENT HISTORY */}
        <Text className="text-lg mb-3 font-bold text-[#293038]  ">
          Recent History
        </Text>
        <View className="flex flex-row gap-x-5 items-center justify-center ">
          <View className="rounded-lg bg-white shadow-sm shadow-slate-300 p-2">
            <View className="mr-5 ml-5">
              <Text className="text-lg font-bold text-gray-800">Distance</Text>
              <Text className="text-sm text-center mt-1">50mil</Text>
            </View>
          </View>
          <View className="rounded-lg bg-white shadow-sm shadow-slate-300 p-2">
            <View className="mr-5 ml-5">
              <Text className="text-lg font-bold text-gray-800">Speed</Text>
              <Text className="text-sm text-center mt-1">75km/H</Text>
            </View>
          </View>
          <View className="rounded-lg bg-white shadow-sm shadow-slate-300 p-2">
            <View className="mr-5 ml-5">
              <Text className="text-lg font-bold text-gray-800">Time</Text>
              <Text className="text-sm text-center mt-1">387wH</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row ml-5 mr-3 mt-3">
          <View className="flex-1 w-64 items-left justify-center"></View>
          <Text className="text-md font-medium text-[#FFC329]">See all</Text>
        </View>
        {/* GO CYCLING */}
        <Text className="text-lg mb-3 font-bold text-[#293038]">
          Go Cycling
        </Text>
        <View className="rounded-lg h-32 bg-white shadow-sm shadow-slate-300 p-1">
          <View className="flex flex-row p-1">
            <Image
              className="w-32 h-28"
              source={require("../assets/map.png")}
            />
            <View>
            <Text className="text-sm mt-1 w-52 ml-2 p-1">
              Find your location, and unclock a world of cycling adventures with
              Gowez!
            </Text>
            <View className="items-center justify-end mt-5"
          >
            <TouchableOpacity className="rounded-full w-20 h-6 p-1 bg-[#FFC329] items-center">
              <Text className="text-md items-center justify-center"> Go </Text>
            </TouchableOpacity>
          </View>
            </View>
            
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginRight: 7,
    marginLeft: 7,
  },
});

export default HomePage;
