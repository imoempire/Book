import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Picker } from "@react-native-picker/picker";
import { Data } from "../utils/Data";

const height = getStatusBarHeight();

const Book = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const getQueueCode = () => {
    const code = Math.random();
    console.log(code);
  };

  

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 20, color: "white" }}>
          Select from the available Queues
        </Text>
      </View>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          {Data.map((item) => {
            return (
              <Picker.Item
                key={item.id}
                color="black"
                label={item.name}
                value={item.name}
              />
            );
          })}
        </Picker>
      </View>
      <TouchableOpacity style={styles.btn} onPress={getQueueCode}>
        <Text style={{ color: "#22325c", fontSize: 20 }}>Get Queue No</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222C49",
    paddingTop: height,
  },
  btn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Book;
