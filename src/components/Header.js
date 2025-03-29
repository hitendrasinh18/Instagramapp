import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

const Header = () => {
    return (
        <View style={{ 
            marginTop: 40, 
            paddingHorizontal: 15, 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: "space-between", 
            height: 50 
        }}>
            <View>
                <Image source={require('../../assets/instagram.png')} style={{ height: 28, width: 110, resizeMode: "contain" }} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginRight: 15 }}>
                    <Image source={require('../../assets/hearts.png')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={{ position: 'relative' }}>                   
                         <Image source={require('../../assets/send.png')} style={{ height: 24, width: 24 }} />
                    </View>
                    <View style={{
                        position: "absolute", 
                        bottom: 19, 
                        left: 10, 
                        backgroundColor: 'red', 
                        paddingHorizontal: 5, 
                        borderRadius: 10
                    }}>
                        <Text style={{ fontSize: 10, color: "white", fontWeight: "bold" }}>
                            5
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
