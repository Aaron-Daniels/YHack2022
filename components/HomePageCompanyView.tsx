import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Images from '../assets/images/index';
import {useNavigation} from '@react-navigation/native';
import { LAYOUTS } from '../constants/Layouts';
// import {getProductData} from '../constants/DataHelpers';
// import {getStorageURL} from '../API/firebaseMethods';
import { COLORS } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CompanyScreen from '../screens/CompanyScreen';
// import * as firebase from 'firebase';

//See Sillable ItemView for inspiration
const HomePageCompanyView = ({navigation}) => {
  //You have to use the 'useNavigation' hook in order to have components inherit navigation.
  //Only screens inherit this behavior by default
  //const navigation = useNavigation();
  //const data = getProductData(productid);

  const colorScheme = useColorScheme();

  //const item2Data = getProductData(props.item2id);
  return (
      <TouchableOpacity
        style={styles.windowStyle}
        onPress={() => navigation.navigate('CompanyScreen')}
        //Navigate to the product screen, the props are passed in
        //as a js object
        //Note that we pass the data that we pulled
      >
        <View
          style = {styles.backgroundView}
        >
          <Image
            style = {styles.backgroundImage}
            source = {require('../assets/images/snackbanner.jpeg')}
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
          <Text style={styles.taglineText}>Cut the line and get rewards!</Text>
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
    borderColor: '#EEEEEE',
    marginBottom: LAYOUTS.getWidth(10)

  },
  imageStyle: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  backgroundView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(155),
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(155),
    borderRadius: 15,

  },
  companyLogo: {
    left: LAYOUTS.getWidth(15),
    bottom: LAYOUTS.getWidth(35),
    position: 'absolute',
    width: LAYOUTS.getWidth(80),
    height: LAYOUTS.getHeight(80)
  },
  titleView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(50),
    paddingLeft: LAYOUTS.getWidth(102),
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  taglineText: {
    fontSize: 11,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  companyDescriptionView: {
    borderWidth: 0,
    alignItems: 'center',
    paddingTop: LAYOUTS.getWidth(5)
  },
  fundingText: {
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 12,
  },
  detailsText: {
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    fontSize: 12,
  },

});

export default HomePageCompanyView;
