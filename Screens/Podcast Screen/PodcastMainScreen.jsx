import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DiscoverPodCast from "./DiscoverPodCast";
import MyPodCast from "./MyPodCast";
import LivePoadCast from "./LivePodCast";
import { useState } from "react";
import NavBar from "../../Componets/NavBar";
import Octicons from "react-native-vector-icons/Octicons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Feather from "react-native-vector-icons/Feather"
export default function PodcastMainScreen() {
    const [showDiscoverPodCastScreen, setShowDiscoverPodCastScreen] = useState(true)
    const [showLivePodCastScreen, setShowLivePodCastScreen] = useState(false)
    const [showMyPodCastScreen, setShowMyPodCasrScreen] = useState(false)
    const DiscoverPodCastToggleBtnHandler = () => {
        setShowDiscoverPodCastScreen(true)
        setShowLivePodCastScreen(false)
        setShowMyPodCasrScreen(false)
    }
    const LivePoadCastToggleBtnHandler = ()=>{
        setShowDiscoverPodCastScreen(false)
        setShowLivePodCastScreen(true)
        setShowMyPodCasrScreen(false)
    }
    const myPodCastToggleBtnHandler = ()=>{
        setShowDiscoverPodCastScreen(false)
        setShowLivePodCastScreen(false)
        setShowMyPodCasrScreen(true)
    }
    return (
        <View style={styles.MainPodacastScreen}>
            <NavBar />
            <View style={styles.toggleTabBar}>
                <TouchableOpacity onPress={DiscoverPodCastToggleBtnHandler}>
                    <View style={[styles.toggleBtn, showDiscoverPodCastScreen ? styles.Active : styles.InActive]}>
                        <Text style={styles.toggleBtnText}>Discover <Feather name="compass" size={20}/> </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={LivePoadCastToggleBtnHandler}>
                    <View style={[styles.toggleBtn, showLivePodCastScreen ? styles.Active : styles.InActive]}>
                        <Text style={styles.toggleBtnText}>Live <Octicons name="broadcast" color={'red'} size={20}/></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={myPodCastToggleBtnHandler}>
                    <View style={[styles.toggleBtn, showMyPodCastScreen ? styles.Active : styles.InActive]}>
                        <Text style={styles.toggleBtnText}>MyPodCast  <FontAwesome6 name="person-arrow-down-to-line" size={18}/></Text>
                    </View>
                </TouchableOpacity>
            </View>
            {
                showDiscoverPodCastScreen && <DiscoverPodCast />
            }
            {
                showLivePodCastScreen && <LivePoadCast />
            }
            {
                showMyPodCastScreen && <MyPodCast/>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    MainPodacastScreen: {
        height: '100%'
    },
    toggleTabBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom : 5
    },
    toggleBtn: {
        padding: 10,
       
        marginHorizontal: 20
    },
    Active: {
        backgroundColor: 'grey',
        borderRadius: 6,
    },
    toggleBtnText : {
        color :'black',
    }
})