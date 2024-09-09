import React from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import { Userdata } from "../utils/Userdata";
import { useNavigation } from '@react-navigation/native';


const Stories = () => {
    const navigation =useNavigation()

    return (
        <View style={{flexDirection:"row", marginTop:8}}>
            {Userdata.map((item)=>{
                console.log(item);
                return(
                    <View style={{marginLeft:10}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Story',{item})}>
                            <View style={{borderWidth:3,borderRadius:40,padding:2}}>
                                <Image source={item.story.image} style={{height:70, width:70,borderRadius:35}}></Image>
                            </View>
                        </TouchableOpacity>
                        <Text style={{textAlign:"center"}}>{item.username}</Text>
                        </View>
                )
            })}
        </View>
       
    )
}
export default Stories;