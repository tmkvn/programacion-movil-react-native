import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PersonalInfoScreen } from './screens/PersonalInfoScreen';
import { ContactInfoScreen } from './screens/ContactInfoScreen';
import { SummaryScreen } from './screens/SummaryScreen';
import { TOTAL_STEPS, usePersonForm } from './state/usePersonForm';

export default function App() {

  const { person, updateField, step, nextStep } = usePersonForm();

  const renderScreen = () => {
    if (step === 0) {
      return <PersonalInfoScreen person={person} onChange={updateField} onNext={nextStep} />
    }
    if (step === 1) {
      return <ContactInfoScreen person={person} onChange={updateField} onNext={nextStep} />
    }
    return <SummaryScreen person={person} />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Formulario de registro</Text>
        <Text>Paso {step + 1} de {TOTAL_STEPS}</Text>
        <View>
          {renderScreen()}
        </View>
      </View>
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
