import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import React, { useState, useEffect } from "react";
import haversine from "haversine";

export default function CyclingPage() {
  const [buttonText, setButtonText] = useState("Start");

  const handleButtonClick = () => {
    if (buttonText === "Start") {
      setButtonText("Stop");
      startHandler();
    } else {
      setButtonText("Start");
      drawerHis();
    }
  };

  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);

  const [run, setRun] = useState(false);
  const [distanceTravel, setDistanceTravel] = useState(0);
  const [locFirst, setLocFirst] = useState(null);
  const [timer, setTimer] = useState(0);

  const [hours, sethours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [prevLocation, setPrevLocation] = useState([
    {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
  ]);

  //Funcion

  function drawerHis() {
    setRun(false);
    setPrevLocation([initialRegion]);
    setDistanceTravel(0);
  }

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location.coords);

    setInitialRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console.log(location, "LOC");

    if (run) {
      setPrevLocation([...prevLocation, initialRegion]);
      const distance = haversine(locFirst, initialRegion);
      const distancePls = distanceTravel + distance;
      setDistanceTravel(distancePls);
      setLocFirst(initialRegion);
    } else {
      console.log("ga maiin");
      if (location) {
        setPrevLocation([
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        ]);
        setLocFirst({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    }
  };

  useEffect(() => {
    getLocation();
    getLocation();
    console.log("jalan");
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      if (run === true) {
        getLocation();
        const totalTime = timer + 1;
        setTimer(totalTime);
      }
    }, 1000);

    return () => clearInterval(time);
  });

  function startHandler() {
    setRun(true);
  }

  useEffect(() => {
    sethours(Math.floor(timer / 3600));
    setMinutes(Math.floor((timer % 3600) / 60));
    setSeconds(Math.floor(timer % 60));
  }, [timer]);

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.CardShadow}>
        <Text>
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </Text>
      </View>
      {initialRegion && (
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation
          followsUserLocation
          region={initialRegion}
        >
          {currentLocation && (
            <>
              <Marker
                coordinate={{
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                }}
                title="Your Location"
              />
              <Polyline coordinates={prevLocation} strokeWidth={3} />
            </>
          )}
        </MapView>
      )}
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={handleButtonClick}
        >
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
    width: "100%",
    height: "70%",
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
