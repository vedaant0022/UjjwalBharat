import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import CategoryCard from '../../components/Cards/CategoryCard';
import { useNavigation } from '@react-navigation/native';

const AllCategories = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ marginLeft: moderateScale(20), marginRight: moderateScale(20) }}>

            {/* Header */}
            <View style={{ marginTop: moderateScaleVertical(30) }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity 
                onPress={()=>{navigation.goBack()}}
                >
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' }}
                  style={{ width: moderateScale(22), height: moderateScaleVertical(22), resizeMode: 'contain', alignSelf: 'baseline' }}
                />
                </TouchableOpacity>
                <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500' }}>All Categories</Text>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7693/7693332.png' }}
                  style={{ width: moderateScale(22), height: moderateScaleVertical(22), resizeMode: 'contain', alignSelf: 'baseline' }}
                />
              </View>
            </View>

            
            <View style={{ marginTop: moderateScaleVertical(50), flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',gap:18 }}>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>

              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>

              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
              <View style={{ width: '30%', marginBottom: moderateScaleVertical(20) }}>
                <CategoryCard />
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllCategories;
