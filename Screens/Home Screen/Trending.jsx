import { Text, View } from "react-native"
import ArticleRenderer from "../../Componets/ArticleRenderer";

export default function Trending({testNewsData}){
    return(
        <View>
            <ArticleRenderer ArticleInformation={testNewsData}/>
        </View>
    )
}