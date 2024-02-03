import { Text, View } from "react-native";
import ArticleRenderer from "../../Componets/ArticleRenderer";
export default function Chillies ({testNewsData}){
    return(
        <View>
            <ArticleRenderer ArticleInformation={testNewsData}/>
        </View>
    )
}