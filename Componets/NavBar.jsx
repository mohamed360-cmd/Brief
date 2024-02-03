import { View ,Text,StyleSheet,Image} from "react-native"
import navLogo from '../Assets/briefnavLogo.png'
export default function NavBar(){
    return (
        <View style={styles.NavBarMainContainer}>
            <View style={styles.LogoContainer}>
                <Image source={navLogo} style={styles.navLogo}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    NavBarMainContainer  : {
        flexDirection : 'row',
        height  : 50,
        width : '100%',
        alignItems :'center'
    },
    LogoContainer : {
        height :50,
        width : 70,
        objectFit :'contain'
    },
    navLogo :{
        height : '100%',
        width :'100%',
        objectFit :'contain'
    }
})