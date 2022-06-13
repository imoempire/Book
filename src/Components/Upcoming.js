import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20 }}>Upcoming Queue</Text>
      <View style={styles.Container}>
        <View style={styles.coming}>
          <View style={styles.Info}>
            <View style={styles.detailInfo}>
              <Ionicons name="time" size={30} color="white" />
              <Text style={{ color: "white" }}>10:50am</Text>
            </View>
            <View style={styles.detailInfo}>
              <MaterialIcons name="date-range" size={30} color="white" />
              <Text style={{ color: "white" }}>08/09/2022</Text>
            </View>
          </View>
          <View style={styles.details}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Details
            </Text>
            <View>
              <Text style={{ color: "white" }}>
                Appointment At{"\n"}NIA{"\n"}for Ghana Card
              </Text>
            </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: "white", fontSize: 18 }}>Queue No: 20</Text>
        </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  Container: {
    marginVertical: 10,
    backgroundColor: "#374a7a",
    borderRadius: 10,
    padding: 5,
  },
  coming: {
    flexDirection: "row",
     marginVertical: 10,
    justifyContent: "space-evenly",
  },
  details: {},
  Info: {
    // flexDirection: "row",
    alignItems: "center",
  },
  detailInfo: {
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default Upcoming;
