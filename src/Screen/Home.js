import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import PlaceList from "../Components/PlaceList";
import Profile from "../Components/Profile";
import Upcoming from "../Components/Upcoming";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const height = getStatusBarHeight()
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#222C49'} />
      <View style={styles.Profile}>
      <Profile/>
      </View>
      <View style={styles.Upcoming}>
      <Upcoming/>
      </View>
      <View style={styles.available}>
         <View style={{backgroundColor: '#374a7a', borderRadius: 10, padding: 5}}>
         <Text style={{ color: "white", fontSize: 20 }}>Avaibale Queues To join</Text>
         </View>
         <PlaceList/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22325c',
    paddingTop: height,
  },
  Profile: {
   flex: .3,
  },
  Upcoming: {
   flex: .5,
  },
  available:{
    flex: 1,
   marginHorizontal: 10,
   marginVertical: 20,
   borderRadius: 10,
   padding: 10,
  }
});

export default Home;
