import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'


const DAtaBarcha = [
    {
        info: "Бир кунда 4 та қонун рад этилди. Сенат уйғоняптими?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/E-2rUq6v8x38BP0YIyaYLz6L7VY_snr7_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50"
    },
    {
        info: "Баллистик ракеталар, ҳарбий кемалар ва киберҳужумлар. Пелосининг ташрифидан кейин Тайванда нималар бўлмоқда?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/RFsa5nS0jmC5H3lknuiZQ2YXVNEh3ykc_medium.jpg",
        categoria: "DAVLAT",
        sana: "Kecha 22:50"
    },
    {
        info: "Қизларнинг мактабга миллий рўмолда келиши ман этилмайди — Халқ таълими вазири",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/gS5yJgsDionNnIcWaEK4BfzuqAYQ3mVs_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50"
    },
    {
        info: "Бир кунда 4 та қонун рад этилди. Сенат уйғоняптими?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/E-2rUq6v8x38BP0YIyaYLz6L7VY_snr7_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50"
    },
    {
        info: "Баллистик ракеталар, ҳарбий кемалар ва киберҳужумлар. Пелосининг ташрифидан кейин Тайванда нималар бўлмоқда?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/RFsa5nS0jmC5H3lknuiZQ2YXVNEh3ykc_medium.jpg",
        categoria: "DAVLAT",
        sana: "Kecha 22:50"
    },
    {
        info: "Қизларнинг мактабга миллий рўмолда келиши ман этилмайди — Халқ таълими вазири",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/gS5yJgsDionNnIcWaEK4BfzuqAYQ3mVs_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50"
    }
]
const BarchaKorsatuvlar = ({navigation}) => {
    const [rasm, setRasm] = useState("https://storage.kun.uz/source/thumbnails/_medium/8/E-2rUq6v8x38BP0YIyaYLz6L7VY_snr7_medium.jpg")
    const [info, setInfo] = useState("Бир кунда 4 та қонун рад этилди. Сенат уйғоняптими?")
    const [kategoria, setKategoria] = useState("SPORT")
    const [sana, setSana] = useState("Kecha 22:50")
    const [ID, setID] = useState(0)

    const QiymatBerish = (v,i) => {
        setRasm(v.rasm)
        setInfo(v.info)
        setKategoria(v.categoria)
        setSana(v.sana)
        setID(i)
    }
    return (
        <ScrollView>
            <TouchableOpacity onPress={()=>navigation.navigate("To'liq ma'lumot",{id:ID})}>
                <Image source={{ uri: rasm }} style={styles.mainImage} />
                <View style={styles.CardInfo}>
                    <Text style={{ marginBottom: 10 }}>{info}</Text>
                    <View style={styles.dataCard}>
                        <Text style={styles.categoryText}>{kategoria}</Text>
                        <Text>{sana}</Text>
                    </View>
                </View>
            </TouchableOpacity>


            {
                DAtaBarcha.map((v, i) => {
                    return <TouchableOpacity key={i} onPress={() => QiymatBerish(v,i)}>
                        <View style={styles.BarchaCard}>
                            <Image source={{ uri: v.rasm }} style={styles.rasm} />
                            <View style={styles.CardInfo}>
                                <Text style={{ marginBottom: 10 }}>{v.info}</Text>
                                <View style={styles.dataCard}>
                                    <Text style={styles.categoryText}>{v.categoria}</Text>
                                    <Text>{v.sana}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                })
            }
            <Text>BarchaKorsatuvlar</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    BarchaCard: {
        backgroundColor: "white",
        marginTop: 5,
        elevation: 1,
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },
    rasm: {
        width: 100,
        height: 70,
        borderRadius: 10
    },
    CardInfo: {
        flex: 1,
        marginStart: 15
    },
    dataCard: {
        flexDirection: "row"
    },
    categoryText: {
        backgroundColor: "#9ADEC7",
        fontSize: 10,
        padding: 3,
        borderRadius: 5,
        marginEnd: 15
    },
    mainImage: {
        margin: 10,
        width: "95%",
        height: 250,
        borderRadius: 10
    }
})

export default BarchaKorsatuvlar