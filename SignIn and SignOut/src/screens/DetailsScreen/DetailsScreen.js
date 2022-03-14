import React, { useState } from 'react';
import axios from "axios";
import {
  ImageBackground,
  SafeAreaView,
  Switch,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  setForm,
  form,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

import houses from '../../consts/houses';


const {width} = Dimensions.get('screen');

const DetailsScreen = ({navigation, route})  => {
  const house = route.params;

  const [data, setdata] = React.useState("00")
  const getData = async () => {
    const res = await axios.get("http://192.168.8.101:8080/my-value");
    console.log(res.data);
    setdata(res.data.cat);
  };
  const timerup = () => {
    setInterval(getData,1000);
  }
  React.useEffect(() => {    
    timerup();
  }, []);

  const InteriorCard = ({interior}) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    
    setIsEnabled(previousState => !previousState);
  }
  
  const favorites = ({house}) => {
    
    if (isEnabled == false) {
      //house.isFavourite = true;
      navigation.navigate('Favourite');
      
  } else {

  }
  };  


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              <View style={style.headerBtn}>
                <Icon
                  name="arrowleft"
                  size={20}
                  onPress={navigation.goBack}
                />
              </View>

              <View><Text>Add to favorites</Text>

              <Switch
                  trackColor={{ false: "#767577", true: "red" }}
                  thumbColor={isEnabled ? "red" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  data={houses}
                  onChange={() => favorites(house)}
              />

              </View>

            </View>
          </ImageBackground>

          {/* Virtual Tag View */}
         
        </View>

        <View style={style.detailsContainer}>
          {/* Name and rating view container */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {house.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={style.ratingTag}>
                <Text style={{color: COLORS.white}}>4.8</Text>
              </View>
              <Text style={{fontSize: 13, marginLeft: 5}}>155 ratings</Text>
            </View>
          </View>
          
          

          {/* Location text */}
                    <Text style={{fontSize: 16, color: COLORS.grey}}>
                      {house.location}
                    </Text>
          

          {/* Facilities container */}
          <View style={{flexDirection: 'row', marginTop: 20}}>
            
            <View style={style.facility}>
              <Icon name="aspect-ratio" size={18} />
              <Text style={style.facilityText}>75m area</Text>
            </View>

            <View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingLeft : 235,
          }}>

        <Pressable onPress={() => navigation.navigate('Map')}>
        <View style={style.mapBtn}>
           <Text style={style.mapBtnText}> Map</Text>
           </View>
        </Pressable>
        
        </View>
          </View>
          <Text style={{marginTop: 20, color: COLORS.grey}}>
            {house.details}
          </Text>


          
          
          {/* Interior list */}
          <FlatList
            contentContainerStyle={{marginTop: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({item}) => <InteriorCard interior={item} />}
          />

        {/*<View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
            alignItems: 'center',
          }}>
         
            <TouchableOpacity onPress={navigation.navigate('Map')}>
              <View>
                <Text>{'Map'}</Text>
              </View>
            </TouchableOpacity> 
        </View>*/}

        
        { /*
        <FlatList
          data={house}
          renderItem={({item}) =>(
          
          <Card cities={item} />}
          <TouchableOpacity
          onPress={() => {
          navigation.navigate('Map')}}>
          </TouchableOpacity>
          )}/>
          */}


          {/* footer container*/} 
              <Text>Available Slots</Text>

          <View style={style.footer}>
              <Text style={{ }}>{data}</Text>
          </View>
          
          <View 
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 100,
            alignItems: 'center',
          }}>
         
         <TouchableOpacity onPress={() =>navigation.navigate('HMap')}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'Parking Spaces'}</Text>
              </View>
            </TouchableOpacity> 
        </View>





        <View style={style.facil}>
              <Icon name="aspect-ratio" size={21} />
              <Text style={style.facilityText}>00</Text>
            </View>

      

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 320,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interiorImage: {
    width: width / 5 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    paddingHorizontal: 150,
  
  },
  detailsContainer: {flex: 1, paddingHorizontal: 20, marginTop: 40},
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},

  facil: {flexDirection: 'row', marginRight: 25},

  mapBtn: {
      height: 35,
      width: 65,
      backgroundColor: 'steelblue',
      borderRadius: 8,
      justifyContent: 'center',
  },
  mapBtnText: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },

  btnContainer: {
    elevation: 8,
    height: 50,
    width: 340,
    marginHorizontal: 15,
    marginVertical: 50,
    backgroundColor: COLORS.dark,
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

export default DetailsScreen;
