import { View, Text, SafeAreaView, TextInput, Image, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'
import Bar from '../../components/Search/Bar'
import Category from '../../components/Category/Category'
import Topselling from '../../components/Topselling/Topselling'

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flexGrow: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      >
      <View style={{ flex: 1, backgroundColor: '#fff', height: '100%', width: '100%' }}>
        <View style={{ marginLeft: moderateScale(20), marginRight: moderateScale(20) }}>

          <View style={{ width: '100%',marginTop:moderateScaleVertical(5) }}>
            <Bar />
          </View>
          {/* Recent Searches */}
          <View style={{ marginTop: moderateScaleVertical(40) }}>
            <View>
              <Text style={{ fontSize: 21, color: '#000000', fontWeight: '500' }}>Recent Searches</Text>
            </View>
            <View style={{ marginTop: moderateScaleVertical(38) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 17, color: '#000000', fontWeight: '400' }}>Heathy Snacks</Text>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/14440/14440636.png" }}
                  style={{ height: moderateScaleVertical(12), width: moderateScale(12) }}
                />
              </View>
              <View style={{ borderWidth: 1, marginTop: moderateScaleVertical(23), borderColor: '#edf1f7' }}></View>
            </View>

            <View style={{ marginTop: moderateScaleVertical(25) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 17, color: '#000000', fontWeight: '400' }}>Cake & Pastries</Text>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/14440/14440636.png" }}
                  style={{ height: moderateScaleVertical(12), width: moderateScale(12) }}
                />
              </View>
              <View style={{ borderWidth: 1, marginTop: moderateScaleVertical(23), borderColor: '#edf1f7' }}></View>
            </View>

            <View style={{ marginTop: moderateScaleVertical(25) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 17, color: '#000000', fontWeight: '400' }}>Kitchen Essentials</Text>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/14440/14440636.png" }}
                  style={{ height: moderateScaleVertical(12), width: moderateScale(12) }}
                />
              </View>
              <View style={{ borderWidth: 1, marginTop: moderateScaleVertical(23), borderColor: '#edf1f7' }}></View>
            </View>

            <View style={{ marginTop: moderateScaleVertical(25) }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 17, color: '#000000', fontWeight: '400' }}>Fresh Meats</Text>
                <Image
                  source={{ uri: "https://cdn-icons-png.flaticon.com/512/14440/14440636.png" }}
                  style={{ height: moderateScaleVertical(12), width: moderateScale(12) }}
                />
              </View>
              <View style={{ borderWidth: 1, marginTop: moderateScaleVertical(23), borderColor: '#edf1f7' }}></View>
            </View>
          </View>
          <View style={{ justifyContent:'center',alignItems:'center', marginTop:moderateScaleVertical(35)}}>
            <Text style={{fontSize:16,color:'#ef5353',fontWeight:'500'}}>Load More</Text>
          </View>
          {/* All Categories */}
          <View style={{ marginTop: moderateScaleVertical(15), marginBottom: moderateScaleVertical(20) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 20, fontWeight: '600' }}>All Categories</Text>
              <Text style={{ color: '#ee5958', fontSize: 16, fontWeight: '400' }}>Explore all</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginTop: moderateScaleVertical(10) }}
            >
              <Category />
            </ScrollView>
          </View>
          {/* Top selling */}
          <View style={{ marginBottom: moderateScaleVertical(1) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ color: '#000000', fontSize: 20, fontWeight: '600' }}>In Spotlight</Text>
              <Text style={{ color: '#ee5958', fontSize: 16, fontWeight: '400' }}>Explore all</Text>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={{ marginTop: moderateScaleVertical(10) }}
            >
              <Topselling />
            </ScrollView>
          </View>

        </View>
        <View style={{ marginBottom: moderateScaleVertical(100) }}></View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search