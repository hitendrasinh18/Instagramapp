import React from "react";
import {View ,Text,Image} from 'react-native'

const Profiledetalis = () => {
    return(
<View style={{paddingHorizontal:15}}>
    <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
        <Image source={require('../assets/hearts.png')} style={{height:80,width:80,borderRadius:4}}></Image>
        <View style={{width:75,alignItems:"center"}}>
            <Text style={{fontSize:24,fontWeight:'400',color:'black'}}>4</Text>
            <Text style={{fontSize:16,color:'black'}}>Post</Text>



        </View>
    </View>
    
</View>

    )
}

export default Profiledetalis;