import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   const handleDateChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date;
  //     setDate(currentDate);
  //   };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  console.log(date);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const navigation = useNavigation();

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.ShadowGoCycling}>
        <View>
          <Text>Event Title:</Text>
          <Input
            value={title}
            onChangeText={(text) => setTitle(text)}
            // rightIcon={
            //   <Ionicons
            //     name="md-person"
            //     size={24}
            //     color="black"
            //     style={{ marginRight: 10 }}
            //   />
            // }
          />
        </View>
        <View>
          
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Button onPress={showTimepicker} title="Show time picker!" />
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
        <Button
          title="Next"
          onPress={() => navigation.navigate("Create Location", {
            date: date,
            title: title
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop:
      Platform.OS === "android" || Platform.OS === "ios"
        ? StatusBar.currentHeight
        : 0,
    paddingHorizontal: 14,
    backgroundColor: "white",
    justifyContent: "center",
  },
  ShadowGoCycling: {
    marginVertical: 15,
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
});

export default CreateEventForm;
