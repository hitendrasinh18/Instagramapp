import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stories = ({ data }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Story", { item })}>
            <View style={{ borderWidth: 3, borderRadius: 40, padding: 2 }}>
              <Image source={item.story.image} style={{ height: 70, width: 70, borderRadius: 35 }} />
            </View>
          </TouchableOpacity>
          <Text style={{ textAlign: "center" }}>{item.username}</Text>
        </View>
      )}
    />
  );
};

export default Stories;
