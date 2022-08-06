import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.mainView}>
                {/* main menu */}

                <ImageBackground source={require("../assets/backp.png")} style={styles.backgroundCard} >

                    <Text style={styles.textHi}>Assalomu alaykum, iltimos bizning kanallarimizdan birini tanlang iltimos ! </Text>

                    <View style={styles.bizTv} onTouchEnd={() => navigation.navigate('BizTv')}>
                        <Image source={require("../assets/bizm.png")} style={styles.pictureLogo} />
                    </View>

                    <View style={styles.bizC} onTouchEnd={() => navigation.navigate('BizC')}>
                        <Image source={require("../assets/bizC.png")} style={styles.pictureLogo} />
                    </View>

                    <View style={styles.bizM} onTouchEnd={() => navigation.navigate('BizM')}>
                        <Image source={require("../assets/bizm.png")} style={styles.pictureLogo} />
                    </View>

                    {/* Nav bar */}
                    {/* <View style={styles.navbarMain}>
                        <View>
                            <Text style={styles.navbarMainMini}><Feather name='tv'  style={{fontSize:20}} /></Text>
                            <Text style={styles.navbarMainMini}>TV</Text>
                        </View>
                        <View>
                            <Text style={styles.navbarMainMini}><Entypo name='radio'  style={{fontSize:20}} /></Text>
                            <Text style={styles.navbarMainMini}>Biz Fm</Text>
                        </View>
                        <View>
                            <Text style={styles.navbarMainMini}><FontAwesome name='newspaper-o'  style={{fontSize:20}} /></Text>
                            <Text style={styles.navbarMainMini}>Yangiliklar</Text>
                        </View>
                        <View>
                            <Text style={styles.navbarMainMini}><AntDesign name='videocamera'  style={{fontSize:20}}/></Text>
                            <Text style={styles.navbarMainMini}>Ko'rsatuvlar</Text>
                        </View>
                        <View>
                            <Text style={styles.navbarMainMini}><Entypo name='dots-three-horizontal' style={{fontSize:20}} /></Text>
                            <Text style={styles.navbarMainMini}>Boshqa</Text>
                        </View>
                    </View> */}
                </ImageBackground>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    backgroundCard: {
        height: "100%"
    },
    textHi: {
        textAlign: "center",
        marginTop: 30
    },
    bizTv: {
        backgroundColor: "#FF4C98",
        marginTop: 20,
        height: 130,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        borderRadius: 19
    },
    pictureLogo: {
        height: "100%",
        width: 180
    },
    bizC: {
        backgroundColor: "#12245E",
        height: 130,
        borderRadius: 19,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10
    },
    bizM: {
        backgroundColor: "#6DD400",
        height: 130,
        borderRadius: 19,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        marginBottom: 30
    },
    navbarMain: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginTop: "15%",
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        shadowColor:"black",
        shadowOffset:10,
        elevation:90,
    },
    navbarMainMini: {
        textAlign: "center",
        color:"gray",
        fontSize:10
    }
})
export default Home