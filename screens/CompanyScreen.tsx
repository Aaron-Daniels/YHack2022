import React, {useState, useEffect} from 'react';
import { StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, Dimensions, View, Text} from 'react-native';
import { COLORS } from '../constants/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/images/index';
import useColorScheme from '../hooks/useColorScheme';
import { LAYOUTS } from '../constants/Layouts';

import * as firebase from 'firebase';

export default function CompanyScreen(props) {

  // const [data, setData] = useState();


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
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
        <Image
          style = {styles.backgroundImage}
          source = {require('../assets/images/defaultCompanyBackground.jpeg')}
        />
        <Image
          style = {styles.companyLogo}
          source = {require('../assets/images/snackpassLogo.png')}
        />
        <Text style={styles.titleText}>Snackpass</Text>
        <Text style={styles.companyDescriptionText}>Cut the line and get rewards.</Text>
        </View>
        <View style={styles.financialsView}>
          <Text style={styles.headerText}>Financials</Text>
          <View style={styles.container}>
            <Text>Monthly Funding: $380/$1,500</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    //Actually can't figure out why this is necessary.
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    marginLeft: LAYOUTS.getWidth(130)
  },
  companyDescriptionText: {
    fontWeight: 'bold',
    marginLeft: LAYOUTS.getWidth(120)
  },
  financialsView: {
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(194),
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#EEEEEE'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: LAYOUTS.getHeight(15),
    marginLeft: LAYOUTS.getWidth(15),
    marginBottom: LAYOUTS.getHeight(10)
  }

});
