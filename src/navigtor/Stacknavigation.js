import { View, Text,} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loginscreen from "../screen/auth/Loginscreen";
import SignUpscreen from "../screen/auth/SignUpscreen";
import { NavigationContainer } from "@react-navigation/native";
import Header from "../components/Header";
import Dashboard from "../screen/dashboard/Dashboard";
import Storiesview from "../components/Storyview";
import Bottomnavigation from "./Bottomnavigation";
import Search from "../screen/dashboard/Search";

const Stack = createNativeStackNavigator()

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='login' component={Loginscreen}></Stack.Screen>
                <Stack.Screen name='signup' component={SignUpscreen}></Stack.Screen>
                <Stack.Screen name='Home' component={Dashboard} ></Stack.Screen>
                <Stack.Screen name='Story' component={Storiesview} ></Stack.Screen>
                <Stack.Screen name='Dashboard' component={Bottomnavigation} ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigation