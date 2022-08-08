import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, Button } from 'react-native';

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

                    
                </ImageBackground>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
   
    backgroundCard: {
        minHeight:700
    },
    textHi: {
        textAlign: "center",
        marginTop: 50
    },
    bizTv: {
        backgroundColor: "#FF4C98",
        marginTop: 20,
        height: 130,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        borderRadius: 19
    },
    pictureLogo: {
        height: 80,
        width: "40%"
    },
    bizC: {
        backgroundColor: "#12245E",
        height: 130,
        borderRadius: 19,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
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