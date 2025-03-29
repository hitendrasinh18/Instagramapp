import React, { useState } from "react";
import { View, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { profilePosts } from "../../src/utils/ProfileData";

const ProfileTabs = () => {
    const [activeTab, setActiveTab] = useState("posts");

    return (
        <View>
            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => setActiveTab("posts")}>
                    <Image source={require("../../assets/icon/tag.png")} style={[styles.icon, activeTab === "posts" && styles.activeIcon]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("tags")}>
                    <Image source={require("../../assets/icon/tag.png")} style={[styles.icon, activeTab === "tags" && styles.activeIcon]} />
                </TouchableOpacity>
            </View>

            {/* Grid View */}
            <FlatList
                data={profilePosts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                renderItem={({ item }) => <Image source={item.image} style={styles.postImage} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ProfileTabs;

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
    icon: {
        width: 24,
        height: 24,
        opacity: 0.5,
    },
    activeIcon: {
        opacity: 1,
    },
    postImage: {
        width: "33%",
        height: 120,
        margin: 1,
    },
});
