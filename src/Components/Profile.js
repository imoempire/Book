import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Name}>
        <Text style={{fontSize: 20, color: 'white'}}>Hello !</Text>
        <Text style={{fontSize: 30, fontWeight: "bold", color: 'white'}}>Jane</Text>
      </View>
      <View style={styles.Image}>
        <Image
          style={{ width: 90, height: 90, borderRadius: 90, borderWidth: 5, borderColor: 'white' }}
          source={require("../../assets/profile.jpg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20
  },
  Name: {},
  Image: {},
});

export default Profile;
