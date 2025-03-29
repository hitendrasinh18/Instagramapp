import React, { useState } from "react";
import { View, TextInput, FlatList, Image, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { searchImages } from "../../utils/SearchData"; // Importing dummy images

const Search = () => {
    const [search, setSearch] = useState("");

    // Filtered data (if needed for searching)
    const filteredData = searchImages.filter((item) =>
        item.tag.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Header />
            
            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                placeholderTextColor="#888"
                value={search}
                onChangeText={(text) => setSearch(text)}
            />

            {/* Image Grid */}
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3} // 3 columns for Instagram-style grid
                renderItem={({ item }) => (
                    <Image source={item.image} style={styles.image} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    searchBar: {
        height: 40,
        borderRadius: 10,
        backgroundColor: "#eee",
        margin: 10,
        paddingHorizontal: 15,
        fontSize: 16,
    },
    image: {
        width: "33%", // Ensures 3-column layout
        height: 120,
        margin: 1,
    },
});
