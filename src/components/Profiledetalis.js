import React from "react";
import {View ,Text,Image, TouchableOpacity, Button} from 'react-native'

const Profiledetalis = () => {
    return(
<View style={{paddingHorizontal:15}}>
    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
        <Image source={require('../assets/hearts.png')} style={{height:80,width:80,borderRadius:4}}></Image>
        <View style={{width:75,alignItems:"center"}}>
            <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>4</Text>
            <Text style={{fontSize:16,color:'black'}}>Post</Text>



        </View>
        <View style={{width:75,alignItems:"center"}}>
            <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>100</Text>
            <Text style={{fontSize:16,color:'black'}}>Followers</Text>



        </View>
        <View style={{width:75,alignItems:"center"}}>
            <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>1</Text>
            <Text style={{fontSize:16,color:'black'}}>Following</Text>



        </View>
    </View>
    <Text style={{fontSize:16, fontWeight:500,color:"Black", marginTop:10,}} >Hitendra Parmar</Text>
    <Text  > React Native</Text>
    <Text >Instagram Clone</Text>
    <Text style={{fontSize:18,fontWeight:500,}}> See Translation</Text>

    <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:15,marginHorizontal:10}}>
        <TouchableOpacity>
            
         <Text style={{backgroundColor:"#E1E1E1", width: 150,paddingHorizontal:10, paddingVertical:5,borderRadius:5,textAlign:"center", color:'black',}}>Edit Profile</Text>          

        </TouchableOpacity>
        <TouchableOpacity>
            
         <Text style={{backgroundColor:"#E1E1E1", width: 150,paddingHorizontal:10, paddingVertical:5,borderRadius:5,textAlign:"center", color:'black',}}>Share Profile</Text>          

        </TouchableOpacity>
    </View>


</View>

    )
}

export default Profiledetalis;