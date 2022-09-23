import * as React from "react";
import { Image, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../../utils/RootNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../screens/LaunchScreen";
import GameScreen from "../screens/GameScreen";
const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="LaunchScreen">
                <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
