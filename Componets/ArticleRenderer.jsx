import { Text, View,StyleSheet,FlatList, Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function ArticleRenderer({ArticleInformation}){
    return(
        <FlatList
        data={ArticleInformation}
        keyExtractor={item => item.articleId}
        renderItem={({item})=>{
            return(
                <View style={styles.ArticleContainer}>
                    <View style={styles.newsChannelInfoContainer}>
                        <View style={styles.newsLogoContainer}>
                            <Image source={{uri : item.newsChannelLogo}} style={styles.newsLogo}/>
                        </View>
                        <Text style={{alignSelf :'center',color :'black'}}>{item.newsChannelName}</Text>
                    </View>
                    <View style={styles.HeadlineContainer}>
                        <Text style={styles.Headline}>{item.articleTitle}</Text>
                    </View>
                    <View style={styles.ArticleSection}>
                        <View style={styles.ArticleImageContainer}>
                            <Image source={{uri : item.articleImages[0]}} style={styles.ArticleImage}/>
                        </View>
                        {item.article.length > 70 && 
                        <Text style={styles.ArticlePreview}>
                            {item.article.substring(0,70) + "... Read More  "}
                            <FontAwesome name="share" size={20} color="grey"/>
                        </Text>
                        }
                        
                    </View>
                </View>
            )
        }}
        />
    )
}
const styles = StyleSheet.create({
    
    ArticleContainer : {
        padding :5,
        marginBottom : 10
    },
    newsChannelInfoContainer : {
        flexDirection : 'row'
    },
    newsLogoContainer : {
        height : 35,
        width : 35,
        objectFit :'cover',
        borderRadius :17,
        backgroundColor :'black',
        marginRight :5
    },
    newsLogo : {
        height : '100%',
        width : '100%',
        objectFit : 'cover',
        borderRadius :15

    },
    Headline : {
        color : 'black',
        fontSize : 27,
        fontWeight :'bold'
    },
    ArticleImageContainer : {
        height : 250,
        width :'100%',
        objectFit :'cover',
        borderTopLeftRadius : 6,
        borderTopRightRadius : 6
    },
    ArticleImage : {
        height : "100%",
        width :'100%',
        objectFit :'cover' ,
        borderTopLeftRadius : 6,
        borderTopRightRadius : 6
    },
    ArticlePreview : {
        fontSize :15,
        color :'black'
    }
})