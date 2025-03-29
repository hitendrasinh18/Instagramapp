import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileDetails from "../../components/Profiledetalis";
import ProfileTabs from "../../components/ProfileTab";

const UserProfile = () => {
    return (
        <ScrollView style={styles.container}>
            <ProfileHeader/>
            <ProfileDetails />
            <ProfileTabs />
        </ScrollView>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});
