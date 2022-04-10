import { StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import HomePageCompanyView from '../components/HomePageCompanyView'
import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }) {
  return (
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recommended For You</Text>
      <HomePageCompanyView navigation={navigation}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </SafeAreaView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
