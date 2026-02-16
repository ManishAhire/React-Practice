import { StyleSheet, View, Text, Image } from 'react-native';
import Logo from '../assets/img/logo_light.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 20 }}>Reading List App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  img: {
    marginVertical: 20,
  },
});
