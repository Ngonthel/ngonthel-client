import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';

import React, { useState } from 'react';

export default function CyclingPage() {
    const [buttonText, setButtonText] = useState('Start');

    const handleButtonClick = () => {
        if (buttonText === 'Start') {
            setButtonText('Stop');
        } else {
            setButtonText('Start');
        }
    };

    return (
        <View style={styles.AndroidSafeArea}>
            <View style={styles.CardShadow}>
                <Text>Timer</Text>
            </View>
            <MapView style={styles.map} />
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.TouchableOpacity} onPress={handleButtonClick}>
                    <Text style={styles.TextButton}>{buttonText}</Text>
                </TouchableOpacity>
            </View>
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
  map: {
    width: '100%',
    height: '70%',
  },
  CardShadow: {
    marginBottom: 5,
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
  },
  ButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    // backgroundColor: 'red'
  },
  TouchableOpacity: {
    borderRadius: 100,
    width: 100,
    height: 100,
    backgroundColor: "#FFC329",
    alignItems: "center",
    justifyContent: "center",
  },
  TextButton: {
    fontSize: 20,
    color: "white",
  },
});
