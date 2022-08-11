import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Button, TouchableOpacity } from 'react-native'


const TV = [
    {
        "nomi": "yoshlar maktabi",
        "picture": "https://xabar.uz/static/crop/4/6/920__95_464600434.jpg",
        "video": "https://player.vimeo.com/external/330412624.sd.mp4?s=853ea7644708b7986c992689dd351b0413d7b3ca&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "10:00",
        "active": false
    },
    {
        "nomi": "Biz bilan",
        "picture": "https://i.pinimg.com/474x/fc/a6/a4/fca6a4682fed5dd3de268c99b487409b--cheap-hotels-in-ivory-coast.jpg",
        "video": "https://player.vimeo.com/external/363625327.sd.mp4?s=2c170349e1fb2195661722ba0a29eb9e837ffac7&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Milliy musiqa",
        "picture": "https://api.uznews.uz/storage/uploads/posts/images/54714/inner/oRc61x6j7T.jpg",
        "video": "https://player.vimeo.com/external/310398387.sd.mp4?s=5f9fdb320cfbc4faf3b56c3e0fa3d8d466af4211&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00",
        "active": true

    },
    {
        "nomi": "Start Up Club",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "https://player.vimeo.com/external/308153460.sd.mp4?s=ac433e9077e4ae50aaf5e237cbf99295d4cdce2d&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://whyweseek.com/wp-content/uploads/2019/05/po-i-kalyan-complex-teahouse-view-bukhara.jpg",
        "video": "https://player.vimeo.com/external/307391139.sd.mp4?s=17f0ade69f05c0eaf648307c2f615685caf4f9a6&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Boriga baraka",
        "picture": "https://www.lostwithpurpose.com/wp-content/uploads/2019/09/DSC09466.jpg",
        "video": "",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        "video": "",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg",
        "video": "",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
        "video": "",
        "vaqt": "12:00",
        "active": false

    },
    {
        "nomi": "Musiqa",
        "picture": "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg",
        "video": "",
        "vaqt": "12:00",
        "active": false

    }
]

const BizTv = ({ navigation }) => {
    const [imgIndex, setImgIndex] = useState(0);


    // bu yerda qayse obyektda active true bolsa osha elemntni rasmi birinchi chiqib turadi

    useEffect(() => {
        TV.map((v, i) => {
            if (v.active) {
                setImgIndex(i)
            }
        })
    }, [])


    return (
        <ScrollView>
            <View>
                <ImageBackground source={require("../../assets/backp.png")} style={styles.backgroundCard} >

                    <TouchableOpacity onPress={() => navigation.navigate("Player", { nomi: TV[imgIndex].video })} style={styles.playerImg} >
                        <Image source={{ uri: TV[imgIndex].picture }} style={styles.pictureLogo} />
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Image source={{ uri: "https://s3.beelinetv.uz/buz-production/e790f53e326c2d89ac1e.png" }} style={styles.chenal} />
                        </View>

                    </TouchableOpacity>

                </ImageBackground>
                {
                    TV.map((v, i) => {
                        return <TouchableOpacity key={i} onPress={() => setImgIndex(i)}>
                            <View style={!v.active ? styles.tvMenu : styles.Dasturlar2}  >
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.vaqt}>{v.vaqt}</Text>
                                    <Text>{v.nomi}</Text>
                                </View>

                                <Text style={!v.active ? { display: "none" } : { fontSize: 15, color: "#FF4B6A", marginStart: 45, marginTop: 5 }}>HOZIR EFIRDA</Text>

                            </View>
                        </TouchableOpacity>

                    })
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    backgroundCard: {
        paddingTop: 15
    },
    tvMenu: {

        backgroundColor: "white",
        padding: 10,
        marginStart: 15,
        marginEnd: 10
    },
    vaqt: {
        color: "gray",
        marginEnd: 10
    },
    playerImg: {
        backgroundColor: "white",
        margin: 15,
        borderRadius: 10,
        elevation: 5,
        textAlign: "center",
        padding: 5
    },
    pictureLogo: {
        height: 200,
        borderRadius: 10
    },
    chenal: {
        zIndex: 20,
        width: "70%",
        height: 50
    },
    Dasturlar: {
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    Dasturlar2: {
        backgroundColor: "#FED4D4",
        borderRadius: 10,
        margin: 10,
        padding: 10
    }
})
export default BizTv