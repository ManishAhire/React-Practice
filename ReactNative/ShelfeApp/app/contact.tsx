import { StyleSheet } from 'react-native';
import ThemedView from '../components/themedView';
import ThemedText from '../components/themedText';

export default function Contact() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>
        Contact
      </ThemedText>
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
