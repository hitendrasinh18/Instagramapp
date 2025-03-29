import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";

const Post = ({ item }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ marginTop: 10 }}>
      {/* User Profile */}
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, marginBottom: 8 }}>
        <Image style={{ height: 30, width: 30, borderRadius: 15 }} source={item.profile} />
        <Text style={{ paddingLeft: 10, fontSize: 16, fontWeight: "600", color: "black" }}>{item.name}</Text>
      </View>

      {/* Post Image */}
      <Image
        style={{
          height: 400,
          width: screenWidth,
          resizeMode: "cover",
        }}
        source={item.post.image}
      />

      {/* Actions (Like, Comment, Share) */}
      <View style={{ paddingHorizontal: 13, flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <TouchableOpacity>
          <Image style={{ height: 24, width: 28, marginRight: 15 }} source={require("../../assets/hearts.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 24, width: 28, marginRight: 15 }} source={require("../../assets/chat.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 24, width: 28 }} source={require("../../assets/send.png")} />
        </TouchableOpacity>
      </View>

      {/* Like Count */}
      <Text style={{ marginLeft: 11, marginTop: 10, fontSize: 16, fontWeight: "600", color: "black" }}>
        {item.post.like} likes
      </Text>

      {/* Caption */}
      <View style={{ flexDirection: "row", paddingHorizontal: 13, alignItems: "center", marginTop: 5 }}>
        <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>{item.name} </Text>
        <Text>{item.post.caption}</Text>
      </View>
    </View>
  );
};

export default Post;
