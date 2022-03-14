import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Alert,
    Pressable,
    FlatList,
    Image,
} from 'react-native';
import COLORS from '../../consts/colors';
import houses from '../../consts/houses';
import {useNavigation} from '@react-navigation/native';

//const {width} = Dimensions.get('screen');


//export default function Map()


//export default class App extends Component<{}> {

  const Favourite = ({navigation}) => {


  SampleFunction=(item)=>{

    Alert.alert(item);

  }

 //render() {

  var fav = [""];

//  const navigation = useNavigation();

{/*
const Fav = (()=>{
  if(houses.isFavourite==true){
    return(
       fav.map((item, key)=>(
        <FlatList key={key}
          //snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      ))
    )
  }})
*/}

  const Card = ({house}) => {
    if(house.isFavourite == true){
    return (
<Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', house)}>
        <View style={style.card}>
          {/* House image */}
          <Image source={house.image} style={style.cardImage}/>
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
            </View>
          </View>
        </View>
      </Pressable>      
    );
   }if(house.isFavourite == false){
     return<View></View>
   }
   else{
     return<Text>NO FAVOURITE</Text>
   }

  }

   return (
    <View style={style.body}>
        <Text style={style.text}> 
             FAVOURITE
         </Text>
        {/*
         
         <Text key={key} style={styles.TextStyle} onPress={ this.SampleFunction.bind(this, item) }> { item } </Text>)

         */}

         



       { fav.map((item, key)=>(
        <FlatList key={key}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          horizontal
          data={houses}
          renderItem={({item}) => <Card house={item} />}
        />
      ))}

     </View>
   );
 }





const style = StyleSheet.create({
  
  MainContainer :{

    flex:1,
    justifyContent: 'center',
    margin: 15

  },
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    
 MainContainer: {
    flex: 1,
    margin: 10
    
  },
 
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  },

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
  optionsCard: {
    height: 210,
    width: 30,
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
    width: 150,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: 130,
    height: 120,
    borderRadius: 15,
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});

export default Favourite;