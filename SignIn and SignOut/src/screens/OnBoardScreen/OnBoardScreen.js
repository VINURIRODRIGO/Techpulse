import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import COLORS from '../../consts/colors';

import {useNavigation1} from '@react-navigation/core';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';



const OnBoardScreen = () => {

  const navigation = useNavigation();

  const onBtnPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />

      {/* Onboarding Image */}
      <Image
        source={require('../../assets/onboardImage.jpg')}
        style={style.image}
      />

      {/* Indicator container */}
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActive]} />
      </View>

      {/* Title and text container */}
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        {/* Title container */}
        <View>
          <Text style={style.title}>Parkit</Text>
          
        </View>

        {/* Text container */}
        <View style={{marginTop: 10}}>
          <Text style={style.textStyle}>
            Availability in just a few clicks
          </Text>
          <Text style={style.textStyle}></Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 100,
        }}>
        {/* button
        <Pressable onPress={() => navigation.navigate('SingIn')}> */}


           <TouchableOpacity onPress={onBtnPress}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'Get Started'}</Text>
              </View>
            </TouchableOpacity> 

        {/*</Pressable>*/}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 500,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  
  btnContainer: {
    elevation: 8,
    height: 70,
    marginHorizontal: 25,
    backgroundColor: COLORS.darkblue,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },

  title: {fontSize: 40, fontWeight: 'bold'},
  textStyle: {fontSize: 18, color: COLORS.grey},
});
export default OnBoardScreen;
