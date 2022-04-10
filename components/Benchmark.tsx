import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Images from '../assets/images/index';
import {useNavigation} from '@react-navigation/native';
import { LAYOUTS } from '../constants/Layouts';
// import {getProductData} from '../constants/DataHelpers';
// import {getStorageURL} from '../API/firebaseMethods';
import { COLORS } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// import * as firebase from 'firebase';

//See Sillable ItemView for inspiration
const Benchmark = ({navigation, title, date}) => {
  //You have to use the 'useNavigation' hook in order to have components inherit navigation.
  //Only screens inherit this behavior by default
  //const navigation = useNavigation();
  //const data = getProductData(productid);

  const colorScheme = useColorScheme();

  //const item2Data = getProductData(props.item2id);
  return (
      <TouchableOpacity
        style={styles.windowStyle}
        //Navigate to the product screen, the props are passed in
        //as a js object
        //Note that we pass the data that we pulled
      >

        <Image
          style = {styles.companyLogo}
          source = {require('../assets/images/snackpassLogo.png')}
        />
        <View style={styles.informationContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.dateText}>{date}</Text>
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text>See More</Text>
        </TouchableOpacity>

        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  windowStyle: {
    width: LAYOUTS.getWidth(315),
    height: LAYOUTS.getHeight(100),
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: LAYOUTS.getWidth(10)

  },
  informationContainer: {
    flexDirection: 'column',
  },
  imageStyle: {
    aspectRatio: 1,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  backgroundView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(155),
  },
  seeMoreButton: {
    alignSelf: 'flex-end',
    marginTop: LAYOUTS.getHeight(20)
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: LAYOUTS.getWidth(349),
    height: LAYOUTS.getHeight(155),
    borderRadius: 15
  },
  companyLogo: {
    width: LAYOUTS.getWidth(80),
    height: LAYOUTS.getHeight(80),
    marginLeft: LAYOUTS.getWidth(5)

  },
  titleView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(50),
    paddingLeft: LAYOUTS.getWidth(130)
  },
  titleText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: LAYOUTS.getWidth(5)
  },
  dateText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: LAYOUTS.getWidth(5),
    color: "#2ABD22"
  },
  // companyDescriptionView: {
  //   paddingTop: LAYOUTS.getHeight(5),
  //   paddingLeft: LAYOUTS.getWidth(110)
  // },
  fundingText: {
    fontWeight: 'bold',
    marginTop: LAYOUTS.getHeight(5),
    marginLeft: LAYOUTS.getWidth(110)
  },
  detailsText: {
    fontWeight: 'bold',
    marginLeft: LAYOUTS.getWidth(20)
  },

});

export default Benchmark;
