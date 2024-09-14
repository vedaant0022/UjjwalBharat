import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'

const Header = () => {
    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                        <View>
                            <Image
                                source={require('../../assets/Logo/Logo.png')}
                                style={{ height: moderateScaleVertical(50), width: moderateScale(50) }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 19, color: '#000000', fontWeight: '500' }}>Deliver@</Text>
                            <Text style={{ fontSize: 16, color: '#000000', fontWeight: '400', paddingLeft: 5 }}>DN 53 Madison Bldg</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',gap:12 }}>
                        <View>
                            <Image
                                source={require('../../assets/Icons/Notification.png')}
                                style={{ height: moderateScaleVertical(35), width: moderateScale(35), resizeMode: 'contain', }}
                            />
                        </View>
                        <View style={{ backgroundColor: '#ee5657', width: moderateScale(75), height: moderateScaleVertical(35), borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignContent: 'center',gap:8 }}>
                            <Image
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2211/2211093.png" }}
                                style={{ height: moderateScaleVertical(25), width: moderateScale(25), resizeMode: 'contain', tintColor: 'white' }}
                            />

                            <Text style={{ color: '#fff', fontWeight: '500' }}>$240</Text>

                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header