import React from "react";
import {View ,Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import { Userdata } from "../utils/Userdata";

const Post = () => {

    const screenWidth = Dimensions.get('window').width

    return(
        <View style={{marginTop:2}}>
            {Userdata.map(item =>{
                return(


                    <View style={{marginTop:10}}>
                    <View style={{flexDirection:'row',alignItems:'center', paddingHorizontal:10, marginBottom:8,
                }}>
                        <Image style={{height:30, width:30, borderRadius:15}} source={item.profile}></Image>
                        <Text style={{paddingLeft:10,
                        fontSize:16,
                        fontWeight:600,
                        color:"black"}}>{item.name}</Text>
                        </View>
                        <View>
                            <Image  style={
                                {
                                    height:400,width:screenWidth
                                }
                            } source={item.post.image}></Image>
                            </View>
                            <View style={{paddingHorizontal:13, flexDirection:'row', alignItems:'center', marginTop:15,}}> 
                                <TouchableOpacity >
                                    <Image style={{height:24, width:28, marginRight:15}} source={require('../assets/hearts.png')}></Image>

                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image style={{height:24, width:28, marginRight:15}} source={require('../assets/chat.png')}></Image>

                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image style={{height:24, width:28}} source={require('../assets/send.png')}></Image>

                                </TouchableOpacity>
                                </View>
                                <Text style={{marginLeft:11, marginTop:30, fontSize:16, fontWeight:600, color:'black'}} >{item.post.like} likes</Text>
                                <View style={{flexDirection:'row', paddingHorizontal:13, alignItems:'center'}}>
                                    <Text style={{color:'black', fontSize:16, fontWeight:500}}>{item.name} {''}</Text>
                                    <Text>{item.post.caption}</Text></View>
                    </View>
                );
            })}
        </View>
    );


};
 

export default Post;