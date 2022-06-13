import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";
import Home from "../Screen/Home";
import Book from "../Screen/Book";
import { Feather, FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: "absolute",
          bottom: 16,
          marginHorizontal: 20,
          borderRadius: 10,
          backgroundColor: "#222C49",
          opacity: 0.95,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            (color = "white"),
            (
              <View
                style={{
                  backgroundColor: focused ? "#496fc2" : null,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <View>
                  <Feather
                    name="home"
                    size={24}
                    color={focused ? color : "white"}
                  />
                </View>
              </View>
            )
          ),
          tabBarLabel: ({ focused, color, size }) => (
            (color = "white"),
            (size = 13),
            (
              <Text
                style={{ color: focused ? color : "#a8aaad", fontSize: size }}
              >
                Home
              </Text>
            )
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={Book}
        options={{
          tabBarIcon: ({ color, focused }) => (
            (color = "white"),
            (
              <View
                style={{
                  backgroundColor: focused ? "#496fc2" : null,
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <View>
                  <Entypo
                    name="bookmarks"
                    size={24}
                    color={focused ? color : "white"}
                  />
                </View>
              </View>
            )
          ),
          tabBarLabel: ({ focused, color, size }) => (
            (color = "white"),
            (size = 13),
            (
              <Text
                style={{ color: focused ? color : "white", fontSize: size }}
              >
                Book
              </Text>
            )
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
