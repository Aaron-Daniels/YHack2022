import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import HomePageCompanyView from '../components/HomePageCompanyView'
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { LAYOUTS } from '../constants/Layouts';
import SearchBar from '../components/SearchBar';
import { Entypo } from '@expo/vector-icons';

export default function TabTwoScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <SearchBar/>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Discover: 
            </Text>
            <Text style={{...styles.title, color: "#2ABD22"}}>
              Just Launched
            </Text>
            <Entypo name="menu" size={29} style={{color: "#2ABD22"}}/>
          </View>
          <HomePageCompanyView navigation={navigation}/>
          <HomePageCompanyView navigation={navigation}/>
          <HomePageCompanyView navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleView: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    marginBottom: LAYOUTS.getWidth(10),
    marginRight: LAYOUTS.getWidth(7)
  },
});
