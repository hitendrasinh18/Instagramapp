import { ScrollView, View } from "react-native"
import React from "react"
import Header from "../../components/Header"
import Stories from "../../components/Stories"
import Post from "../../components/Post"


const Dashboard = () => {
    return (
<ScrollView style={{flex:1, backgroundColor:'white'}}>  
          <Header />
            <Stories></Stories> 
            <Post/>  
            
             </ScrollView>

    )


}
export default Dashboard;