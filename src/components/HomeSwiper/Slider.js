import { View, Image } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const Slider = () => {
  return (
    <View style={{ height: moderateScaleVertical(200), alignItems: 'center' }}>
      <Swiper
        loop={true}
        showsButtons={false}
        paginationStyle={{
          bottom: moderateScaleVertical(10), 
          justifyContent: 'center',
        }}
        dot={
          <View
            style={{
              backgroundColor: '#e6ebef',
              width: 12,
              height: 12,
              borderRadius: 6,
              margin: 5,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#ee5657',
              width: 12,
              height: 12,
              borderRadius: 6,
              margin: 5,
            }}
          />
        }
      >
        {/* Slide 1 */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/Swiper/Banner1.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>

        {/* Slide 2 */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/Swiper/Banner1.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>

        {/* Slide 3 */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/Swiper/Banner1.png')}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;
