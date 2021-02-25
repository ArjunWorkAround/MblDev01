import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/Screens/SearchScreen";
import SearchBar from "./src/Components/SearchBar";

const stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <stack.Navigator initialRouteName="Search">
      <stack.Screen name="Search" component={SearchScreen} />
      <stack.Screen name="SearchBar" component={SearchBar} />
    </stack.Navigator>
  </NavigationContainer>
);

export default App;
