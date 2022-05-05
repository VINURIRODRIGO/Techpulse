import React, {useEffect, useState } from "react";
import axios from "axios";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  Switch,
  Pressable
} from "react-native";
import COLORS from "../../consts/colors";

import houses from '../../consts/dataBase';

const { width } = Dimensions.get("screen");
const DetailsScreen = ({ navigation, route }) => {
  const house = route.params;
  const [parkingList, setParkingList] = React.useState({});
  console.log(route.params);
  const fetchParkingList = async () => {
    try {
      const res = await axios
        .get(`http://192.168.205.10:3001/api/parking/${house._id}`)
        .then((respo) => {
          console.log(respo)
          return respo;
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error.request);
          console.log(error);
        });

      if (res !== undefined && res.data) {
        setParkingList(res.data);
      }
    } catch (err) {
      console.log('try catch error', err);
    }
  };

  const timerup = () => {
    setTimeout(fetchParkingList, 1000);
  };
  
  useEffect(() => {
    console.log('====================================================');
    fetchParkingList();
  }, []);

  const InteriorCard = ({ interior }) => {
    return <Image source={interior} style={style.interiorImage} />;
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    
  setIsEnabled(previousState => !previousState);
  }
  
  const favorites = () => {
    
    if (isEnabled == false) {
      navigation.navigate('Favourite');
      
  } else {

  }
  };  

  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating]= useState([1,2,3,4,5])
  const ClickHandler = () => {
    alert('Watching : 1')
  }
  
  const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
  //const starImgFilled = './srs/assets/star_filled.png'
  const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* House image */}

        <View style={style.backgroundImageContainer}>
          <ImageBackground style={style.backgroundImage} source={house.image}>
            <View style={style.header}>
              
              <View style={style.headerBtn}>              
              <TouchableOpacity onPress={navigation.goBack}>
                        <Image
                             source={require('../../assets/arrow.png')}
                             style={style.arrow}
                           />
              </TouchableOpacity>
              </View>

              <View><Text>Add to favorites</Text>

              <Switch
                  trackColor={{ false: "#767577", true: "red" }}
                  thumbColor={isEnabled ? "red" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  data={houses}
              />

              </View>
            </View>
          </ImageBackground>

        </View>



        <View style={style.detailsContainer}>
          {/* Name and rating view container */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {house.title}
            </Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 13, marginRight: 15 }}>155 ratings</Text>
            </View>
          </View>

          {/* Location text */}
          <Text style={{ fontSize: 16, color: COLORS.grey }}>
            {house.location}
          </Text>

          <View style={style.watchlist}>
        <TouchableOpacity onPress={ClickHandler}>
          <Image 
             style={style.floatingButton}
             source={{uri:'https://www.4me.com/wp-content/uploads/2018/01/4me-icon-watchlist.png'}}
          />
        </TouchableOpacity>
      </View>
      
      <View style={style.CustomRatingBarStyle}>

     <Text style={style.titleStyle}>
       {defaultRating + ' / ' + maxRating.length}
       
     </Text>

       {
         maxRating.map((item, key) =>{

          return( 
            <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={()=> setdefaultRating(item)}
          >
            <Image
              style={style.starImgStyle}
              source={
                item <= defaultRating
                ?{uri: starImgFilled}
                :{uri: starImgCorner}
              }
             />
            </TouchableOpacity>
          )
         }) 
       }

     </View>

          {/* Facilities container */}
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={style.facility}>
              <Text style={style.facilityText}>75m area</Text>
            </View>
            
        <View style={style.mapBtn}>
        <Pressable onPress={() => navigation.navigate('Map')}>
           <Text style={style.mapBtnText}> Map</Text>
        </Pressable>
        </View>
          </View>
          
          <Text style={{ marginTop: 20, color: COLORS.darkGray }}>
            {house.details}
          </Text>

          {/* Interior list */}
          <FlatList
            contentContainerStyle={{ marginTop: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, key) => key.toString()}
            data={house.interiors}
            renderItem={({ item }) => <InteriorCard interior={item} />}
          />

          {/* footer container*/}
                    <View style={style.footer}>
                    <Text>Available Spaces:</Text>
            <Text style={{fontSize: 20}}>   
              {parkingList !== undefined
                ? parkingList?.availableSlot
                : "-"}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              paddingBottom: 0,
              bottom: 30,
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() =>navigation.navigate('HMap')}>
              <View style={style.btnContainer}>
                <Text style={style.btnText}>{'Parking Spaces'}</Text>
              </View>
            </TouchableOpacity> 
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
    alignItems: "center",
    height: 320,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  virtualTag: {
    top: -20,
    width: 120,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.dark,
    justifyContent: "center",
    alignItems: "center",
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    paddingHorizontal: 150,
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.darkGray },


  facil: {flexDirection: 'row', marginRight: 25},

  arrow: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    left: 0,
    bottom: 1
  },

  mapBtn: {
      height: 35,
      width: 65,
      backgroundColor: 'steelblue',
      borderRadius: 8,
      justifyContent: 'center',
      left: 220,
      bottom: 20
  },
  mapBtnText: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    
  },

  btnContainer: {
    elevation: 8,
    height: 50,
    width: 340,
    marginHorizontal: 15,
    marginVertical: 50,
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: "#DBE6FD",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    margin: 100,
    justifyContent:'center',
  },
  textStyle: {
    textAlign: 'left',
    fontSize: 23,
    marginTop: 0,
  },
  CustomRatingBarStyle:{
    justifyContent:'center',
    flexDirection: 'row',
    marginLeft: 230,
    bottom: 30
  },
  starImgStyle:{
    width:25,
    height: 25,
    top: 0,
    resizeMode: 'cover',
  },
  titleStyle: {
    fontSize: 15, 
    fontWeight:'bold',
    textAlign:'left',
    padding:2,
    top: 0,
    marginRight: 10
  }, 
  touchableOpacity: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left:0,
    
  },
  watchlist: {
    height: 35,
      width: 65,
  },
  floatingButton: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    left: 0,
    bottom: 1
  },
});

export default DetailsScreen;
