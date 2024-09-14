
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
import { useNavigation } from '@react-navigation/native'
import { errorMessage } from '../../utils'



const OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const otpRefs = useRef([]);
    const [loading, setloading] = useState(false);

    const navigation = useNavigation();

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move to next input or previous input
        if (text && index < otpRefs.current.length - 1) {
            otpRefs.current[index + 1].focus();
        } else if (!text && index > 0) {
            otpRefs.current[index - 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
            otpRefs.current[index - 1].focus();
        }
    };


    return (
        <SafeAreaView>
            
            <View style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
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
                            <Text style={{ color: '#000000', fontSize: 18, textAlign: 'center', width: moderateScale(295), lineHeight: 30 }}>4 digit otp is sent to your mobile Please enter the OTP to verify number </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: moderateScaleVertical(50)
                        }}>
                            {otp.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    ref={(el) => (otpRefs.current[index] = el)}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: '#cad4dc',
                                        textAlign: 'center',
                                        fontSize: 24,
                                        marginRight: moderateScale(15),
                                        borderRadius: 9,
                                        backgroundColor: '#edf2f6'
                                    }}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChangeText={(text) => handleOtpChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                />
                            ))}
                        </View>

                        <TouchableOpacity 
                        onPress={()=>{navigation.navigate('Createacc')}}
                        style={{ width: '95%', padding: 15, alignItems: 'center' }}>
                            <LinearGradient colors={['#fbc97f', '#f87c29']} start={{ x: 0, y: 1 }} end={{ x: 0.4, y: 0 }} style={{ width: '90%', padding: 15, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 9, marginTop: moderateScaleVertical(40), height: moderateScaleVertical(50), }}>
                                <Text style={{ fontSize: 18, color: '#fff',fontWeight:'500' }}>Continue</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={{marginTop:moderateScaleVertical(10)}}>
                            <Text style={{fontSize:16,fontWeight:'500'}}>Didn't receive the otp?</Text>

                        </View>
                        <TouchableOpacity>
                            <Text style={{fontSize:16,fontWeight:'500',paddingTop:8,color:'#e6621a'}}>Resend OTP</Text>
                        </TouchableOpacity>


                    </View>

                </LinearGradient>



            </View>
           
        </SafeAreaView>
    )
}



export default OTP