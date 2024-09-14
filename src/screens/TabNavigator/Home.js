import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import Header from '../../components/Homeheader/Header';
import Category from '../../components/Category/Category';
import Topselling from '../../components/Topselling/Topselling';
import Slider from '../../components/HomeSwiper/Slider';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#fff' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: moderateScale(15) ,marginTop:moderateScaleVertical(25)}}>
          <Header />
          <View style={{ height: moderateScaleVertical(200), marginBottom: moderateScaleVertical(10) }}>
            <Slider />
          </View>

          {/* Categories Section */}
          <View style={{ marginTop: moderateScaleVertical(15), marginBottom: moderateScaleVertical(20) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 19, fontWeight: '600' }}>All Categories</Text>
              <Text style={{ color: '#ee5958', fontSize: 18, fontWeight: '400' }}>Explore all</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginTop: moderateScaleVertical(10) }}
            >
              <Category />
            </ScrollView>
          </View>
          <View style={{ marginBottom: moderateScaleVertical(1) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 19, fontWeight: '600' }}>In Spotlight</Text>
              <Text style={{ color: '#ee5958', fontSize: 18, fontWeight: '400' }}>Explore all</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginTop: moderateScaleVertical(10) }}
            >
              <Topselling />
            </ScrollView>
          </View>
           <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: moderateScaleVertical(40) }}>
              <Text style={{ color: '#000000', fontSize: 19, fontWeight: '600' }}>Top Selling</Text>
              <Text style={{ color: '#ee5958', fontSize: 18, fontWeight: '400', }}>Explore all</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              <Category />
            </ScrollView>
          </View> 
          <View style={{ marginBottom: moderateScaleVertical(100) }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
