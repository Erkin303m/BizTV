import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'

const BizM = () => {
  return (
    <View>
        <Text style={styles.word}>Biz Music</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  word:{
    marginTop:60,
    textAlign:"center",
    fontSize:25
  }
})
export default BizM