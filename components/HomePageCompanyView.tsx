import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Images from '../assets/images/index';
import {useNavigation} from '@react-navigation/native';
import { LAYOUTS } from '../constants/Layouts';
// import {getProductData} from '../constants/DataHelpers';
import {getStorageURL} from '../API/firebaseMethods';
import { COLORS } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CompanyScreen from '../screens/CompanyScreen';
import * as firebase from 'firebase';

//See Sillable ItemView for inspiration
const HomePageCompanyView = ({navigation, companyid}) => {
  //You have to use the 'useNavigation' hook in order to have components inherit navigation.
  //Only screens inherit this behavior by default
  //const navigation = useNavigation();
  //const data = getProductData(productid);

  const colorScheme = useColorScheme();

  const [data, setData] = useState();
  const [logoLink, setLogoLink] = useState();
  const [bannerLink, setBannerLink] = useState();

  useEffect(() => {
  const db = firebase.firestore();
  var docRef = db.collection('companies').doc(companyid);

  docRef.get().then((doc) => {
    if(doc.exists){
      return(doc.data())
    } else {
      console.log("No such Document!");
    }
  }).then((result) => {
    setData(result);

    return(true);
  }).then((result) => {
    if(data) {
      //console.log("The data received was", data)
    }
    return(true)
  }).catch((error) => {
    console.log("error getting document", error);
  })
}, [])

  useEffect(() => {
    console.log("Got the new data with tile: ", data?.title);
  }, [data])

  // useEffect(() => {
  //   //console.log("It is loaded")
  //   getStorageURL(data?.logoPath).then((url) => {
  //     if(url != null) {
  //       //console.log("The image path is:", data?.imagePath);
  //       setLogoLink(url)
  //       return(imageLink)
  //     }
  //   }).then((result) => {
  //     //console.log("Set the image Link", imageLink);
  //     //setLoaded(true)
  //   }).catch(error => {
  //     //Most commonly there will be an error (promise rejection before the data loads in from the api fetch and
  //     //has the opportunity to be set as the piece of state called data.)
  //     console.log("Caught an error in HomeItemView render l", error)
  //   })
  //
  // }, [data])

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
          <Text style={styles.titleText}>{data?.title}</Text>
          <Text style={styles.taglineText}>{data?.description}</Text>
        </View>
        <View
          style={styles.companyDescriptionView}
        >
          <Text style={styles.fundingText}>Monthly Funding: ${data?.currentFunding}/${data?.fundingGoal}</Text>
          <Text style={styles.detailsText}>Max Return: {data?.maxReturn}x * Royalty: {data?.royalty} * Employees: {data?.employees}  </Text>

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
