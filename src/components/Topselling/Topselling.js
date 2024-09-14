// import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
// import React from 'react'
// import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'

// const Topselling = () => {
//     return (
//         <SafeAreaView>

//             <View style={{ marginTop: moderateScaleVertical(12), flexDirection: 'row', justifyContent: 'space-evenly', gap: 20,}}>
//                 <View style={{ backgroundColor: '#ffc3c7', width: moderateScale(140), height: moderateScaleVertical(180), borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
//                     <View style={{ marginLeft: moderateScale(15), marginRight: moderateScale(15) }}>
//                         <View>
//                             <Text style={{ fontWeight: '500', color: '#39323c', fontSize: 17, marginTop: moderateScaleVertical(12) }}>Bakery</Text>
//                             <Text style={{ fontWeight: '500', color: '#9e7a83', fontSize: 14, marginTop: moderateScaleVertical(10) }}>Multiple Products</Text>
//                             <Text style={{ marginTop: moderateScaleVertical(8) }}>
//                                 <Text style={{ fontSize: 16, color: '#333' }}>$</Text>
//                                 <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>7.59</Text>
//                                 <Text style={{ fontSize: 16, color: '#888' }}> / Packet</Text>
//                             </Text>
//                         </View>
//                         <View style={{alignItems:'center',top:10,}}>
//                             <Image
//                                 source={require('../../assets/Category/Icecream.png')}
//                                 style={{ width: moderateScale(90), height: moderateScaleVertical(90) }}
//                             />
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{ backgroundColor: '#c0f5fe', width: moderateScale(140), height: moderateScaleVertical(180), borderBottomLeftRadius: 70, borderBottomRightRadius: 70 }}>

//                 </View>
//                 <View style={{ backgroundColor: '#fff1c0', width: moderateScale(140), height: moderateScaleVertical(180), borderBottomLeftRadius: 70, borderBottomRightRadius: 70 }}>

//                 </View>

//             </View>

//         </SafeAreaView>
//     )
// }

// export default Topselling


import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const Topselling = () => {
    return (
        <SafeAreaView>
            <View style={{ marginTop: moderateScaleVertical(12), flexDirection: 'row', justifyContent: 'space-evenly', gap: 20 }}>

                <View style={{
                    backgroundColor: '#ffc3c7',
                    width: moderateScale(180),
                    height: moderateScaleVertical(220),
                    borderRadius: 20,
                    padding: moderateScale(10),
                    position: 'relative'
                }}>

                    <View style={{ position: 'absolute', top: 10, right: 10 }}>
                        <Text style={{ fontSize: 28, color: '#ff888b' }}>+</Text>
                    </View>


                    <View style={{ marginLeft: moderateScale(10), marginRight: moderateScale(10) }}>
                        <Text style={{ fontWeight: '600', color: '#39323c', fontSize: 17 }}>Bakery</Text>
                        <Text style={{ fontWeight: '500', color: '#9e7a83', fontSize: 14, marginTop: moderateScaleVertical(6) }}>Multiple products</Text>
                        <Text style={{ marginTop: moderateScaleVertical(6) }}>
                            <Text style={{ fontSize: 16, color: '#333' }}>$</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>7.59</Text>
                            <Text style={{ fontSize: 16, color: '#888' }}> / Packet</Text>
                        </Text>
                    </View>


                    <View style={{ alignItems: 'center', marginTop: moderateScaleVertical(20), bottom: 15 }}>
                        <Image
                            source={require('../../assets/Category/Icecream.png')}
                            style={{ width: moderateScale(140), height: moderateScaleVertical(140), borderRadius: 10 }}
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#c0f5fe',
                    width: moderateScale(180),
                    height: moderateScaleVertical(220),
                    borderRadius: 20,
                    padding: moderateScale(10),
                    position: 'relative'
                }}>

                    <View style={{ position: 'absolute', top: 10, right: 10 }}>
                        <Text style={{ fontSize: 28, color: '#76d6e8' }}>+</Text>
                    </View>
                    <View style={{ marginLeft: moderateScale(10), marginRight: moderateScale(10) }}>
                        <Text style={{ fontWeight: '600', color: '#39323c', fontSize: 17 }}>Milk, Cheese</Text>
                        <Text style={{ fontWeight: '500', color: '#9e7a83', fontSize: 14, marginTop: moderateScaleVertical(6) }}>Milk products</Text>
                        <Text style={{ marginTop: moderateScaleVertical(6) }}>
                            <Text style={{ fontSize: 16, color: '#333' }}>$</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>15.59</Text>
                            <Text style={{ fontSize: 16, color: '#888' }}> / Packet</Text>
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: moderateScaleVertical(20), bottom: 15 }}>
                        <Image
                            source={require('../../assets/Category/Icecream.png')}
                            style={{ width: moderateScale(140), height: moderateScaleVertical(140), borderRadius: 10 }}
                        />
                    </View>
                </View>


                <View style={{
                    backgroundColor: '#fff1c0',
                    width: moderateScale(180),
                    height: moderateScaleVertical(220),
                    borderRadius: 20,
                    padding: moderateScale(10),
                    position: 'relative'
                }}>

                    <View style={{ position: 'absolute', top: 10, right: 10 }}>
                        <Text style={{ fontSize: 28, color: '#f7b445' }}>+</Text>
                    </View>
                    <View style={{ marginLeft: moderateScale(10), marginRight: moderateScale(10) }}>
                        <Text style={{ fontWeight: '600', color: '#39323c', fontSize: 17 }}>Breads</Text>
                        <Text style={{ fontWeight: '500', color: '#9e7a83', fontSize: 14, marginTop: moderateScaleVertical(6) }}>Bloomer products</Text>
                        <Text style={{ marginTop: moderateScaleVertical(6) }}>
                            <Text style={{ fontSize: 16, color: '#333' }}>$</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>12.59</Text>
                            <Text style={{ fontSize: 16, color: '#888' }}> / Packet</Text>
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: moderateScaleVertical(20), bottom: 15 }}>
                        <Image
                            source={require('../../assets/Category/Icecream.png')}
                            style={{ width: moderateScale(140), height: moderateScaleVertical(140), borderRadius: 10 }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Topselling;

