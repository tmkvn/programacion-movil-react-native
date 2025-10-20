import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Counter from './components/Counter';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Counter />
        <Footer />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
});
