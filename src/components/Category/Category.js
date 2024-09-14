import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'

const Category = () => {
    return (
        <SafeAreaView>
            <View style={{ marginTop: moderateScaleVertical(50), flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: moderateScale(15) }}>
                {/* Box 1 */}
                <View style={{ backgroundColor: '#ecf1f5', width: moderateScale(150), height: moderateScaleVertical(200), borderRadius: 15 }}>
                    <View style={{ alignItems: 'center', position: 'absolute', left: 0, right: 0, top: -30, }}>
                        <Image
                            source={require('../../assets/Category/Rice.png')}
                            style={{ height: moderateScaleVertical(120), width: moderateScale(120) }}
                        />
                        <View>
                        <Text style={{ fontWeight: '500', color: '#000000', fontSize: 17 ,marginTop:moderateScaleVertical(12)}}>Basmati Rice</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 15, marginTop:moderateScaleVertical(20) }}>
                            <View style={{flexDirection:'row',gap:5}}>
                            <Text style={{ fontWeight: '400', color: '#b0b7b8', fontSize: 15, }}>From </Text>
                            <Text style={{ fontWeight: '400', color: '#000000', fontSize: 15, }}>$07 </Text>
                            </View>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/318/318476.png' }}
                                style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#ee7d29' }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#ecf1f5', width: moderateScale(150), height: moderateScaleVertical(200), borderRadius: 15 }}>
                    <View style={{ alignItems: 'center', position: 'absolute', left: 0, right: 0, top: -30, }}>
                        <Image
                            source={require('../../assets/Category/Rice.png')}
                            style={{ height: moderateScaleVertical(120), width: moderateScale(120) }}
                        />
                        <View>
                        <Text style={{ fontWeight: '500', color: '#000000', fontSize: 17 ,marginTop:moderateScaleVertical(12)}}>Basmati Rice</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 15, marginTop:moderateScaleVertical(20) }}>
                            <View style={{flexDirection:'row',gap:5}}>
                            <Text style={{ fontWeight: '400', color: '#b0b7b8', fontSize: 15, }}>From </Text>
                            <Text style={{ fontWeight: '400', color: '#000000', fontSize: 15, }}>$07 </Text>
                            </View>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/318/318476.png' }}
                                style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#ee7d29' }}
                            />
                        </View>
                    </View>
                </View>
                {/* Box 3 */}
                <View style={{ backgroundColor: '#ecf1f5', width: moderateScale(150), height: moderateScaleVertical(200), borderRadius: 15 }}>
                    <View style={{ alignItems: 'center', position: 'absolute', left: 0, right: 0, top: -30, }}>
                        <Image
                            source={require('../../assets/Category/Rice.png')}
                            style={{ height: moderateScaleVertical(120), width: moderateScale(120) }}
                        />
                        <View>
                        <Text style={{ fontWeight: '500', color: '#000000', fontSize: 17 ,marginTop:moderateScaleVertical(12)}}>Basmati Rice</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 15, marginTop:moderateScaleVertical(20) }}>
                            <View style={{flexDirection:'row',gap:5}}>
                            <Text style={{ fontWeight: '400', color: '#b0b7b8', fontSize: 15, }}>From </Text>
                            <Text style={{ fontWeight: '400', color: '#000000', fontSize: 15, }}>$07 </Text>
                            </View>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/318/318476.png' }}
                                style={{ height: moderateScaleVertical(20), width: moderateScale(20), tintColor: '#ee7d29' }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Category