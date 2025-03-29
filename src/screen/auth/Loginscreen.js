// import { Formik } from 'formik';
// import React, { useState,useEffect } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image, values } from 'react-native';
// import { loginInitialvalue, loginValidation } from './Utils';
// import InputBox from '../../components/InputBox';
// import { useNavigation } from '@react-navigation/native';
// import LoginButton from '../../components/LoginButton';


// const Loginscreen = ({ }) => {
   

// //     const [initializing, setInitializing] = useState(true);
// //     const [user, setUser] = useState();
  
// //     // Handle user state changes
// //     function onAuthStateChanged(user) {
// //       setUser(user);
// //       if (initializing) setInitializing(false);
// //     }
// //     useEffect(() => {
// //         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
// //         return subscriber; // unsubscribe on unmount
// //       }, []);
// //       const onGoogleButtonPress = async() => {
// //         // Check if your device supports Google Play
// //         await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
// //         // Get the users ID token
// //         const { idToken } = await GoogleSignin.signIn();
      
// //         // Create a Google credential with the token
// //         const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
// //         // Sign-in the user with the credential
// // const usersignin = auth().signInWithCredential(googleCredential)    
// // usersignin.then ((user) => {
// //     console.log(user);
// // } ) }
    
// //       if (initializing) return null;
     
      
//     const navigation = useNavigation();
//     const handleLogin = values => {
//         console.log(values)
//         navigation.navigate('Dashboard')

//     }

//     return (
       
//         <View style={{ flex: 1, alignItems: "center", }}>
//             <View style={{ flex: 0.9, justifyContent: 'center', }}>
//                 <Image source={require('../../../assets/instagram.png')} style={{ height: 60, width: 220, marginLeft: 40, marginBottom: 20 }} ></Image>
//                 <Formik initialValues={loginInitialvalue} validationSchema={loginValidation} onSubmit={handleLogin}>
//                     {({
//                         handleChange,
//                         handleBlur,
//                         handleSubmit,
//                         values,
//                         errors,
//                         touched,
//                         isValid,

//                     }) => {
//                         return (
//                             <View>
//                                 <InputBox placeholder={'username'}
//                                     onChangeText={handleChange('username')}
//                                     onBlur={handleBlur('username')}
//                                     value={values.username}
//                                     touched={touched.username}
//                                     error={errors.username}></InputBox>

//                                 <InputBox placeholder={'password'}
//                                     onChangeText={handleChange('password')}
//                                     onBlur={handleBlur('password')}
//                                     value={values.password}
//                                     error={errors.password}
//                                     touched={touched.password}
//                                     secureTextEntry={true}>
//                                 </InputBox>
//                                 <LoginButton buttontitlee={'Login'} onPress={handleLogin} disabled={!isValid}>
//                                 </LoginButton>
//                             </View>
//                         )
//                     }}
//                 </Formik>
//                 <View style={{ marginTop: 10, alignSelf: 'center' }}>
//                     <TouchableOpacity >
//                         <Text style={{ fontSize: 16 }}>Forgotten password?</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{
//                     flexDirection: "row",
//                     borderWidth: 0,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     padding: 10,
//                     gap: 10,
//                     marginTop:15,
//                     backgroundColor:"#3797FE",
                                       
//                 }} onPress={() => {onGoogleButtonPress }}>
//                     <Image source={require('../auth/google.png')} style={{
//                         height: 18,
//                         width: 18,
//                     }}></Image>
//                     <Text style={{
//                         fontSize: 20,
//                     }}>Login with Google</Text>
//                 </TouchableOpacity>
//                 </View>
//             </View>

//             <View style={{ flex: 0.1, justifyContent: 'flex-end' }}  >
//                 <TouchableOpacity style={{ alignSelf: 'center', }} onPress={() => navigation.navigate('signup')}>
//                     <Text style={{ fontSize: 16 }}> Create new account</Text>

//                 </TouchableOpacity>

               
//             </View>
//         </View>


//     )
// }

// export default Loginscreen;




import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const handleLogin = values => {
        console.log(values)
        navigation.navigate('Dashboard')

    }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Username, email address or mobile number"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgotten password?</Text>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('signup')}>
      <Text style={styles.signupText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    alignItems: "center",
    justifyContent: "center",
  },
  language: {
    color: "#fff",
    position: "absolute",
    top: 50,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  input: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    color: "black",
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#0095f6",
    padding: 15,
    width: "85%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#0095f6",
    marginTop: 15,
  },
  signupButton: {
    backgroundColor: "#0095f6",

    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    width: "85%",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  signupText: {
    color: "black",
  },
  metaText: {
    color: "#666",
    position: "absolute",
    bottom: 30,
  },
});

export default LoginScreen;
