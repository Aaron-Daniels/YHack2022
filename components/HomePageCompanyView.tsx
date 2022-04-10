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
const HomeItemView = () => {
  //You have to use the 'useNavigation' hook in order to have components inherit navigation.
  //Only screens inherit this behavior by default
  const navigation = useNavigation();
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
        <View
          style = {styles.backgroundView}
        >
          <Image
            style = {styles.backgroundImage}
            source = {require('../assets/images/defaultCompanyBackground.jpeg')}
          />
        </View>
        <Image
          style = {styles.companyLogo}
          source = {require('../assets/images/snackpassLogo.png')}
        />
        <View
          style = {styles.titleView}
        >
          <Text style={styles.titleText}>Snackpass</Text>
          <Text>Cut the line and get rewards!</Text>
        </View>
        <View
          style={styles.companyDescriptionView}
        >
          <Text style={styles.fundingText}>Monthly Funding: $380/$1,500</Text>
          <Text style={styles.detailsText}>Max Return: 10x * Royalty: 3% * Employees: 2  </Text>

        </View>



    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  windowStyle: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(250),
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#EEEEEE'

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
  backgroundImage: {
    resizeMode: 'cover',
    width: LAYOUTS.getWidth(349),
    height: LAYOUTS.getHeight(155),
    borderRadius: 15
  },
  companyLogo: {
    left: LAYOUTS.getWidth(20),
    top: LAYOUTS.getWidth(130),
    position: 'absolute',
    width: LAYOUTS.getWidth(100),
    height: LAYOUTS.getHeight(100)
  },
  titleView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(50),
    paddingLeft: LAYOUTS.getWidth(130)
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
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
  }
});

export default HomeItemView;
