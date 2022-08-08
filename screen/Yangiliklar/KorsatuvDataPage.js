import React from 'react'
import { Text, View, StyleSheet, Image ,ScrollView} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Yangiliklar = [
    {
        "nomi": "Markaziy studiya 839 soni",
        "rasm": "https://i.ytimg.com/vi/yDcgm4KZOE8/maxresdefault.jpg",
        "like": 256,
        "sana": "08.06.2021"
    },
    {
        "nomi": "Markaziy studiya 900 soni",
        "rasm": "https://i.ytimg.com/vi/K9E8bo-0OLU/maxresdefault.jpg",
        "like": 103,
        "sana": "25.05.2021"
    },
    {
        "nomi": "Markaziy studiya 500 soni",
        "rasm": "https://i.ytimg.com/vi/68OpJ04fXFo/maxresdefault.jpg",
        "like": 892,
        "sana": "14.05.2022"
    },
    {
        "nomi": "Markaziy studiya 839 soni",
        "rasm": "https://i.ytimg.com/vi/yDcgm4KZOE8/maxresdefault.jpg",
        "like": 256,
        "sana": "08.06.2021"
    },
    {
        "nomi": "Markaziy studiya 900 soni",
        "rasm": "https://i.ytimg.com/vi/K9E8bo-0OLU/maxresdefault.jpg",
        "like": 103,
        "sana": "25.05.2021"
    },
    {
        "nomi": "Markaziy studiya 500 soni",
        "rasm": "https://i.ytimg.com/vi/68OpJ04fXFo/maxresdefault.jpg",
        "like": 892,
        "sana": "14.05.2022"
    }



]
const KorsatuvDataPage = ({ route, navigation }) => {
    console.log(route);
    return (
        <ScrollView  style={{backgroundColor:"white"}}>
            {
                Yangiliklar.map((v, i) => {
                    return <View key={i}>
                        <View style={styles.imgCard}>
                            <View style={styles.iconCard}>
                                <Entypo name='controller-play' color={"white"} size={25} />
                            </View>

                            <Image source={{ uri: v.rasm }} style={styles.rasm} />
                        </View>
                        <Text style={styles.mWord}>{v.nomi}</Text>
                        <View style={styles.sana}>
                            <View style={styles.twoIconCard}>
                                <View style={styles.iconCardMini}>
                                    <Entypo name='share' color={"#0071D4"} size={17} />

                                </View>
                                <View style={styles.iconCardMini}>
                                    <AntDesign name='like1' color={"#0071D4"} size={17} />
                                </View>
                                <Text style={styles.wordDate}>{v.like}</Text>

                            </View>
                            <View>
                                <Text style={styles.wordDate}>{v.sana}</Text>
                            </View>
                        </View>
                    </View>
                })
            }
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    yozuv: {
        marginTop: 50
    },
    rasm: {
        width: "100%",
        height: 170,
        borderRadius: 10,
    },
    imgCard: {
        padding: 20,
        position: "relative"
    },
    iconCard: {
        position: "absolute",
        right: "51%",
        top: "50%",
        zIndex: 20,
        backgroundColor: "rgba(255, 255, 255, 0.259506)",
        padding: 10,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    mWord: {
        color: "#2945AB",
        fontSize: 14,
        marginStart: 20
    },
    sana: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginStart: 20,
        marginEnd: 20
    },
    iconCardMini: {
        backgroundColor: "rgba(50, 197, 255, 0.259506)",
        padding: 10,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginEnd: 5,
    },
    twoIconCard: {
        flexDirection: "row"
    },
    wordDate:{
        marginTop:10,
        color: "gray"
    }
});

export default KorsatuvDataPage