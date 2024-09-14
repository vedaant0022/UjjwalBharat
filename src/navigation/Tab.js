import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/TabNavigator/Home';
import Search from '../screens/TabNavigator/Search';
import Cart from '../screens/TabNavigator/Cart';
import Coupons from '../screens/TabNavigator/Coupons';
import Profile from '../screens/TabNavigator/Profile';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import LinearGradient from 'react-native-linear-gradient';

const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor:'grey',tabBarShowLabel:false,
            tabBarLabelPosition:'below-icon',
            tabBarHideOnKeyboard:false,
            tabBarStyle:{position:'absolute',
                    bottom:0.1,
                    borderRadius:4,
                    elevation:10,
                    height:'8%',
                    left:3,
                    right:3,
                    borderColor:'#ff'
                  }
                  }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center', }}>
              <Image
              source={{uri: "https://cdn-icons-png.flaticon.com/512/2932/2932143.png"}}
              style={{height:22,width:22,tintColor: focused ? 'black':'grey'}}
              />
              <View style={{borderRadius:1,borderColor:'red',marginTop:moderateScaleVertical(8)}}>
                <View style={{height:5,width:30,backgroundColor:focused ? 'red':'white', borderTopLeftRadius:30,borderTopRightRadius:30}}></View>
              </View>
            </View>
          )
        }} />
        <Tab.Screen name="Search" component={Search}  options={{
          tabBarIcon: ({focused})=> (
            <View style={{alignItems:'center'}}>
              <Image
            source={{uri: "https://cdn-icons-png.flaticon.com/512/149/149852.png"}}
              style={{height:22,width:22,tintColor: focused ? 'black':'grey'}}
              />
               <View style={{borderRadius:1,borderColor:'red',marginTop:moderateScaleVertical(8)}}>
                <View style={{height:5,width:30,backgroundColor:focused ? 'red':'white', borderTopLeftRadius:30,borderTopRightRadius:30}}></View>
              </View>
            </View>
            
          ) 
        }}/> 
        <Tab.Screen name="Cart" component={Cart} options={{
          tabBarIcon: ({focused})=> (
            <View  style={{alignItems:'center',top:-30, borderColor:'#fce9e2',borderWidth:6,borderRadius:50}}>
              <LinearGradient
              colors={['#fbc97f', '#f87c29']}
              start={{ x: 0, y: 1 }} 
              end={{ x: 0.5, y: 1 }}
              style={{height:moderateScaleVertical(60),width:moderateScale(60),borderRadius:50,alignItems:'center',justifyContent:'center'}}
              >
              <Image
            source={{uri:"https://cdn-icons-png.flaticon.com/512/2430/2430422.png"}}
              style={{height:30,width:30,tintColor: 'white'}}
              />
              </LinearGradient>
            </View>
          ) 
        }} />
        <Tab.Screen name="Coupons" component={Coupons} options={{
          tabBarIcon: ({focused})=> (
            <View  style={{alignItems:'center'}}>
              <Image
            source={{uri:"https://cdn-icons-png.flaticon.com/512/3263/3263394.png"}}
              style={{height:22,width:22,tintColor: focused ? 'black':'grey'}}
              />
               <View style={{borderRadius:1,borderColor:'red',marginTop:moderateScaleVertical(8)}}>
                <View style={{height:5,width:30,backgroundColor:focused ? 'red':'white', borderTopLeftRadius:30,borderTopRightRadius:30}}></View>
              </View>
            </View>
          ) 
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({focused})=> (
            <View  style={{alignItems:'center'}}>
              <Image
              source={{uri:"https://cdn-icons-png.flaticon.com/512/1077/1077063.png"}}
              style={{height:22,width:22,tintColor: focused ? 'black':'grey'}}
              />
              <View style={{borderRadius:1,borderColor:'red',marginTop:moderateScaleVertical(8)}}>
                <View style={{height:5,width:30,backgroundColor:focused ? 'red':'white', borderTopLeftRadius:30,borderTopRightRadius:30}}></View>
              </View>         
            </View>
          ) 
        }} />
      </Tab.Navigator>
  )
}

export default Tab