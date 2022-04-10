import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import HomePageCompanyView from '../components/HomePageCompanyView'
import { Text, View} from '../components/Themed';
import { LAYOUTS } from '../constants/Layouts';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>TAB THREE</Text>
          <HomePageCompanyView navigation={navigation}/>
          <HomePageCompanyView navigation={navigation}/>
          <HomePageCompanyView navigation={navigation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    marginTop: LAYOUTS.getWidth(12),
    marginBottom: LAYOUTS.getWidth(10)
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
