import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Createacc = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{backgroundColor:'#fff', height:'100%',width:'100%'}}>
        <View>
<TouchableOpacity
onPress={()=>{navigation.navigate('Tab')}}
>
  <View>
    <Text>Next</Text>
  </View>
</TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Createacc