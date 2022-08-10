import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BizC = () => {
  return (
    <View>
      <Text style={styles.word}>Biz Cinema</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  word:{
    marginTop:60,
    textAlign:"center",
    fontSize:25
  }
})
export default BizC