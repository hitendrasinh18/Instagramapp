import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, values } from 'react-native';
import { loginInitialvalue, loginValidation } from './Utils';
import InputBox from '../../components/InputBox';
import { useNavigation } from '@react-navigation/native';
import LoginButton from '../../components/LoginButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';


const Loginscreen = ({ }) => {
    GoogleSignin.configure({
        webClientId:'486519789143-iemh0cljfg1kjino6hpsscolpj5h2ki3.apps.googleusercontent.com'
    })

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
      const onGoogleButtonPress = async() => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
const usersignin = auth().signInWithCredential(googleCredential)    
usersignin.then ((user) => {
    console.log(user);
} ) }
    
      if (initializing) return null;
     
      
    const navigation = useNavigation();
    const handleLogin = values => {
        console.log(values)
        navigation.navigate('Dashboard')

    }

    return (
       
        <View style={{ flex: 1, alignItems: "center", }}>
            <View style={{ flex: 0.9, justifyContent: 'center', }}>
                <Image source={require('../../assets/instagram.png')} style={{ height: 60, width: 220, marginLeft: 40, marginBottom: 20 }} ></Image>
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
                <View style={{ marginTop: 10, alignSelf: 'center' }}>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 16 }}>Forgotten password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                    flexDirection: "row",
                    borderWidth: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    gap: 10,
                    marginTop:15,
                    backgroundColor:"#3797FE",
                                       
                }} onPress={() => {onGoogleButtonPress }}>
                    <Image source={require('../auth/google.png')} style={{
                        height: 18,
                        width: 18,
                    }}></Image>
                    <Text style={{
                        fontSize: 20,
                    }}>Login with Google</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 0.1, justifyContent: 'flex-end' }}  >
                <TouchableOpacity style={{ alignSelf: 'center', }} onPress={() => navigation.navigate('signup')}>
                    <Text style={{ fontSize: 16 }}> Create new account</Text>

                </TouchableOpacity>

               
            </View>
        </View>


    )
}

export default Loginscreen;