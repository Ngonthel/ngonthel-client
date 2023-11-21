import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  Modal
} from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useState, useEffect, useRef } from "react";
import haversine from "haversine";
import * as Location from "expo-location";
import { Platform } from "react-native";
import Constants from "expo-constants";
import MapViewDirections from "react-native-maps-directions";
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import firebase from "firebase/compat/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import Bike from '../assets/personal-bike.svg'
import Start from '../assets/starts-logo.svg'

const firebaseConfig = {
  apiKey: "AIzaSyDAkDtPeQz3DCU_Jq5xQvpk80eP2biJ4OM",
  authDomain: "realtime-tracking-baa73.firebaseapp.com",
  projectId: "realtime-tracking-baa73",
  storageBucket: "realtime-tracking-baa73.appspot.com",
  messagingSenderId: "68954802260",
  appId: "1:68954802260:web:cdaee239294ac7713945c1",
  databaseURL:
    "https://realtime-tracking-baa73-default-rtdb.asia-southeast1.firebasedatabase.app",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.76711,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

const GOOGLE_API_KEY = "AIzaSyBJJ8i1gcnkoBkRx-tqFn9Dam67n2zmJfo";

export default function CyclingPage_Party() {
  const [buttonText, setButtonText] = useState("Start");

  const handleButtonClick = () => {
    if (buttonText === "Start") {
      setButtonText("Stop");
      startHandler();
    } else {
      setButtonText("Start");
      // Menampilkan alert ketika tombol 'Stop' ditekan
      Alert.alert(
        'Confirmation',
        'Are you sure you want to stop?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => drawerHis() }
        ],
        { cancelable: false }
      );
    }
  };

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef(null);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);

  const [run, setRun] = useState(false);
  const [distanceTravel, setDistanceTravel] = useState(0);
  const [locFirst, setLocFirst] = useState(null);
  const [timer, setTimer] = useState(0);
  const [follow, setfollow] = useState(true);

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

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const edgePaddingValue = 70;
  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args) => {
    // console.log(args, "<<<<<<<<<<<<")
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  function writeUserData(stau, dua) {
    set(ref(db, "users/" + first), {
      username: first,
      latitude: stau,
      longitude: dua,
    });
  }

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newData = Object.keys(data).map((key) => ({
        ...data[key],
      }));
      // console.log(newData, '------')
      setdataParty(newData);
    });
  }, []);

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

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    setCurrentLocation(location.coords);

    setInitialRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
    console.log(location, "LOC");

    if (run) {
      writeUserData(location.coords.latitude, location.coords.longitude);
    }

    if (run) {
      const distance = haversine(locFirst, initialRegion, { unit: "meter" });
      console.log(distance);
      if (distance > 10) {
        setPrevLocation([...prevLocation, initialRegion]);
        const distancePls = distanceTravel + distance;
        const distanceResult = Math.round(distancePls * 100) / 100;
        setDistanceTravel(distanceResult);
        setLocFirst(initialRegion);
      }
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
    setOrigin({
      latitude: -7.2685914,
      longitude: 112.746842,
      longitudeDelta: 0.005,
      latitudeDelta: 0.005
    })
    setDestination({
      latitude: -7.391538991614165,
      longitude: 112.69554779620968,
      longitudeDelta: 0.005,
      latitudeDelta: 0.005
    })
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

  const [dataParty, setdataParty] = useState([]);
  const [first, setfirst] = useState("dani");

  const [regionLocation, setRegionLocation] = useState();
  function followHadler(value) {
    if (value) {
      setRegionLocation();
    }
    setfollow(false);
  }

  return (
    <View style={styles.AndroidSafeArea}>
      {/* <View style={styles.CardShadow}> */}

      {/* </View> */}
      {initialRegion && (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
          region={follow ? initialRegion : regionLocation}
          onTouchEnd={() => followHadler(false)}
          loadingEnabled
        >
          {origin && (<Marker coordinate={origin} >
            {/* <Image source={require('../assets/start-logos.png')} /> */}
            <Start />
          </Marker>)}
          {destination && (<Marker coordinate={destination} >
            {/* <FontAwesome name="flag-checkered" size={30} color="black" /> */}
            <Image source={require('../assets/finish-logo.png')} />
          </Marker>)}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={initialRegion}
              destination={destination}
              apikey={GOOGLE_API_KEY}
              strokeColor="#6644ff"
              strokeWidth={4}
              onReady={traceRouteOnReady}
              mode="DRIVING"
            />
          )}
          {currentLocation && (
            <>
              <Marker.Animated
                coordinate={{
                  latitude: initialRegion.latitude,
                  longitude: initialRegion.longitude,
                }}
                anchor={{ x: 0.5, y: 0.5 }}
                title="Your Location"
              >
                <Image
                  source={require("../assets/bike.png")}
                  style={{
                    width: 65,
                    height: 65,
                    transform: [{ rotate: `${currentLocation?.heading}deg` }],
                  }}
                  resizeMode="contain"
                />
              </Marker.Animated>
              <Polyline coordinates={prevLocation} strokeWidth={3} />
            </>
          )}
          {dataParty.map((el, i) => {
            if (el.username !== first) {
              return (
                <Marker
                  key={i}
                  coordinate={{ latitude: el.latitude, longitude: el.longitude }}
                  title={el.username}
                >
                  <View style={styles.priceTag}>
                    <Text style={{ fontWeight: '500', fontSize: 12, elevation: 10 }}>
                      {el.username}
                    </Text>
                  </View>
                  <Bike />
                </Marker>
              );
            }
          })}
        </MapView>
      )}

      <View className="shadow-2xl" style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={() => setfollow(true)}
        >
          <MaterialIcons
            style={{
              position: "absolute",
              padding: 8,
              backgroundColor: 'white',
              borderRadius: 4,
              // zIndex: 99,
              top: -1 / 14 * height,
              right: 0,
              // width: 1 / 2 * width,
              // height: 1/3,
              elevation: 5
            }} name="my-location" size={24} color="#1640D6" />
        </TouchableOpacity>
        <View style={styles.RowRecentHistory}>
          <View style={styles.DataShadow}>
            <View>
              <Text style={styles.TitleHistory}>Distance</Text>
              <Text style={styles.DataHistory}>{distanceTravel} m</Text>
            </View>
          </View>
          <View style={styles.DataShadow}>
            <View>
              <Text style={styles.TitleHistory}>Speed</Text>
              <Text style={styles.DataHistory}>
                {Math.round(currentLocation?.speed * 100) / 100} m/s
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: "bold",
              color: "#696e74",
            }}
          >
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </Text>
        </View>
        <TouchableOpacity
          // style={styles.TouchableOpacity}
          style={[styles.TouchableOpacity, { backgroundColor: run ? 'red' : "#FFC329" }]}
          onPress={handleButtonClick}
        >
          <Text style={styles.TextButton}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const isAndroid = Platform.OS === "android";
const styles = StyleSheet.create({
  AndroidSafeArea: {
    // flex: 1,
    // paddingTop:
    //   Platform.OS === "android" || Platform.OS === "ios"
    //     ? StatusBar.currentHeight
    //     : 0,
    backgroundColor: "white",
    // width: isAndroid ? width : width * 1,
    height: isAndroid ? height : height * 0.83,
  },
  map: {
    flex: 1,
    // width: "100%",
    // height: "55%",
  },
  CardShadow: {
    // flex: 1,
    marginBottom: Platform.OS === "ios" ? 5 : 2,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
      },
      android: {
        elevation: 2,
        backgroundColor: "green"
      },
    }),
    padding: Platform.OS === "ios" ? 8 : 7.5,
  }, priceTag: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    elevation: 5,

  },
  ButtonContainer: {
    position: 'absolute',
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 10,
    width: 0.95 * width,
    bottom: 1 / 7 * height,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',

    // borderColor: '#FFC329',
    // borderWidth: 1
    // backgroundColor: 'rgba(255, 255, 255,1)'
  },
  TouchableOpacity: {
    borderRadius: 20,
    width: 200,
    height: 45,
    // backgroundColor: "",
    alignSelf: "center",
    justifyContent: "center",
    margin: 10,
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

  },
  TextButton: {
    fontSize: 20,
    color: "white",
    alignSelf: 'center'
  },
  RowRecentHistory: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    marginBottom: 5,
  },
  DataShadow: {
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
  TitleHistory: {
    fontSize: Platform.OS === "ios" ? 18 : 14,
    fontWeight: "bold",
    color: "#293038",
  },
  DataHistory: {
    fontSize: Platform.OS === "ios" ? 14 : 10,
    textAlign: "center",
    marginTop: 1,
    color: "#696e74",
  },
});
