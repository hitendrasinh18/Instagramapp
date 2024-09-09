import { StyleSheet, Text, TextInput, View,  } from 'react-native';
import React from 'react';

const InputBox = ({
    placeholder,
    onBlur,
    onChangeText,
    value,
    secureTextEntry,
    keyboardType,
    maxLength,
    touched,
    errors,
    

}) => {
    return (
        <View style={styles.maincontainer}>
            <TextInput style={{borderWidth:1,
            width:300 , height:50, borderColor:'grey', borderRadius:5,
        paddingHorizontal:10}}
                placeholder={placeholder} onChangeText={onChangeText} onBlur={onBlur} value={value} secureTextEntry={secureTextEntry}
                keyboardType={keyboardType} maxLength={maxLength} touched={touched}> 
                </TextInput>
{errors && touched && <Text style={{color:'red', padding:5}}>{errors}</Text>}
        </View>
    )
}

export default InputBox;

const styles = StyleSheet.create({
    maincontainer: {
        
        height: 68,
    },
   
   
   
 
});