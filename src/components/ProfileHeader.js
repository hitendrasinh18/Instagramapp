import React from "react";
import {View ,Text, Image, TouchableOpacity} from 'react-native'

const ProfileHeader = () => {

    return(
    <View style={{paddingHorizontal:15, paddingTop:10, height:55, marginTop:15}}>
        <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>

        <Text style={{fontSize:24,fontWeight:'500',color:"black"}}>Hitendra Parmar </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{marginRight:15}}>
            <Image style={{height:24,width:24}} source={require('../assets/more.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={{height:24,width:24}} source={require('../assets/menu.png')}></Image>
            </TouchableOpacity>
        </View>
        </View>
    </View>
    )
}

export default ProfileHeader;