import React from 'react'
import { Text, View, StyleSheet ,Image,ScrollView} from 'react-native'


const DAtaBarcha = [
    {
        info: "Бир кунда 4 та қонун рад этилди. Сенат уйғоняптими?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/E-2rUq6v8x38BP0YIyaYLz6L7VY_snr7_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50",
        moreInfo: "Даставвал сенаторлар Уй-жой кодексини маъқулламади. Юқори палата қонунчиларининг фикрича, кодексда маҳаллий ҳокимликларнинг давлат уй-жой фондидаги турар жойларни юридик шахсларга белгиланган мақсадда фойдаланиш учун ижара шартномаси шартлари асосида бериш ваколатини амалга ошириш тартиби белгиланмаган, бу эса ҳокимият ваколатларини суиистеъмол қилиш ва бошқа коррупцион ҳолатларга шарт-шароитлар яратиб беради. Шунингдек, ҳужжатда бошқа бир қатор нормаларни қўллаш механизмлари етарлича очиб берилмаган, шу боис уни такомилига етказиш зарур.Сенат аъзолари никоҳланувчи шахсларнинг мажбурий тиббий кўрикдан ўтганидан сўнг 1 ойлик муддатни кутмасдан исталган вақтда никоҳдан ўтиши ҳақидаги қонунга ҳам қарши чиқишди. Улар бу нормани киритишда таклифлар етарли даражада асослантирилмаган деб топди."
    },
    {
        info: "Баллистик ракеталар, ҳарбий кемалар ва киберҳужумлар. Пелосининг ташрифидан кейин Тайванда нималар бўлмоқда?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/RFsa5nS0jmC5H3lknuiZQ2YXVNEh3ykc_medium.jpg",
        categoria: "DAVLAT",
        sana: "Kecha 22:50",
        moreInfo: "Нэнси Пелоси 4 август куни Жанубий Кореяга учиб кетди, у бу сафар доирасида Корея демилитаризация ҳудудининг Шимолий ва Жанубий Корея ҳарбийлари юзма-юз турадиган ягона қисми - Қўшма хавфсизлик зонасига ташриф буюришни ҳам режалаштирган. Тайван атрофидаги сувлар ва осмонда нималар бўлмоқда? Тайван мудофаа вазирлиги маълум қилишича, пайшанба куни Хитой орол атрофида сув ва ҳавода ўтказилаётган мисли кўрилмаган ҳарбий машғулотлар вақтида ўндан ортиқ баллистик ракеталар учирди. Тайван ҳарбийлари даъво қилишича, қўшнилар оролнинг шимолий, жанубий ва шарқий қирғоқлари яқинидаги ўқув нишонлари томон ана шундай 11 та ракетани учиришган. Бундан ташқари, ракеталар Тайваннинг Мацзу ороллари томон ҳам учиб келган."
    },
    {
        info: "Қизларнинг мактабга миллий рўмолда келиши ман этилмайди — Халқ таълими вазири",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/gS5yJgsDionNnIcWaEK4BfzuqAYQ3mVs_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50",
        moreInfo: `Халқ таълими вазири Бахтиёр Саидов умумтаълим мактаблари учун ягона мактаб формасини жорий этиш масаласига доир баёнот билан чиқди. Таъкидланишича, миллий қадриятлардан келиб чиқиб, ўқувчи-қизларнинг мактабга очиқ рангдаги миллий рўмолни бошнинг орқа томонидан ўраган ҳолда келиши ман этилмайди. “Таъкидлаш жоиз, тасдиқланган ўлчамларда энг минимал узунлик белгиланган. Яъни ўқувчи-қизларнинг юбка ва кофта енгларининг узунлигини узайтиришга рухсат берилади, аммо белгиланган ўлчамдан калта бўлиши мумкин эмас”, деди вазир.`
    },
    {
        info: "Бир кунда 4 та қонун рад этилди. Сенат уйғоняптими?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/E-2rUq6v8x38BP0YIyaYLz6L7VY_snr7_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50",
        moreInfo: "Даставвал сенаторлар Уй-жой кодексини маъқулламади. Юқори палата қонунчиларининг фикрича, кодексда маҳаллий ҳокимликларнинг давлат уй-жой фондидаги турар жойларни юридик шахсларга белгиланган мақсадда фойдаланиш учун ижара шартномаси шартлари асосида бериш ваколатини амалга ошириш тартиби белгиланмаган, бу эса ҳокимият ваколатларини суиистеъмол қилиш ва бошқа коррупцион ҳолатларга шарт-шароитлар яратиб беради. Шунингдек, ҳужжатда бошқа бир қатор нормаларни қўллаш механизмлари етарлича очиб берилмаган, шу боис уни такомилига етказиш зарур.Сенат аъзолари никоҳланувчи шахсларнинг мажбурий тиббий кўрикдан ўтганидан сўнг 1 ойлик муддатни кутмасдан исталган вақтда никоҳдан ўтиши ҳақидаги қонунга ҳам қарши чиқишди. Улар бу нормани киритишда таклифлар етарли даражада асослантирилмаган деб топди."
    },
    {
        info: "Баллистик ракеталар, ҳарбий кемалар ва киберҳужумлар. Пелосининг ташрифидан кейин Тайванда нималар бўлмоқда?",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/RFsa5nS0jmC5H3lknuiZQ2YXVNEh3ykc_medium.jpg",
        categoria: "DAVLAT",
        sana: "Kecha 22:50",
        moreInfo: "Нэнси Пелоси 4 август куни Жанубий Кореяга учиб кетди, у бу сафар доирасида Корея демилитаризация ҳудудининг Шимолий ва Жанубий Корея ҳарбийлари юзма-юз турадиган ягона қисми - Қўшма хавфсизлик зонасига ташриф буюришни ҳам режалаштирган. Тайван атрофидаги сувлар ва осмонда нималар бўлмоқда? Тайван мудофаа вазирлиги маълум қилишича, пайшанба куни Хитой орол атрофида сув ва ҳавода ўтказилаётган мисли кўрилмаган ҳарбий машғулотлар вақтида ўндан ортиқ баллистик ракеталар учирди. Тайван ҳарбийлари даъво қилишича, қўшнилар оролнинг шимолий, жанубий ва шарқий қирғоқлари яқинидаги ўқув нишонлари томон ана шундай 11 та ракетани учиришган. Бундан ташқари, ракеталар Тайваннинг Мацзу ороллари томон ҳам учиб келган."
    },
    {
        info: "Қизларнинг мактабга миллий рўмолда келиши ман этилмайди — Халқ таълими вазири",
        rasm: "https://storage.kun.uz/source/thumbnails/_medium/8/gS5yJgsDionNnIcWaEK4BfzuqAYQ3mVs_medium.jpg",
        categoria: "SPORT",
        sana: "Kecha 22:50",
        moreInfo: `Халқ таълими вазири Бахтиёр Саидов умумтаълим мактаблари учун ягона мактаб формасини жорий этиш масаласига доир баёнот билан чиқди. Таъкидланишича, миллий қадриятлардан келиб чиқиб, ўқувчи-қизларнинг мактабга очиқ рангдаги миллий рўмолни бошнинг орқа томонидан ўраган ҳолда келиши ман этилмайди. “Таъкидлаш жоиз, тасдиқланган ўлчамларда энг минимал узунлик белгиланган. Яъни ўқувчи-қизларнинг юбка ва кофта енгларининг узунлигини узайтиришга рухсат берилади, аммо белгиланган ўлчамдан калта бўлиши мумкин эмас”, деди вазир.`
    }


]
const InfoK = ({ route, navigation }) => {
    let index= route.params.id;
    return (
        <ScrollView>

            <Image source={{ uri: DAtaBarcha[index].rasm }} style={styles.mainImage} />
            <View style={{margin:10}}>
                <Text style={{ marginBottom: 10,fontSize:20,fontWeight:"bold" }}>{DAtaBarcha[index].info}</Text>
                <Text style={{ marginBottom: 10,fontSize:16 }}>{DAtaBarcha[index].moreInfo}</Text>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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

export default InfoK