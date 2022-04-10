import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, Dimensions, View, Text, Animated} from 'react-native';
import { COLORS } from '../constants/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/images/index';
import useColorScheme from '../hooks/useColorScheme';
import { LAYOUTS } from '../constants/Layouts';
import Benchmark from '../components/Benchmark';
import {getStorageURL} from '../API/firebaseMethods';

import * as firebase from 'firebase';



export default function CompanyScreen(props) {

  // const [data, setData] = useState();

  const [data, setData] = useState();
  const [logoLink, setLogoLink] = useState();
  const [bannerLink, setBannerLink] = useState();

  useEffect(() => {
    //If we do not have the props.data for this product, passed in from the previous component, we need to fetch it from firebase.

      const db = firebase.firestore();
      var docRef = db.collection('companies').doc('exsbhykxcROlnfxujfaN');

      docRef.get().then((doc) => {
        console.log("Got some data,", doc.data())
        setData(doc.data());
      })
    //if(props.mainImageLink && props.mainImageLink == undefined || params.mainImageLink == null)

  }, [])



  // useEffect(() => {
  //   //console.log("It is loaded")
  //   getStorageURL(data?.logoPath).then((url) => {
  //     if(url != null) {
  //       //console.log("The image path is:", data?.imagePath);
  //       setLogoLink(url)
  //     }
  //   }).catch(error => {
  //     //Most commonly there will be an error (promise rejection before the data loads in from the api fetch and
  //     //has the opportunity to be set as the piece of state called data.)
  //     console.log("Caught an error in HomeItemView render l", error)
  //   })
  //
  // }, [data])
  //
  // useEffect(() => {
  //   console.log("this is the logoLink: ", logoLink)
  // }, [logoLink])




  //All links intended for use by images should be initialized to undefined to prevent warnings/errors.

  const colorScheme = useColorScheme();

  //Whenever you use the navigate call to a screen, receiving props works slightly differently as seen below.
  //The const data stores the Product Data for the entry with the productid passed from the previous component.
  const params = props.route.params;
  const navigation = props.navigation;



  //This useEffect hook runs whenever we update the data.


  //This useEffect block runs on mount to collect the storeData

  // useEffect(() => {
  //   props.navigation.setOptions({title: props.companyName, headerBackTitle: "Back"})
  // }, [productName])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.scrollv}>
        <View style={styles.headerView}>
          <Image
            style = {styles.backgroundImage}
            source = {require('../assets/images/snackbanner.jpeg')}
          />
          <Image
            style = {styles.companyLogo}
            source = {require('../assets/images/snackpassLogo.png')}
          />
          <Text style={styles.titleText}>Snackpass</Text>
          <Text style={styles.companyDescriptionText}>Cut the line and get rewards.</Text>
        </View>
        <View style={styles.financialsView}>
          
          <View style={styles.container}>
          <Text style={styles.headerText}>Financials</Text>
            <Text style={styles.detailsText}>Monthly Funding: $380/$1,500</Text>
            <View style={styles.progressBar}>
              <Animated.View style={styles.fillBar}/>
            </View>
            <Text style={styles.detailsText}>Max Return: 8x • Royalty: 1.6% • Employees: 9</Text>
            <TouchableOpacity
              style={styles.investButton}
            >
              <Text style={styles.investButtonText}>Invest in Snackpass</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.linksView}>
          <Text style={styles.headerText}>Links</Text>
          <Text style={styles.linkText}>snackpass.co</Text>
          <View style={styles.profilePictureContainer}>
            <Image
              style = {styles.founderProfileImage}
              source = {require('../assets/images/kevinTan.jpeg')}
            />
            <View style = {styles.founderDescriptionView}>
              <Text style={styles.founderName}>Kevin Tan</Text>
              <Text style={styles.founderTitle}>Founder and CEO</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutView}>
          <Text style={styles.headerText}>About</Text>
          <Text style={styles.detailsText}>Snackpass lets you order ahead at restaurants and get rewards with friends — think Starbucks app meets social commerce.
          {"\n"}{"\n"}Snackpass will become the dominant platform for pickup, a 200B industry in the US that is still mostly offline.
          {"\n"}{"\n"}Snackpass has raised $100M in funding from a16z, First Round, Craft, as well as industry names in the tech, hospitality and entertainment such as Bastian Lehmann (Founder of Postmates), Steve Chen (Founder of Youtube), Justin Waldron (Founder of Zynga), Jonas Brothers, Steve Aoki, David Grutman, Draymond Green and more.
          {"\n"}{"\n"}Snackpass is one of the largest social commerce platforms in the US, one of the fastest growing marketplaces, and a top 100 YC company. The environment at Snackpass is high impact, fast paced, and empowering for everyone. We are growing fast and looking for hungry and humble builders to join us in any of our hubs (NYC, SF, LA) or remotely.</Text>
        </View>
        <View style={styles.benchmarksView}>
          <Text style={styles.headerText}>Benchmarks:</Text>
          <Text style={styles.subHeaderText}>Upcoming:</Text>
          <View style={styles.benchmarksContainer}>
            <Benchmark title={"Launch Day! (New Haven, CT)"} date={"April 15th, 2022"}/>
          </View>
          <Text style={styles.subHeaderText}>Previous:</Text>
          <View style={styles.benchmarksContainer}>
            <Benchmark title={"Create a promotional video"} date={"March 15th, 2022"}/>
            <Benchmark title={"Finalize app design"} date={"February 15th, 2022"}/>
          </View>


        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,

  },
  scrollv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    //Actually can't figure out why this is necessary.
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    marginTop: LAYOUTS.getWidth(-46),
    marginBottom: LAYOUTS.getWidth(-46),
    //light peach: '#ffd5cc'
  },
  headerView: {
    width: LAYOUTS.getWidth(375),
    height: LAYOUTS.getHeight(230),
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: LAYOUTS.getWidth(375),
    height: LAYOUTS.getHeight(170),
  },
  companyLogo: {
    left: LAYOUTS.getWidth(20),
    top: LAYOUTS.getWidth(120),
    position: 'absolute',
    width: LAYOUTS.getWidth(100),
    height: LAYOUTS.getHeight(100)
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: LAYOUTS.getWidth(125),
  
  },
  companyDescriptionText: {
    fontWeight: 'bold',
    marginLeft: LAYOUTS.getWidth(125)
  },
  financialsView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(194),
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#EEEEEE',
    marginBottom: LAYOUTS.getHeight(10),
    paddingTop: LAYOUTS.getWidth(46),
    marginTop: LAYOUTS.getWidth(10)
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: LAYOUTS.getHeight(15),
    marginLeft: LAYOUTS.getWidth(20),
    marginBottom: LAYOUTS.getHeight(10),
    alignSelf: 'flex-start'
  },
  progressBar: {
   width: LAYOUTS.getWidth(315),
   height: LAYOUTS.getHeight(40),
   flexDirection: 'row',
   backgroundColor: 'white',
   borderColor: '#EEEEEE',
   borderWidth: 2,
   borderRadius: 50
 },
 fillBar: {
   ...StyleSheet.absoluteFillObject,
   backgroundColor: "#2ABD22",
   width: "50%",
   borderRadius: 50,
 },
 detailsText: {
   fontWeight: '600',
   paddingHorizontal: LAYOUTS.getWidth(20)
 },
 investButton: {
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: LAYOUTS.getHeight(15),
   width: LAYOUTS.getWidth(200),
   height: LAYOUTS.getHeight(40),
   backgroundColor: "#2ABD22",
   borderRadius: 50,
 },
 investButtonText: {
   fontSize: 17,
   fontWeight: '600',
   color: 'white',
 },
 linksView: {
   width: LAYOUTS.getWidth(355),
   height: LAYOUTS.getHeight(143),
   borderRadius: 15,
   borderWidth: 3,
   borderColor: '#EEEEEE',
   marginBottom: LAYOUTS.getHeight(10),
 },
 linkText: {
   fontSize: 15,
   fontWeight: '600',
   marginLeft: LAYOUTS.getWidth(20),
   marginBottom: LAYOUTS.getHeight(10),
   color: "#2ABD22",
 },
 profilePictureContainer: {
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection : 'row'
 },
 founderProfileImage: {
   width: LAYOUTS.getWidth(50),
   height: LAYOUTS.getHeight(50),
   borderRadius: 100,
 },
 founderDescriptionView: {
   flexDirection: 'column'
 },
 founderName: {
   marginLeft: LAYOUTS.getWidth(5),
   marginBottom: LAYOUTS.getHeight(5),
   fontSize: 15,
   color: "#2ABD22",
   fontWeight: '600'
 },
 founderTitle: {
   marginLeft: LAYOUTS.getWidth(5),
   fontSize: 15,
   color: 'grey'
 },
 aboutView: {
   width: LAYOUTS.getWidth(355),
   borderRadius: 15,
   borderWidth: 3,
   borderColor: '#EEEEEE',
   marginBottom: LAYOUTS.getHeight(10),
   paddingBottom: LAYOUTS.getWidth(10)
 },
 benchmarksView: {
   width: LAYOUTS.getWidth(355),
   borderRadius: 15,
   borderWidth: 3,
   borderColor: '#EEEEEE',
   marginBottom: LAYOUTS.getHeight(10),
 },
 benchmarksContainer: {
  alignItems: 'center',
  paddingBottom: LAYOUTS.getHeight(15)
},
subHeaderText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: LAYOUTS.getHeight(15),
  marginLeft: LAYOUTS.getWidth(15),
  marginBottom: LAYOUTS.getHeight(10)
}

});
