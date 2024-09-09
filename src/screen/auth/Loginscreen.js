import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, View, Image,values  } from 'react-native';
import { loginInitialvalue, loginValidation } from './Utils';
import InputBox from '../../components/InputBox';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/LoginButton';
const Loginscreen = ({ }) => {
    
    const navigation = useNavigation();
    const handleLogin = values => {
        console.log(values)
        navigation.navigate('Dashboard')

    }
    return (
        <View style={{ flex: 1, alignItems: "center", }}>
            <View style={{ flex: 0.9, justifyContent: 'center',  }}>
                <Image source={require('../../assets/instagram.png')} style={{ height: 60, width: 220, marginLeft:40, marginBottom:20}} ></Image>
                <Formik initialValues={loginInitialvalue} validationSchema={loginValidation} onSubmit={handleLogin}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        isValid,

                    }) => {
                        return (
                            <View>
                                <InputBox placeholder={'username'}
                                    onChangeText={handleChange('username')}
                                    onBlur={handleBlur('username')}
                                    value={values.username}
                                    touched={touched.username}
                                    error={errors.username}></InputBox>

                                <InputBox placeholder={'password'}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    error={errors.password}
                                    touched={touched.password}
                                    secureTextEntry={true}>
                                </InputBox>
                                <LoginButton buttontitlee={'Login'} onPress={handleLogin} disabled={!isValid}>
                                                                    </LoginButton>
                            </View>
                        )
                    }}
                </Formik>
                <View style={{  marginTop: 10, alignSelf:'center' }}>
                <TouchableOpacity >
                    <Text style={{fontSize: 16}}>Forgotten password?</Text>
                </TouchableOpacity>
            </View>
            </View>
           
            <View style={{flex:0.1, justifyContent:'flex-end'}}  >
                <TouchableOpacity style={{ alignSelf:'center' , }} onPress={()=>navigation.navigate('signup')}>
                    <Text style={{fontSize:16}}> Create new account</Text>

                </TouchableOpacity>
            </View>
</View>

    
    )
}

export default Loginscreen;