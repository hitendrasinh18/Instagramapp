import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProfileHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.username}>musklon</Text>
            <TouchableOpacity>
                <Image source={require("../../assets/icon/tag.png")} style={styles.menuIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    username: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    menuIcon: {
        width: 24,
        height: 24,
    },
});
