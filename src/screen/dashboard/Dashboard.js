import { FlatList, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
import Post from "../../components/Post";
import { Userdata } from "../../utils/Userdata";

const Dashboard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <Stories data={Userdata} />
      <FlatList 
        data={Userdata} 
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Post item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Dashboard;
