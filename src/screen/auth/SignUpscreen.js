import React from "react";
import { Formik } from "formik";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { signupInitialvalue, signupvalidition } from "./Utils";
import InputBox from "../../components/InputBox";
import LoginButton from "../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const handleSignup = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Formik initialValues={signupInitialvalue} validationSchema={signupvalidition} onSubmit={handleSignup}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
          <View style={styles.formContainer}>
            <InputBox
              placeholder="Username"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              error={errors.username}
              touched={touched.username}
            />
            <InputBox
              placeholder="Email"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              keyboardType="email-address"
            />
            <InputBox
              placeholder="Mobile Number"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              onChangeText={handleChange("number")}
              onBlur={handleBlur("number")}
              value={values.number}
              error={errors.number}
              touched={touched.number}
              maxLength={10}
              keyboardType="numeric"
            />
            <InputBox
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
            />
            <LoginButton buttontitlee="Sign Up" onPress={handleSubmit} disabled={!isValid} />
          </View>
        )}
      </Formik>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.loginRedirect}>
        <Text style={styles.loginRedirectText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  loginRedirect: {
    marginTop: 20,
  },
  loginRedirectText: {
    color: "#1DA1F2",
    fontSize: 16,
  },
});

export default SignUpScreen;