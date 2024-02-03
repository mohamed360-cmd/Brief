import { Text, View } from "react-native";
import ArticleRenderer from "../../Componets/ArticleRenderer";
export default function Cookies ({testNewsData}){
    return (
        <View>
            <ArticleRenderer ArticleInformation={testNewsData}/>
        </View>
    )
}