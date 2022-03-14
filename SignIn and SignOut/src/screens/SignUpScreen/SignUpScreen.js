import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView, 
  Alert
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = async data => {
    const {username, password, email, name} = data;
    try{
      const response = await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
        });
        navigation.navigate('ConfirmEmail', {username});
    }catch(e){
      Alert.alert('Oops', e.message);
    }
    //navigation.navigate('ConfirmEmail');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        {/*style={styles.btn}
        <CustomButton
          
          height= '70'
          marginHorizontal= '25'
          backgroundColor= 'darkblue'
          borderRadius= '15'
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />
        */}

        <View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
            paddingTop: 15,
          }}>
         
            <TouchableOpacity onPress={handleSubmit(onRegisterPressed)}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{'Register'}</Text>
              </View>
            </TouchableOpacity> 

        </View>

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <Text style={{paddingTop:30}}>Have an account?</Text>
        <CustomButton
          text="Sign in"
          onPress={onSignInPress}   
          fgColor={'#5f82e6'}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 70,
    marginHorizontal: 25,
    backgroundColor: 'darkblue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },

  btnContainer: {
    elevation: 8,
    height: 60,
    width: 250,
    marginHorizontal: 15,
    backgroundColor: '#D82148',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
});

export default SignUpScreen;
