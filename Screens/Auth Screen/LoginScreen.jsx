import {View,Text,TextInput,TouchableOpacity, StyleSheet} from "react-native"
export default function LoginScreen (){
    return (
        <View style={styles.MainLoginForm}>
            <TextInput placeholder="Email/Phonenumber"  placeholderTextColor={'black'} style={styles.inputField}/>
            <TextInput placeholder="password" placeholderTextColor={'black'} style={styles.inputField}  />
            <TouchableOpacity style={[styles.LoginBtn,styles.primaryBtn]}>
                <Text style={{fontSize: 17,color : 'white',fontWeight :'bold'}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    MainLoginForm : {
    justifyContent :'center',
    padding :15
    },
    inputField : {
        padding : 10,
        textDecorationLine :'underline'
    },
    primaryBtn : {
        padding :20,
        backgroundColor :'rgb(47,44,44)',
        borderRadius :15,
        alignSelf :'center'
    }
})