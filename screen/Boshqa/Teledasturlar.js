import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Switch, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TeledasturData = [
    {
        week: "DUSHANBA",
        data: [
            {
                vaqt: "10:30",
                dasturNomi: "Отель. Премьера нового сезона",
                active: false
            },
            {
                vaqt: "10:30",
                dasturNomi: "Biz bilan "
            },
            {
                vaqt: "10:30",
                dasturNomi: "Start Up Club",
                active: false

            },
            {
                vaqt: "10:30",
                dasturNomi: "Отель. Премьера нового сезона",
                active: true

            },
            {
                vaqt: "10:30",
                dasturNomi: "Start Up Club",
                active: false

            }
        ]
    },
    {
        week: "SESHANBA",
        data: [
            {
                vaqt: "10:30",
                dasturNomi: "Отель. Премьера нового сезона",
                active: false
            },
            {
                vaqt: "10:30",
                dasturNomi: "Biz bilan "
            },
            {
                vaqt: "10:30",
                dasturNomi: "Start Up Club",
                active: false

            },
            {
                vaqt: "10:30",
                dasturNomi: "Отель. Премьера нового сезона",
                active: false

            },
            {
                vaqt: "10:30",
                dasturNomi: "Start Up Club",
                active: false

            }
        ]
    }
];
const Teledasturlar = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>
            <Text style={{ margin: 10, fontWeight: "bold" }}>{TeledasturData[0].week}</Text>
            {TeledasturData[0].data.map((v, i) => {
                return <TouchableOpacity key={i}>
                    <View style={!v.active ? styles.Dasturlar : styles.Dasturlar2}>
                        <Text style={{ marginEnd: 15 }}>{v.vaqt}</Text>
                        <View>
                            <Text>{v.dasturNomi}</Text>
                            <Text style={!v.active ? { display: "none" } : { fontSize: 15, color: "#FF4B6A" }}>HOZIR EFIRDA</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            })}

            <Text style={{ margin: 10, fontWeight: "bold" }}>{TeledasturData[1].week}</Text>
            {TeledasturData[1].data.map((v, i) => {
                return <TouchableOpacity key={i}>
                    <View style={!v.active ? styles.Dasturlar : styles.Dasturlar2}>
                        <Text style={{ marginEnd: 15 }}>{v.vaqt}</Text>
                        <View>
                            <Text>{v.dasturNomi}</Text>
                            <Text style={!v.active ? { display: "none" } : { fontSize: 15, color: "#FF4B6A" }}>HOZIR EFIRDA</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            })}

        </ScrollView>
    )
}
const styles = StyleSheet.create({

    Dasturlar: {
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    Dasturlar2: {
        backgroundColor: "#FED4D4",
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
        padding: 10
    }
})
export default Teledasturlar