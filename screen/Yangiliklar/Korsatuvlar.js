import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


const Yangiliklar = [
    {
        backImg: "#891750",
        "nomi": "Markaziy studio",
        tv: [
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
    },
    {
        backImg: "#F0B371",
        nomi: "Boriga baraka",
        tv: [
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
    },
    {
        backImg: "#D64F95",
        nomi: "Omad shou",
        tv: [
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
    },
    {
        backImg: "#52B9EF",
        nomi: "Zakovat",
        tv: [
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
    },
    {
        backImg: "#085C6D",
        nomi: "Yor-Yor",
        tv: [
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
    }
]
const Korsatuvlar = ({ navigation }) => {
    return (
        <View style={styles.AllCard}>
            {
                Yangiliklar.map((v, i) => {
                    return <TouchableOpacity key={i} style={{ width: "50%" }} onPress={() => navigation.navigate('Markaziy Studio', { pageName: v.nomi })}  >
                        <View style={{ padding: 10, width: "100%" }}>
                            <View style={{ height: 150, borderRadius: 15, backgroundColor: v.backImg, flexDirection: "row", alignItems: "flex-end", padding: 10, width: "100%", height: 150, elevation:10 }}>
                                <Text style={styles.word}>{v.nomi}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    AllCard: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor:"white",
        height: "100%"
    },
    word: {
        color: "white"
    }
});

export default Korsatuvlar