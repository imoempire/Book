import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Data } from "../utils/Data";
import { Octicons } from "@expo/vector-icons";

const PlaceList = () => {
  return (
    <FlatList
      horizontal={true}
      data={Data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.Tab}>
            <View style={{marginVertical: 10}}>
            <Octicons name="organization" size={24} color="white" />
            </View>
            <Text style={{ color: "white" }}>{item.name}</Text>
            <View>
               <Text  style={{ color: "white" }}>{item.avaiblity}</Text>
            </View>
            <View style={{backgroundColor: 'white', borderRadius: 10, padding: 2, marginVertical: 10}}>
              <Text style={{color: '#374a7a'}}>Get a Code</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  Tab: {
    backgroundColor: "#374a7a",
    marginHorizontal: 5,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
    width: 150,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlaceList;
