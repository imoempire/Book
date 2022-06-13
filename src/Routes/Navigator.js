import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
 
const Stack = createStackNavigator();

const Navigator = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={BottomTabs} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default Navigator;