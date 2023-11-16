import { View , Text , StyleSheet , StatusBar } from "react-native";

export default function Home() {
    return(
        <View style={styles.AndroidSafeArea}>
            <Text>INI PROFILE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "#F8F8F8",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingHorizontal: 14,
    },
  });
  