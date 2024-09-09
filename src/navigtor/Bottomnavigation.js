import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from "../screen/dashboard/Dashboard";
import Search from "../screen/dashboard/Search";
import Addpost from "../screen/dashboard/Addpost";
import Reel from "../screen/dashboard/Reel";
import Userprofile from "../screen/dashboard/Userprofile";



const Tab = createBottomTabNavigator()


const Bottomnavigation = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name='Home' component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ height: 24, width: 24 }} source={
                            focused
                                ? require("../assets/shome.png")
                                : require('../assets/home.png')
                        }></Image>
                    ),
                }} />
            <Tab.Screen name='search' component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: 24, width: 24 }} source={
                        focused
                            ? require("../assets/ssearch.png")
                            : require('../assets/search.png')
                    }></Image>
                ),
            }} />

            <Tab.Screen name='addpost' component={Addpost} options={{
                tabBarIcon: () => (
                    <Image style={{ height: 24, width: 24 }} source={
                 require('../assets/more.png')
                    }></Image>
                ),
            }} />

<Tab.Screen name='Reel' component={Reel} options={{
                tabBarIcon: () => (
                    <Image style={{ height: 24, width: 24 }} source={
                 require('../assets/reel.png')
                    }></Image>
                ),
            }} />
             <Tab.Screen name='Userprofile' component={Userprofile} options={{
                tabBarIcon: () => (
                    <Image style={{ height: 24, width: 24 }} source={
                 require('../assets/user.png')
                    }></Image>
                ),
            }} />

        </Tab.Navigator>


    )


}
export default Bottomnavigation;