import { View,StyleSheet,Text,TouchableOpacity } from "react-native";
import Chillies from "./Chillies";
import Cookies from "./Cookies";
import AllNews from "./AllNews";
import Trending from "./Trending";
import NavBar from "../../Componets/NavBar";
import { useEffect, useState } from "react";
export default function HomeScreen({isLoggedin}){
    const [testNewsData,setTestNewsData] = useState([
        {
            newsChannelName : 'Daily Nation',
            newsChannelLogo : 'data:image/jpeg;base64,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',
            articleTitle : 'Fish Found Living in Water ',
            articleImages : 
            [
                'https://img.freepik.com/free-photo/cute-fish-underwater_23-2150699467.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais'
            ],
            article : 
            " In a fascinating revelation, scientists have confirmed that fish are not just inhabitants of water; they are true masters of their liquid domain. Recent studies highlight the incredible adaptations that allow fish not only to survive but to thrive beneath the surface. With specialized gills extracting life-sustaining oxygen and streamlined bodies for swift navigation, fish have evolved into aquatic experts. Contrary to popular belief, their behaviors go beyond mere swimming. Elaborate mating rituals and coordinated hunting strategies showcase a level of sophistication that challenges our understanding of these underwater inhabitants. This newfound insight into fish behavior not only enriches our scientific knowledge but also emphasizes the need for conservation. As we unlock the mysteries of their aquatic world, it becomes increasingly crucial to preserve the delicate ecosystems that support these remarkable creatures.In the end, the revelation that fish are not just living but flourishing in water adds another layer to the wonders of our natural world. It beckons us to appreciate the resilience and adaptability of these underwater marvels and serves as a reminder of the importance of preserving their habitats for generations to come." ,
            articleReadCount : '10010',
            articleId : 'bshi1010',
            articleDate :' 15/1/2024'
        },
        {
            newsChannelName : 'Daily Nation',
            newsChannelLogo : 'data:image/jpeg;base64,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',
            articleTitle : 'Fish Found Living in Water ',
            articleImages : 
            [
                'https://img.freepik.com/free-photo/cute-fish-underwater_23-2150699467.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais'
            ],
            article : 
            " In a fascinating revelation, scientists have confirmed that fish are not just inhabitants of water; they are true masters of their liquid domain. Recent studies highlight the incredible adaptations that allow fish not only to survive but to thrive beneath the surface. With specialized gills extracting life-sustaining oxygen and streamlined bodies for swift navigation, fish have evolved into aquatic experts. Contrary to popular belief, their behaviors go beyond mere swimming. Elaborate mating rituals and coordinated hunting strategies showcase a level of sophistication that challenges our understanding of these underwater inhabitants. This newfound insight into fish behavior not only enriches our scientific knowledge but also emphasizes the need for conservation. As we unlock the mysteries of their aquatic world, it becomes increasingly crucial to preserve the delicate ecosystems that support these remarkable creatures.In the end, the revelation that fish are not just living but flourishing in water adds another layer to the wonders of our natural world. It beckons us to appreciate the resilience and adaptability of these underwater marvels and serves as a reminder of the importance of preserving their habitats for generations to come." ,
            articleReadCount : '10010',
            articleId : 'shi1010',
            articleDate :' 15/1/2024'
        },
        {
            newsChannelName : 'Daily Nation',
            newsChannelLogo : 'data:image/jpeg;base64,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',
            articleTitle : 'Fish Found Living in Water ',
            articleImages : 
            [
                'https://img.freepik.com/free-photo/cute-fish-underwater_23-2150699467.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais'
            ],
            article : 
            " In a fascinating revelation, scientists have confirmed that fish are not just inhabitants of water; they are true masters of their liquid domain. Recent studies highlight the incredible adaptations that allow fish not only to survive but to thrive beneath the surface. With specialized gills extracting life-sustaining oxygen and streamlined bodies for swift navigation, fish have evolved into aquatic experts. Contrary to popular belief, their behaviors go beyond mere swimming. Elaborate mating rituals and coordinated hunting strategies showcase a level of sophistication that challenges our understanding of these underwater inhabitants. This newfound insight into fish behavior not only enriches our scientific knowledge but also emphasizes the need for conservation. As we unlock the mysteries of their aquatic world, it becomes increasingly crucial to preserve the delicate ecosystems that support these remarkable creatures.In the end, the revelation that fish are not just living but flourishing in water adds another layer to the wonders of our natural world. It beckons us to appreciate the resilience and adaptability of these underwater marvels and serves as a reminder of the importance of preserving their habitats for generations to come." ,
            articleReadCount : '10010',
            articleId : 'bsh1010',
            articleDate :' 15/1/2024'
        },
    ])
    const [showAllView,setShowAllView] = useState(true)
    const [showChilliesView,setShowChilliesView] = useState(false)
    const [showTrendingView,setShowTrendingView] = useState(false)
    const [showCookiesView,setShowCookiesView] = useState(false)
    const allTabContolHandler = ()=>{
        setShowAllView(true)
        setShowChilliesView(false)
        setShowTrendingView(false)
        setShowCookiesView(false)
    }
    const ChilliesControlHandler = ()=>{
        setShowAllView(false)
        setShowChilliesView(true)
        setShowTrendingView(false)
        setShowCookiesView(false)
    }
    const TrendingControlHandler = ()=>{
        setShowAllView(false)
        setShowChilliesView(false)
        setShowTrendingView(true)
        setShowCookiesView(false)
    }
    const CookiesControlHandler = ()=>{
        setShowAllView(false)
        setShowChilliesView(false)
        setShowTrendingView(false)
        setShowCookiesView(true)
    }
    useEffect(()=>{
        console.log(isLoggedin)
    },[])
    return(
        <View style={styles.MainHomeContainer}>  
        <NavBar/>
        <View style={styles.TabControllsContainer}>
            <TouchableOpacity  onPress={allTabContolHandler}>
                <View style={[styles.TabButtons ,showAllView ? styles.ActiveTab : styles.InActive]}>
                    <Text style={styles.tabText}>All</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ChilliesControlHandler}>
                <View style={[styles.TabButtons ,showChilliesView ? styles.ActiveTab : styles.InActive]}>
                    <Text style={styles.tabText}>Chillies</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={TrendingControlHandler}>
                <View style={[styles.TabButtons ,showTrendingView ? styles.ActiveTab : styles.InActive]} >
                    <Text style={styles.tabText}>Trending</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={CookiesControlHandler} >
                <View style={[styles.TabButtons ,showCookiesView ? styles.ActiveTab : styles.InActive]} >
                    <Text style={styles.tabText}>Cookies</Text>
                </View>
            </TouchableOpacity>
        </View>
            {showAllView && <AllNews testNewsData={testNewsData}/>}
            {showChilliesView && <Chillies testNewsData={testNewsData}/>}
            {showTrendingView && <Trending testNewsData={testNewsData}/>}
            {showCookiesView && <Cookies testNewsData={testNewsData}/>}

        </View>
    )
}
const styles = StyleSheet.create({
    MainHomeContainer : {
        height : '100%',
        width : '100%'
    },
    TabControllsContainer : {
        flexDirection : 'row',
        height :45,
        width :'100%',
        justifyContent :'center',
        alignItems :'center'
    },
    TabButtons : {
        padding : 10,
        marginLeft : 10,
    },
    ActiveTab : {
        backgroundColor : 'rgb(217,217,217)',
        borderRadius : 6

    },
    tabText : {
        color : 'black',
        fontFamily :'inter'
    }
})