import React from "react";
import {View ,Text} from 'react-native'
import ProfileHeader from "../../components/ProfileHeader";
import Profiledetalis from "../../components/Profiledetalis";
import ProfilePost from "../../components/ProfilePost";

const Userprofile = () => {
    return(
<View>
    <ProfileHeader ></ProfileHeader>
    <Profiledetalis>
    </Profiledetalis>
    <ProfilePost></ProfilePost>
    </View>
    )

}
 

export default Userprofile;