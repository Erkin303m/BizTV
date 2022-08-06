import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Button, TouchableOpacity } from 'react-native'


const TV = [
    {
        "nomi": "yoshlar maktabi",
        "picture": "https://xabar.uz/static/crop/4/6/920__95_464600434.jpg",
        "video": "https://player.vimeo.com/external/330412624.sd.mp4?s=853ea7644708b7986c992689dd351b0413d7b3ca&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "10:00"
    },
    {
        "nomi": "Biz bilan",
        "picture": "https://i.pinimg.com/474x/fc/a6/a4/fca6a4682fed5dd3de268c99b487409b--cheap-hotels-in-ivory-coast.jpg",
        "video": "https://player.vimeo.com/external/363625327.sd.mp4?s=2c170349e1fb2195661722ba0a29eb9e837ffac7&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00"

    },
    {
        "nomi": "Milliy musiqa",
        "picture": "https://api.uznews.uz/storage/uploads/posts/images/54714/inner/oRc61x6j7T.jpg",
        "video": "https://player.vimeo.com/external/310398387.sd.mp4?s=5f9fdb320cfbc4faf3b56c3e0fa3d8d466af4211&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00"

    },
    {
        "nomi": "Start Up Club",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "https://player.vimeo.com/external/308153460.sd.mp4?s=ac433e9077e4ae50aaf5e237cbf99295d4cdce2d&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00"

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "https://player.vimeo.com/external/307391139.sd.mp4?s=17f0ade69f05c0eaf648307c2f615685caf4f9a6&profile_id=164&oauth2_token_id=57447761",
        "vaqt": "12:00"

    },
    {
        "nomi": "Boriga baraka",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "",
        "vaqt": "12:00"

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "",
        "vaqt": "12:00"

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "",
        "vaqt": "12:00"

    },
    {
        "nomi": "Sen bilan",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "",
        "vaqt": "12:00"

    },
    {
        "nomi": "Musiqa",
        "picture": "https://www.gazeta.uz/media/img/2020/12/kaUnbh16089011393584_l.jpg",
        "video": "",
        "vaqt": "12:00"

    }
]

const BizTv = ({ navigation }) => {
    const [imgIndex, setImgIndex] = useState(0);
    

    return (
        <ScrollView>
            <View>
                <ImageBackground source={require("../../assets/backp.png")} style={styles.backgroundCard} >

                    <TouchableOpacity onPress={() => navigation.navigate("Player", { nomi: TV[imgIndex].video })} style={styles.playerImg} >
                        <Image source={{uri: TV[imgIndex].picture}} style={styles.pictureLogo} />
                    </TouchableOpacity>

                </ImageBackground>
                {
                    TV.map((v, i) => {
                        return <TouchableOpacity key={i} onPress={()=>setImgIndex(i)}>
                            <View  style={styles.tvMenu}  >
                            <Text style={styles.vaqt}>{v.vaqt}</Text>
                            <Text>{v.nomi}</Text>
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
        // height: "50%"
    },
    tvMenu: {
        flexDirection: "row",
        backgroundColor: "white",
        marginBottom: 5,
        padding: 10,
        elevation: 10,
        marginStart:15,
        marginEnd:10
    },
    vaqt: {
        color: "gray",
        marginEnd: 10
    },
    playerImg:{
        backgroundColor:"white",
        margin:15,
        borderRadius:10,
        elevation:5
    },
    pictureLogo:{
        height:200
    }
})
export default BizTv