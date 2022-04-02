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
  ImageBackground
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import COLORS from '../../consts/colors';


const colors = {primary: '#1f145c', white: '#fff'};
    
const AccountScreen = () => {

  const navigation = useNavigation();

  {/*const onYesPress = () => {
    navigation.navigate('SignIn');
  };*/}

      return(
         <SafeAreaView style={style.container}> 
      <View style={style.header}>
      </View>
      <Image
        source={require('../../assets/person.jpg')}
        style={style.image}
      />
      <View style={{paddingHorizontal: 50, paddingTop: 20}}>        
          <Text style={style.title}>NAME</Text>
        </View>
      <View
        style={{
          flex: 0.75,
          justifyContent: 'flex-end',
          paddingBottom: 0,
          alignItems: 'center'
        }}>
           <TouchableOpacity >
           {/*onPress={() =>navigation.navigate('Favourite', { name: 'Jane' })*/}
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
           <TouchableOpacity >
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'Help'}</Text>
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
       <View style={style.btnContainer}>
      <Button style={style.btnText}
      color= '#47597E'
      title= 'Logout'  onPress={() => Alert.alert("Logout", "Do you wan to logout?",[{
        text: "YES", onPress: () => navigation.navigate('SignIn')},
        {text: "NO", style: 'cancel'}])}/>
       </View>
       </View>

       {/*<View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
          paddingBottom: 200,
          alignItems: 'center'
        }}>
           <TouchableOpacity >
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'Logout'}</Text>
              </View>
            </TouchableOpacity> 
      </View>
*/}
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
    borderBottomLeftRadius: 100,
  },

  title: {fontSize: 25, fontWeight: 'bold'},

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