import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput, } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Storiesview = ({ route }) => {
    console.log(route.params);
    const selecteditem = route.params.item
    const navigation = useNavigation()
    const currentTime = new Date();
    const currentHr = currentTime.getHours();
    const storyTime = currentHr - selecteditem.story.time;
    const screenHeight = Dimensions.get("window").height
    const screenWidth = Dimensions.get("window").width

    useEffect (()=>
        {
            const timeout = setTimeout(()=>{
                navigation.goBack();

            }, 15000)
        },

    )

    return (
        <View style={{ flex: 1, marginTop: 30, backgroundColor: 'black' }}>
            <View style={{ flexDirection: "row", paddingTop: 12, paddingLeft: 12, alignItems: "center", position: "relative", zIndex: 1 }}>
                <Image source={selecteditem.profile} style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}></Image>
                <Text style={{ fontSize: 18, fontWeight: 700, color: "white" }}>{selecteditem.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: 500, marginLeft: 10, color: "white" }}>{storyTime} Hr</Text>
            </View>
            <View style={{ position: 'absolute' }}>
                <Image source={selecteditem.story.image} style={{ height: screenHeight - 100, width: screenWidth, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, }}></Image>
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
                    <TextInput style={{ borderWidth: 1, borderColor: 'white', width: 300, paddingHorizontal: 15, color: 'white', borderRadius: 30 }} placeholder="Message" placeholderTextColor={'white'}></TextInput>
                    <TouchableOpacity>
                        <Image style={{ tintColor: 'white', marginLeft: 20, }} source={require('../assets/send.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>


        </View>

    )
}
export default Storiesview;