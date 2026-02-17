import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/themedView';
import ThemedLogo from '../components/themedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/themedText';

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true}>
        The number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>

      <Spacer />
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>

      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Page</ThemedText>
      </Link>
    </ThemedView>
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

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
