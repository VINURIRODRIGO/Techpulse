import React, {useEffect} from 'react';
import axios from "axios";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get('screen');
import houses from '../../consts/houses';
const HomeScreen = ({navigation}) => {

  const [parkingList, setParkingList] = React.useState(undefined);
  const fetchParkingList = async () => {
    try {
      const res = await axios
        .get("http://192.168.205.10:3001/api/parkings")
        .then((respo) => {
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

  useEffect(() => {
    console.log('====================================================');
    fetchParkingList();
  }, []);

  const categoryList = ['Popular', ''];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}>
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  const ListOptions = () => {

    if (parkingList === undefined) {
      return (
        <View><Text>Loading...</Text></View>
      );
    }
    return (
      <View style={style.optionListsContainer}>
        {parkingList.map((option, index) => (
          <View style={style.optionsCard} key={index}>
            {/* House image */}
            <Image source={houses[option.name].image} style={style.optionsCardImage} />

            {/* Option title */}
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
              {option.title}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const Card = ({item}) => {
    console.log(item);
    const house = houses[item.name];
    const arr = {...house, ...item}
    return (
      <Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', arr)}>
        <View style={style.card}>
          {/* House image */}
          <Image source={house.image} style={style.cardImage} />
          <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {house.title}
              </Text>
            
            </View>

            {/* Location text */}

            <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
              {house.location}
            </Text>

            {/* Facilities container */}
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={style.facility}>
              
              </View>
              <View style={style.facility}>
                
              </View>
              <View style={style.facility}>
              
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>
        <View>
          <Text style={{color: COLORS.grey}}>Location</Text>
          <Text style={{color: COLORS.dark, fontSize: 20, fontWeight: 'bold'}}>
            Colombo
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate('AccountScreen')}>
            <Image
          style={style.profileImage}
          source={require('../../assets/person.jpg')}
        />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <View style={style.headerBtn}>              
              <TouchableOpacity>
                  <Image
                        source={require('../../assets/search.png')}
                        style={style.search}
                      />
              </TouchableOpacity>
              </View>
            <TextInput style={{paddingLeft: 20 }} placeholder="Search address, city, location" />
          </View>
        </View>

        {/* Render list options */}
        <ListOptions />

        {/* Render categories */}
        <ListCategories />

        {/* Render Card */}
        {parkingList !== undefined &&
        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={parkingList}
          renderItem={({item}) => <Card item={item} />}
        />
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 60,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  search: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    left: 0,
    bottom: 1
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 25,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 230,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});
export default HomeScreen;
