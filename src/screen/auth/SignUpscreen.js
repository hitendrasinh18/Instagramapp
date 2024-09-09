import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, } from 'react-native';
import { loginInitialvalue, loginValidation, signupInitialvalue, signupvalidition } from './Utils';
import InputBox from '../../components/InputBox';
import LoginButton from '../../components/LoginButton';

import { useNavigation } from '@react-navigation/native';

const SignUpscreen = ({ }) => {
    const navigation = useNavigation();
    const handlesignup = values => {
        console.log(values);
    }
    return (
        <View style={{ flex: 1, alignItems: "center", }}>
            <View style={{ flex: 0.8, justifyContent: 'center', }}>
                <Text style={{fontSize:20, fontWeight:700, marginBottom:20,} }>SignUp With Your MobileNumber</Text>
                <Formik initialValues={signupInitialvalue} validationSchema={signupvalidition} onSubmit={handlesignup}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                        touched,
                        

                    }) => {
                        return (
                            <View>
                                <InputBox placeholder={'Mobile Number'}
                                    onChangeText={handleChange('number')}
                                    onBlur={handleBlur('number')}
                                    value={values.number}
                                    error={errors.number}
                                    touched={touched.number}
                                    maxLength={10}
                                    keyboardType={'numeric'}>
                                    </InputBox>
                                
                                <LoginButton buttontitlee={'Sign up'} onPress={handleSubmit} disabled={!isValid}></LoginButton>
                            </View>

                        )
                    }}
                </Formik>
                <TouchableOpacity style={{marginTop:15}}>
                    <Text style={{fontSize:16, textAlign:'center'}}
                    >SIGN UP WITH EMAIL</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2, marginBottom: 20, justifyContent: "flex-end" }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default SignUpscreen;