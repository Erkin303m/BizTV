import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const BizFm = () => {
  return (
    <View>
      <ImageBackground source={require("../../assets/backp.png")} style={styles.backgroundCard} >
        <View style={styles.imgCardMain}>
          <View style={styles.imgCard}>
            <Image source={require("../../assets/Shape.jpg")} style={styles.pictureLogo} />
          </View>
        </View>
        <Text style={{color:"red",textAlign:"center",fontSize:18}}>HOZIR EFIRDA</Text>
        <Text style={{textAlign:"center",fontSize:17}}>Empire State of Mind feat. Alicia Keys JAY_Z & ALICIA KEYS</Text>
        

      </ImageBackground>

    </View>
  )
}
const styles = StyleSheet.create({
  rasm: {
    width: 100,
    borderRadius: 100
  },
  imgCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    borderRadius: 100,
    backgroundColor: "white",
    paddingStart: 10,
    elevation: 10,
    borderWidth: 10,
    borderColor: "#26D6F1"
  },
  backgroundCard: {
    height: "100%",
  },
  imgCardMain:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height:300
  }
})
export default BizFm