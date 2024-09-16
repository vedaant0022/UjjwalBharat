import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { useNavigation } from '@react-navigation/native'
import { successMessage } from '../../utils'
import FlashMessage from 'react-native-flash-message'

const Createacc = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ height: '100%', width: '100%' }}>
                        <LinearGradient
                            colors={['#fbc97f', '#f87c29']}
                            start={{ x: 1, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <View>
                                <Image
                                    source={require('../../assets/Onboarding/Google.png')}
                                    style={{ width: moderateScale(380), height: moderateScaleVertical(380), resizeMode: 'contain', alignSelf: 'baseline' }}
                                />
                            </View>
                            <View style={{ backgroundColor: '#fff', height: '100%', width: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center' }}>
                                <View style={{ marginTop: moderateScaleVertical(45) }}>
                                    <Text style={{ color: '#000000', fontSize: 21, textAlign: 'center', width: moderateScale(315), lineHeight: 30, fontWeight: '500' }}>Create Account </Text>
                                </View>

                                <View style={{ borderRadius: 10, borderWidth: 0.5, marginTop: moderateScaleVertical(30), width: moderateScale(350), alignSelf: 'center', height: moderateScale(50), paddingLeft: moderateScale(5), fontSize: 18, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: moderateScale(10), backgroundColor: '#edf2f6', borderColor: '#edf2f6' }}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077063.png' }}
                                        style={{ width: moderateScale(25), height: moderateScaleVertical(25), resizeMode: 'contain' }}
                                    />
                                    <TextInput
                                        placeholder='Username'
                                        style={{ fontSize: 18, color: '#000000' }}
                                    />
                                </View>
                                <View style={{ borderRadius: 15, borderWidth: 0.5, marginTop: moderateScaleVertical(30), width: moderateScale(350), alignSelf: 'center', height: moderateScale(50), paddingLeft: moderateScale(5), fontSize: 18, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: moderateScale(10), backgroundColor: '#edf2f6', borderColor: '#edf2f6' }}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/542/542638.png' }}
                                        style={{ width: moderateScale(25), height: moderateScaleVertical(25), resizeMode: 'contain' }}
                                    />
                                    <TextInput
                                        placeholder='Email address'
                                        style={{ fontSize: 18, color: '#000000' }}
                                    />
                                </View>

                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Tab') }}
                                    style={{ width: '100%', padding: 15, alignItems: 'center' }}>
                                    <LinearGradient colors={['#fbc97f', '#f87c29']} start={{ x: 0, y: 1 }} end={{ x: 0.4, y: 0 }} style={{ width: '90%', padding: 15, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: moderateScaleVertical(20), height: moderateScaleVertical(50) }}>
                                        <Text style={{ fontSize: 18, color: '#fff', fontWeight: '600' }}>Confirm</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Createacc
