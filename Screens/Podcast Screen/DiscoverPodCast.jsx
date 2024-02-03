import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ScrollView, Image } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MoreInfo from "../../Componets/MoreInfo";
export default function DiscoverPodCast() {
    const [searchValue, setSearchValue] = useState("")
    const [popupData,setPopupData] = useState([])
    const [showMoreInfoPopup,setShowMoreInfoPopup] = useState(false)
    const searchBtnHandler = () => {
        console.log(searchValue)
    }
    const [allPodCasts, setAllPodCasts] = useState([
        {
            podCastTitle: "Tom And Jery Eat Fish",
            casterName: 'Tom And Jerry',
            casterProfile: 'https://static.wikia.nocookie.net/tomandjerry/images/6/6b/Tomandjerrytales-1-.jpg/revision/latest/scale-to-width-down/1200?cb=20231016230722',
            podcastId: 1,
        },
        {
            podCastTitle: "Cow Meets Chicken",
            casterName: 'Cow And Chicken',
            casterProfile: 'data:image/jpeg;base64,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',
            podcastId: 2,
        },
        {
            podCastTitle: "Tom And Jery Eat Fish",
            casterName: 'Tom And Jerry',
            casterProfile: 'https://static.wikia.nocookie.net/tomandjerry/images/6/6b/Tomandjerrytales-1-.jpg/revision/latest/scale-to-width-down/1200?cb=20231016230722',
            podcastId: 3,
        },
        {
            podCastTitle: "Tom And Jery Eat Fish",
            casterName: 'Tom And Jerry',
            casterProfile: 'https://static.wikia.nocookie.net/tomandjerry/images/6/6b/Tomandjerrytales-1-.jpg/revision/latest/scale-to-width-down/1200?cb=20231016230722',
            podcastId: 4,
        },
        {
            podCastTitle: "Tom And Jery Eat Fish",
            casterName: 'Tom And Jerry',
            casterProfile: 'https://static.wikia.nocookie.net/tomandjerry/images/6/6b/Tomandjerrytales-1-.jpg/revision/latest/scale-to-width-down/1200?cb=20231016230722',
            podcastId: 5,
        },
    ])
    const podCastMoreInfoBtnHandler = (item)=>{
        setPopupData(item)
        setShowMoreInfoPopup(true)
    }
    return (
        <View style={styles.MainDiscoverContainer}>
            <View style={styles.SearchbarContainer}>
                <TextInput placeholder="Discover" placeholderTextColor={'white'} style={styles.SearchField} onChangeText={e => setSearchValue(e)} />
                <TouchableOpacity style={styles.searchBtn} onPress={searchBtnHandler}>
                    <Feather name="search" size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.DiscoverPodacasrtListContainer}>
                <FlatList
                    data={allPodCasts}
                    keyExtractor={item => item.podcastId}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.PodCastTile}>
                                <View style={styles.podCastImageContainer}>
                                    <Image source={{ uri: item.casterProfile }} style={styles.podCastProfileImage} />
                                </View>
                                <View style={styles.podcastInfoConatiner}>
                                    <Text style={styles.podCastTitle}>{item.podCastTitle}</Text>
                                    <Text style={styles.podCastersName}>{item.casterName}</Text>
                                </View>
                                <View style={styles.discoverPodacastControlsContainer}>
                                    <TouchableOpacity style={styles.TileControlBtn} onPress={()=>podCastMoreInfoBtnHandler(item)}>
                                        <Text style={styles.tileControllTitle}>More</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            {
                showMoreInfoPopup && <MoreInfo popupData = {popupData} setShowMoreInfoPopup = {setShowMoreInfoPopup}/>
                }
        </View>
    )
}
const styles = StyleSheet.create({
    MainDiscoverContainer: {
        height: '100%',
        width: '100%'
    },
    SearchbarContainer: {
        flexDirection: 'row',
        width: '100',
        justifyContent: 'center',
    },
    SearchField: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 20,
        width: '80%',
        color: 'white'
    },
    searchBtn: {
        alignSelf: 'center',
        marginLeft: 10
    },
    DiscoverPodacasrtListContainer: {
        height: '100%',
        marginHorizontal : 9,
        marginVertical :5,
        borderRadius :20,
        
    },
    PodCastTile: {
        flexDirection: 'row',
        minHeight: 100,
        backgroundColor : 'grey',
        borderRadius : 20,
        maxHeight :120,
        marginBottom : 5,
    },
    podCastImageContainer: {
        width: '30%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        objectFit : 'cover'
    },
    podCastProfileImage : {
        height :'100%',
        width:'100%',
        objectFit : 'cover',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    podcastInfoConatiner : {
        width : '40%'
    },
    discoverPodacastControlsContainer : {
        width : '30%',
        marginRight :5,
        justifyContent : 'center'
    },
    TileControlBtn : {
        height : "30%",
        justifyContent :'center',
        alignItems : "center",
        backgroundColor :'blue',
        marginTop : 5,
        borderRadius : 4,
        width : 50
    },
    tileControllTitle : {
        color : 'white',
        fontWeight :'800',
        fontSize :17
    },
    podCastTitle : {
        fontSize :17,
        color :'black',
        fontWeight : '700'
    }
})