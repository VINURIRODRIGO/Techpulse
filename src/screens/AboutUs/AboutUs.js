import React from 'react';
import{
    View,
    StyleSheet,
    Text,
    Image,
    Pressable
}from 'react-native';
import CustomButton from '../../components/CustomButton';
import COLORS from '../../consts/colors';
import Logo from '../../../assets/images/Parkit_Logo.png';
import { Linking } from '@aws-amplify/core';

/*export default function Map(){*/

const AboutUs = () => {


    return(
        <View style={styles.body}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text1}> 
           ABOUT US
         </Text>
         <Text style={styles.text2}> 
           Parking occupancy detection systems are important for the effective management of parking lots and time. checking the availability of the free parking spaces and communicating to the users in real-time is crucial. PARKIT will provide a remote facility for the users to find a parking space for a vehicle.         
         </Text>
         <Text style={{fontSize: 18, marginRight: 50, padding: 15,color: COLORS.darkblue, fontWeight: "bold"}}> 
           FRONT-END DEVELOPER DETAILS
         </Text>
         <Text style={styles.text3}>
           Email: 

         <Pressable
      onPress={() => Linking.openURL('mailto:aasif.2019089@iit.ac.lk')}
      style={[
        styles.container,
      ]}>
      <Text
        style={[
          styles.text,
        ]}>
        {" aasif.2019089@iit.ac.lk"}
      </Text>
        </Pressable>

        <Pressable
      onPress={() => Linking.openURL('mailto:kaushika.20200657@iit.ac.lk')}
      style={[
        styles.container,
      ]}>
      <Text
        style={[
          styles.text,
        ]}>
        {"            kaushika.20200657@iit.ac.lk"}
      </Text>
        </Pressable>
      </Text>



         <Text style={{fontSize: 18, marginRight: 50, padding: 15,color: COLORS.darkblue, fontWeight: "bold"}}> 
           BACK-END DEVELOPER DETAILS 
         </Text>
         <Text style={styles.text3}>
           Email: 
           
           <Pressable
      onPress={() => Linking.openURL('mailto:vinuri.2019753@iit.ac.lk')}
      style={[
        styles.container,
      ]}>
      <Text
        style={[
          styles.text,
        ]}>
        {" vinuri.2019753@iit.ac.lk"}
      </Text>
        </Pressable>

        <Pressable
      onPress={() => Linking.openURL('mailto:fathima.20200253@iit.ac.lk')}
      style={[
        styles.container,
      ]}>
      <Text
        style={[
          styles.text,
        ]}>
        {"            fathima.20200253@iit.ac.lk"}
      </Text>
        </Pressable>

        <Pressable
      onPress={() => Linking.openURL('mailto:tanuk.20200815@iit.ac.lk')}
      style={[
        styles.container,
      ]}>
      <Text
        style={[
          styles.text,
        ]}>
        {"            tanuk.20200815@iit.ac.lk"}
      </Text>
        </Pressable>

         </Text>

         

        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 180,
      },
      container: {
        width: '100%',
    
        padding: 1,
        marginVertical: 5,
    
        alignItems: 'center',
        borderRadius: 5,
      },
        
      text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 17 
      },

    text1: {
        fontSize: 40,
        marginTop: 20,
        color: COLORS.blue,
        fontWeight: "bold"
    },
    text2: {
        fontSize: 20,
        marginTop: 20,
        marginHorizontal: 43
    },
    text3: {
        fontSize: 18,
        marginRight: 50,    
    },
});

export default AboutUs;
