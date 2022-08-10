import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Player = ({ navigation, route }) => {
    const qiymat = route.params.nomi;
    console.log(qiymat);
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (

        <View>

            <View style={styles.container}>


                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: qiymat,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />

                <Text style={styles.backKome} onPress={() => navigation.navigate("BizTv")} ><AntDesign name='closecircle' style={{ color: "gray", fontSize: 40 }} /></Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    video: {
        height: 200,
        marginTop: 30,
        margin: 20,
        marginTop: 100,
        borderRadius: 20,
    },
    backKome: {
        textAlign: "center",
        marginTop: 20,
    }
})
export default Player