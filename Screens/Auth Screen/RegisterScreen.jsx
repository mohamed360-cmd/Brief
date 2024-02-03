import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";

export default function RegisterScreen (){
    return(
        <View style={styles.MainRegisterFrom}>
            <TextInput placeholder="Email/Phonenumber"  placeholderTextColor={'black'} style={styles.inputField}/>
            <TextInput placeholder="password"  placeholderTextColor={'black'} style={styles.inputField}/>
            <TextInput placeholder="Repeat Password"  placeholderTextColor={'black'}  style={styles.inputField}/>
            <TouchableOpacity style={[styles.registerBtn,styles.primaryBtn]}>
                <Text style={{fontSize: 16,color : 'white',fontWeight :'bold'}}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    MainRegisterFrom : {
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