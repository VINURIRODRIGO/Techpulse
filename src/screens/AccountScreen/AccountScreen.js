import * as React from 'react';
import {
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  Image, 
  Button, 
  Alert, 
  ImageBackground,
  Pressable
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import COLORS from '../../consts/colors';

const colors = {primary: '#1f145c', white: '#fff'}; 
    
const AccountScreen = () => {

  const navigation = useNavigation();

  //LOGOUT
  const showAlert = () => {
  Alert.alert(
    "Logout",
    "Do you wan to logout?",
    [
      {
        text: "Yes",
        onPress: () => navigation.navigate('SignIn')
      },
    {text: "NO", style: 'cancel'}]);
  }


      return(
         <SafeAreaView style={style.container}> 
      <View style={style.header}>
      </View>
      <Image
        source={require('../../assets/person.jpg')}
        style={style.image}
      />
      <View style={{paddingHorizontal: 50, paddingTop: 20}}>        
          <Text style={style.title}>Jane</Text>
        </View>
      <View
        style={{
          flex: 0.75,
          justifyContent: 'flex-end',
          paddingBottom: 0,
          alignItems: 'center'
        }}>
           <TouchableOpacity onPress={() =>navigation.navigate('Favourite', { name: 'Jane' })}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'Favourite'}</Text>
              </View>
            </TouchableOpacity> 
        </View>

       <View
        style={{
          flex: 0.4,
          justifyContent: 'flex-end',
          paddingBottom: 0,
          alignItems: 'center'
        }}>
           <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} >               

              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'ABOUT US'}</Text>

              </View>
            </TouchableOpacity> 
      </View>

      <View
        style={{
          flex: 0.4,
          justifyContent: 'flex-end',
          paddingBottom: 150,
          alignItems: 'center'
        }}>

      <TouchableOpacity onPress={showAlert} >               

      <View style={style.btnContainer}>
        <Text style={style.btnText}>{'Logout'}</Text>

      </View>
      </TouchableOpacity> 
        
       </View>

      </SafeAreaView>
     
      );
  };

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    height: 500,
    width: '100%',
    top: 10,
    borderBottomLeftRadius: 100,
  },

  title: {
    fontSize: 35, 
    fontWeight: 'bold',
    top: 20
  },

  btnContainer: {
    elevation: 8,
    height: 50,
    width: 300,
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
  
  text: {
    fontFamily: 'Engravers MT',
    fontSize: 25,
    color: 'black',
    alignContent: 'center',
    marginLeft: 85,
    marginTop: 75,
    padding: 20,
  },
  header:{
    padding:20,
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: colors.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  }
});

export default AccountScreen;