import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import Header from '../../components/Homeheader/Header';
import Category from '../../components/Category/Category';
import Topselling from '../../components/Topselling/Topselling';
import Slider from '../../components/HomeSwiper/Slider';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
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
          <View style={{ marginTop: moderateScaleVertical(15), marginBottom: moderateScaleVertical(15) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 20, fontWeight: '600' }}>All Categories</Text>
              <TouchableOpacity
              onPress={()=>{navigation.navigate('AllCategories')}}
              >
              <Text style={{ color: '#ee5958', fontSize: 16, fontWeight: '400' }}>Explore all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginTop: moderateScaleVertical(10) }}
            >
              <Category />
            </ScrollView>
          </View>
          <View style={{ marginBottom: moderateScaleVertical(1),marginTop:moderateScaleVertical(10) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 20, fontWeight: '600' }}>In Spotlight</Text>
              <TouchableOpacity
              onPress={()=>{navigation.navigate('AllCategories')}}
              >
              <Text style={{ color: '#ee5958', fontSize: 16, fontWeight: '400' }}>Explore all</Text>
              </TouchableOpacity>
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
              <Text style={{ color: '#000000', fontSize: 20, fontWeight: '600' }}>Top Selling</Text>
              <TouchableOpacity
              onPress={()=>{navigation.navigate('AllCategories')}}
              >
              <Text style={{ color: '#ee5958', fontSize: 16, fontWeight: '400', }}>Explore all</Text>
              </TouchableOpacity>
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
