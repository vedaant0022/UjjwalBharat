import { View, Text, SafeAreaView, Image, requireNativeComponent, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'

const Coupons = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
        <View style={{ marginLeft: moderateScale(10), marginRight: moderateScale(10), marginTop: moderateScaleVertical(30) }}>
          {/* Coupon 1 */}
          <View>
            <View style={{paddingLeft:moderateScale(10)}}>
              <Text style={{fontSize:18,color:'#000000',fontWeight:'400'}}>Holi Food Festival..</Text>
            </View>
            <View style={{ alignItems: 'center',  }}>
              <Image
                source={require('../../assets/Coupons/Coupon.png')}
                style={{ height: moderateScaleVertical(125), width: '100%', borderRadius: 15, resizeMode: 'contain' }}
              />
            </View>
          </View>
          {/* Coupon 2 */}
          <View>
            <View style={{paddingLeft:moderateScale(10)}}>
              <Text style={{fontSize:18,color:'#000000',fontWeight:'400'}}>Holi Food Festival..</Text>
            </View>
            <View style={{ alignItems: 'center',  }}>
              <Image
                source={require('../../assets/Coupons/Coupon.png')}
                style={{ height: moderateScaleVertical(125), width: '100%', borderRadius: 15, resizeMode: 'contain' }}
              />
            </View>
          </View>
          {/* Coupons 3 */}
          <View>
            <View style={{paddingLeft:moderateScale(10)}}>
              <Text style={{fontSize:18,color:'#000000',fontWeight:'400'}}>Holi Food Festival..</Text>
            </View>
            <View style={{ alignItems: 'center',  }}>
              <Image
                source={require('../../assets/Coupons/Coupon.png')}
                style={{ height: moderateScaleVertical(125), width: '100%', borderRadius: 15, resizeMode: 'contain' }}
              />
            </View>
          </View>
          {/* Coupon 3 */}
          <View>
            <View style={{paddingLeft:moderateScale(10)}}>
              <Text style={{fontSize:18,color:'#000000',fontWeight:'400'}}>Holi Food Festival..</Text>
            </View>
            <View style={{ alignItems: 'center',  }}>
              <Image
                source={require('../../assets/Coupons/Coupon.png')}
                style={{ height: moderateScaleVertical(125), width: '100%', borderRadius: 15, resizeMode: 'contain' }}
              />
            </View>
          </View>
          {/* coupon 4 */}
          <View>
            <View style={{paddingLeft:moderateScale(10)}}>
              <Text style={{fontSize:18,color:'#000000',fontWeight:'400'}}>Holi Food Festival..</Text>
            </View>
            <View style={{ alignItems: 'center',  }}>
              <Image
                source={require('../../assets/Coupons/Coupon.png')}
                style={{ height: moderateScaleVertical(125), width: '100%', borderRadius: 15, resizeMode: 'contain' }}
              />
            </View>
          </View>
          {/* coupon 5 */}
          <View>
            <View style={{paddingLeft:moderateScale(10)}}>
              <Text style={{fontSize:18,color:'#000000',fontWeight:'400'}}>Holi Food Festival..</Text>
            </View>
            <View style={{ alignItems: 'center',  }}>
              <Image
                source={require('../../assets/Coupons/Coupon.png')}
                style={{ height: moderateScaleVertical(125), width: '100%', borderRadius: 15, resizeMode: 'contain' }}
              />
            </View>
          </View>

          
        </View>
        <View style={{ marginBottom: moderateScaleVertical(100) }}></View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Coupons