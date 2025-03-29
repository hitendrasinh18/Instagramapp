import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileDetails = () => {
    return (
        <View style={styles.container}>
            {/* Profile Picture */}
            <Image source={require("../../assets/data/elondp.png")} style={styles.profilePic} />

            {/* Stats */}
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>50</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>1.2M</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statNumber}>200</Text>
                    <Text style={styles.statLabel}>Following</Text>
                </View>
            </View>

            {/* Bio */}
            <Text style={styles.bio}>🚀 CEO @SpaceX | 🔋 Tesla | 📡 Starlink</Text>
        </View>
    );
};

export default ProfileDetails;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 15,
    },
    profilePic: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    stat: {
        alignItems: "center",
    },
    statNumber: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    statLabel: {
        fontSize: 14,
        color: "gray",
    },
    bio: {
        marginTop: 10,
        fontSize: 14,
        color: "black",
        textAlign: "center",
    },
});
