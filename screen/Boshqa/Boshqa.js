import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Switch, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Boshqa = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <ScrollView>
      <ImageBackground source={require("../../assets/backp.png")} style={styles.backgroundCard} >

        <View style={styles.IconsMainCard}>
          <TouchableOpacity style={{ width: "19%" }}>
            <View style={styles.minCard}>
              <EvilIcons name='sc-facebook' color={"#2168EF"} size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "19%" }}>
            <View style={styles.minCard}>
              <EvilIcons name='sc-google-plus' color={"#FF3B50"} size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "19%" }}>
            <View style={styles.minCard}>
              <EvilIcons name='sc-twitter' color={"#1AB4F9"} size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "19%" }}>
            <View style={styles.minCard}>
              <Entypo name='instagram' color={"#FF3C8C"} size={23} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "19%" }}>
            <View style={styles.minCard}>
              <MaterialCommunityIcons name='antenna' color={"#FF8519"} size={23} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Teledasturlar va korsatuvlar, bu yerdan teledasturlar royhatini korish mumkin */}
        <TouchableOpacity onPress={() => navigation.navigate("Teledasturlar")}>
          <View style={styles.boshqaCard}>
            <View style={{ width: "30%" }}>
              <Image source={require("../../assets/bizm.png")} style={styles.pictureLogo} />
            </View>
            <View style={{ width: "70%" }}>
              <Text>Teledasturlar!</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Teledasturlar")}>
          <View style={styles.boshqaCard}>
            <View style={{ width: "30%" }}>
              <Image source={require("../../assets/bizC.png")} style={styles.pictureLogo} />
            </View>
            <View style={{ width: "70%" }}>
              <Text>Reklama</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Teledasturlar")}>
          <View style={styles.boshqaCard}>
            <View style={{ width: "30%" }}>
              <Image source={require("../../assets/bizC.png")} style={styles.pictureLogo} />
            </View>
            <View style={{ width: "70%" }}>
              <Text>Biz bilan aloqa</Text>
            </View>
          </View>
        </TouchableOpacity>


        {/* sozlamalar */}
        <View style={styles.switchCard}>
          <TouchableOpacity onPress={()=>navigation.navigate("Loyiha haqida")}>
            <View style={styles.chiziq}>
              <Text>Loyiha haqida</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.chiziq}>
            <Text>Foydalanish shartlari</Text>
          </View>

          <View style={styles.container}>
            <Text>Уведомления</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#FFA4C1' }}
              thumbColor={isEnabled ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

      </ImageBackground>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  backgroundCard: {
    paddingTop: 170,
    height: "100%"
  },
  IconsMainCard: {
    backgroundColor: "#DADCE0",
    borderRadius: 30,
    marginStart: 60,
    marginEnd: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    justifyContent: "space-between",
    marginBottom: 20
  },
  minCard: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"

  },
  pictureLogo: {
    width: "50%",
    height: 40
  },
  boshqaCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    zIndex: 20,
    flexDirection: "row",
    margin: 10,
    alignItems: "center"
  },
  switchCard: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  chiziq: {
    borderBottomColor: '#EFF4FB',
    borderBottomWidth: 2,
    padding: 10
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
})
export default Boshqa