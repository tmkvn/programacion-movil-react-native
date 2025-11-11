import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PersonalInfoScreen } from './screens/PersonalInfoScreen';
import { usePersonForm } from './state/usePersonForm';

export default function App() {

  const { person, updateField } = usePersonForm()

  return (
    <View style={styles.container}>
      <PersonalInfoScreen
        person={person}
        onChange={updateField}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
