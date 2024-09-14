import { View, Text, TextInput, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'

const Bar = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flex: 1, backgroundColor: '#fff', height: '100%', width: '100%' }}>
      <View style={{ }}>


        <View style={{borderRadius:15,height:moderateScaleVertical(50),width:'100%',backgroundColor:'#ecf3f6',marginTop:moderateScaleVertical(25)}}>
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:moderateScale(10),paddingLeft:moderateScale(10)}}>
            <Image
              source={{uri:"https://cdn-icons-png.flaticon.com/512/149/149852.png"}}
              style={{ height: moderateScaleVertical(20), width: moderateScale(20) }}
            />
            <TextInput
              placeholder='Search for products'
              style={{fontSize:16,color:'#b4bbbe'}}
            />
          </View>
        </View>


      </View>
    </View>
  </SafeAreaView>
  )
}

export default Bar