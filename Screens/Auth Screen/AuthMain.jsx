import { View,Text, Image, TouchableOpacity, StyleSheet,ToastAndroid } from "react-native"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"
import briefLogo  from "../../Assets/briefnavLogo.png"
import { useState } from "react"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function AuthMain({setIsLoggedIn,setShowLoginScreen}){
    const  [showLoginForm,setShowLoginForm] = useState(true)
    const [showRegisterForm,setShowRegisterForm] = useState(false)
    const showLoginFormHandler = ()=>{
        setShowLoginForm(true)
        setShowRegisterForm(false)
    }
    const showRegisterFormHandler = ()=> {
        setShowLoginForm(false)
        setShowRegisterForm(true)
    }
    const closeAuthWindowHandler = ()=>{
        setShowLoginScreen(false)
    }
    const otherAuthBtnHandler = ()=>{
        ToastAndroid.show("This functionality is not yet ready",ToastAndroid.LONG)
    }
    return(
        <View style={styles.MainAuthContainer}>
            <View style={styles.LogoContainer}>
                <View style={styles.secondaryLogoConatiner}>
                    <Image source={briefLogo} style={styles.AuthContainerLogo}/>
                </View>  
            </View>
            <View style={styles.formContainers}>
            {showLoginForm && <LoginScreen/>}
            {showRegisterForm && <RegisterScreen/>}                
            </View>
                <Text style={{color :'black',fontWeight :'800',textAlign :'center'}}>OR</Text>
            <View style={styles.MoreAuthOptionContainer}>
                <TouchableOpacity style={styles.OtherAuthbtn} onPress={otherAuthBtnHandler}>
                    <SimpleLineIcons name="social-google" size={20} color="white"/>
                    <Text style={styles.moreAuthOptionsBtnTextColor}>Google Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OtherAuthbtn} onPress={otherAuthBtnHandler}>
                    <Entypo name="facebook-with-circle" size={20} color="rgb(59,89,152)"/>
                    <Text style={styles.moreAuthOptionsBtnTextColor}>Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OtherAuthbtn} onPress={otherAuthBtnHandler}>
                    <AntDesign name="apple1" size={20} color="black"/>
                    <Text style={styles.moreAuthOptionsBtnTextColor}>Apple Id</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.toogleOptions}>
                {!showLoginForm && 
                <TouchableOpacity style={styles.SecondaryToggleformBtn} onPress={showLoginFormHandler}>
                    <Text style={{fontWeight :'600',color :'white'}}>Back To</Text>
                    <Text  style={{fontWeight :'900',color :'white'}}>Login</Text>
                </TouchableOpacity>
                }
                {!showRegisterForm && 
                <TouchableOpacity style={styles.SecondaryToggleformBtn} onPress={showRegisterFormHandler}>
                    <Text style={{fontWeight :'600', color :'white'}}>Click Here</Text>
                    <Text style={{fontWeight :'900',color :'white'}}>Register</Text>
                </TouchableOpacity>
                }
                <TouchableOpacity style={styles.MoreAboutBtn}>
                    <Text style={{        padding :7,
        borderRadius : 10,
        backgroundColor :'grey'}}>About Us</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.goBackHomeBtn} onPress={closeAuthWindowHandler}>
                <AntDesign name="closecircle" color="red" size={30}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    MainAuthContainer : {
        height : '100%',
        width :'100%',
    },
    LogoContainer : {
        height : '30%',
        width : '100%',
        justifyContent :'center',
        alignItems : 'center'
    },
    secondaryLogoConatiner : {
        height :"90%",
        width : '70%',
        objectFit :'contain'
    },
    AuthContainerLogo :{
        height :"90%",
        width : '90%',
        objectFit :'contain'
    },
    formContainers : {
        height :'30%',
        width :'100%',
        borderRadius : 6,
        margin : 10,
    },
    MoreAuthOptionContainer : {
        flexDirection : 'row',
        height :'20%'
    },
    OtherAuthbtn : {
        width : 'auto',
        height :50,
        backgroundColor :'grey',
        margin :10,
        justifyContent : 'center',
        alignItems :'center',
        borderRadius : 20,
        padding : 7,
        flexDirection :'row',

    },
    moreAuthOptionsBtnTextColor : {
        color : 'white',
        marginLeft :2,
    },
    toogleOptions : {
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'center',
        height :'15%'
    },
    SecondaryToggleformBtn : {
        backgroundColor :'black',
        padding :10,
        borderRadius :20,
    },
    MoreAboutBtn :{
        width :'50%',
        alignItems :'flex-end',

    },
    goBackHomeBtn : {
        position :'absolute',
        top : 10,
        right : 5,
    }
})