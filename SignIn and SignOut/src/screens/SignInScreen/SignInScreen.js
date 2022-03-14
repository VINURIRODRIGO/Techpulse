import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  LinearGradient,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';

import COLORS from '../../consts/colors';


import Logo from '../../../assets/images/Parkit_Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {Auth} from 'aws-amplify';


const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.navigate('HomeScreen');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.root}>
        <Image
          source={Logo}
          style={[style.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
        />

        <View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 100,
          }}>
         
            <TouchableOpacity onPress={handleSubmit(onSignInPressed)}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{loading ? 'Loading...' : 'Sign In'}</Text>
              </View>
            </TouchableOpacity> 

        </View>

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          fgColor={'#D82148'}
        />

        <Text>
        <Text style={{fontSize: 20}}> Don't have an account?  </Text>
        {/*<CustomButton
          text="Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
        */}

            <TouchableOpacity onPress={onSignUpPress}>
              <View style={
                {type: "TERTIARY"}
              }>
                <Text style={{color: '#808080',fontSize: 15}}>{'Create one'}</Text>
              </View>
            </TouchableOpacity>

        </Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );

};

const style = StyleSheet.create({
 
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },

  btnContainer: {
    elevation: 8,
    height: 62,
    width: 240,
    marginHorizontal: 15,
    backgroundColor: '#11468f',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnText: {
    fontSize: 20,
    color: '#DBE6FD',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }

  
});

export default SignInScreen;
