import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,  } from 'react-native';
import { Appcolor } from '../utils/AppColors';

const LoginButton = ({buttontitlee,onPress,disabled }) => {
    return (
        <View>
<TouchableOpacity onPress={onPress} disabled={disabled}>
    <View style={{width:300, height:45, backgroundColor:disabled?Appcolor.DISABLE_BUTTON:Appcolor.BUTTON, borderRadius:5,}}>
        <Text style={{color:'white',paddingHorizontal:12,fontSize:20, textAlign:'center', marginTop:5,}}>
             {buttontitlee}</Text>
            </View></TouchableOpacity>          
     </View>
    )
}

export default LoginButton;

const styles=StyleSheet.create({})
    
