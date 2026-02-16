import { StyleSheet, View, Text, Image } from 'react-native';
import Logo from '../assets/img/logo_light.png';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 20 }}>Reading List App</Text>

      <Link href="/about" style={styles.link}>
        About Page
      </Link>

      <Link href="/contact" style={styles.link}>
        Contact Page
      </Link>
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

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
