
import React, { useState } from "react";
import {View ,Text, TouchableOpacity,Image} from 'react-native'
import {typeData} from '../utils/Userdata'

const ProfilePost = () => {
 return(   
<View style={{marginTop:20}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        {typeData.map(item=>{
            return(
            <View key={item.id} style={{width:196.36,paddingBottom:15}}>
                <TouchableOpacity>
                    <Image style={{tintcolor:'black', alignSelf:'center',}} source={item.id}></Image>
                </TouchableOpacity>
            </View>
            )
        })}
        
    </View>
    
</View>

 )
}

export default ProfilePost;