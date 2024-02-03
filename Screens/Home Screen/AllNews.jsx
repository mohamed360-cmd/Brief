import { Text, View,StyleSheet,FlatList, Image } from "react-native";
import ArticleRenderer from "../../Componets/ArticleRenderer";
export default function AllNews({testNewsData}){
    return(
        <View style={styles.AllNewsMainContainer}>
            <ArticleRenderer ArticleInformation={testNewsData}/>
        </View>
    )
}
const styles = StyleSheet.create({
    AllNewsMainContainer : {
        height :'100%',
        width :'100%'
    },
})