import React, {useState, useEffect} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput} from 'react-native';
import { LAYOUTS } from '../constants/Layouts';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Text style={styles.text}>
        search for startups...
      </Text>
      <FontAwesome name="search" size={25} style={styles.icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: LAYOUTS.getWidth(15),
    marginBottom: LAYOUTS.getWidth(10),
    width: LAYOUTS.getWidth(355),
    height: LAYOUTS.getHeight(40),
    borderWidth: 3,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    color: '#ABABAB'
  },
  icon: {
    marginTop: LAYOUTS.getWidth(5),
    color: 'black',
    position: 'absolute',
    right: LAYOUTS.getWidth(10),
    bottom: LAYOUTS.getWidth(6)
  }
})

export default SearchBar;