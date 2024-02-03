import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
export default function MoreInfo({ popupData,setShowMoreInfoPopup}) {
    const closepopupHandler = ()=>{
        setShowMoreInfoPopup(false)
    }
    return (
        <View style={styles.MainpopupContainer}>
            <View style={styles.MainInfoContainer}>

                <View style={styles.ImageContainer}>
                    <Image source={{ uri: popupData.casterProfile }} style={styles.profileImage} />
                </View>
                <View style={styles.InfoContainer}>
                    <Text style={{
                        textAlign : 'center',
                        fontSize : 20,
                        color :'black',
                        fontWeight :"700"
                    }}>{popupData.casterName}</Text>
                    <Text style={{
                        color :'black',
                        fontWeight :'600',
                        fontSize : 16,
                    }}>{popupData.podCastTitle}</Text>
                </View>
                <View style={styles.userOptionControls}>
                    <TouchableOpacity style={[styles.contolsBtn,styles.SubscribeBtn]}>
                        <Text style={{
                            color :'white',
                            textAlign :'center',
                            fontWeight :'bold'
                        }}>Subscribe <Ionicons name="notifications-sharp" color="white" size={15}/> </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.contolsBtn,styles.bookmarkBtn]}>
                        <Text style={{
                            color :'white',
                            textAlign :'center',
                            fontWeight :'bold'
                        }}>Bookmark <Entypo name="bookmarks" size={17} color="white"/> </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.closePopupbtn} onPress={closepopupHandler} >
                    <EvilIcons name="close-o" color={"white"}size={40}/>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    MainpopupContainer : {
        position : 'absolute',
        height : '100%',
        width : '100%',
        alignItems : 'center',
        backgroundColor : 'rgba(0,0,0,0.9)',
        padding :10
    },
    MainInfoContainer : {
        width : '100%',
        backgroundColor :'white',
        height : 300,
        position : 'relative',
        borderRadius: 10
    },
    ImageContainer : {
        height : '50%',
        width :'100%',
        objectFit : 'cover',
        borderTopRightRadius :10,
        borderTopLeftRadius :10

    },
    profileImage : {
        height : '100%',
        width :'100%',
        objectFit : 'cover',
        borderTopRightRadius :10,
        borderTopLeftRadius :10
    },
    InfoContainer : {
        height : '30%',
        width : "100%",
        padding : 10
    },
    userOptionControls : {
        height : '20%',
        width : '100%',
        flexDirection : 'row',
        justifyContent :'center',
    },
    closePopupbtn : {
        position : 'absolute',
        top : 10,
        right : 10,
    },
    contolsBtn : {
        borderRadius :20,
        justifyContent :'center',
        alignItems :'center',
        height :50,
        width :93,
        marginLeft : 5
    },
    SubscribeBtn : {
        backgroundColor :'red'
    },
    bookmarkBtn : {
        backgroundColor :'grey'
    }
})