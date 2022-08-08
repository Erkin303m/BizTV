import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const Korsatuvlar = () => {
  return (
    <SafeAreaView>
      <View style={styles.rang}>
        <Text>Biz Korsatuvlar</Text>
        <Text>Biz Korsatuvlar</Text>
        <Text>Biz Korsatuvlar</Text>
        <Text>Biz Korsatuvlar</Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  rang:{
    backgroundColor:"green"
  }
})
export default Korsatuvlar