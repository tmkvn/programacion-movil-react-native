import { Text, View, StyleSheet, Alert } from "react-native"
import { Person } from "../models/person"
import { FromButton } from "../components/FromButton"
import { useState } from "react"
import { regsistrarPersona } from "../service/personService"

type SummaryScreenProps = {
  person: Person
  onBack?: () => void
}

export const SummaryScreen = ({ person, onBack: onBack }: SummaryScreenProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      await regsistrarPersona(person);
      Alert.alert(
        'Registro exitoso',
        'La persona fue creada con éxito',
        [{ text: 'Aceptar', onPress: onBack }]
      )
    } catch (error) {
      Alert.alert('Error al registrar')
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen</Text>
      <View style={styles.card}>
        <Text style={styles.row}>Nombre: {person.firstName}</Text>
        <Text style={styles.row}>Apellido: {person.lastName}</Text>
        <Text style={styles.row}>Correo: {person.email}</Text>
        <Text style={styles.row}>Telefono: {person.phone}</Text>
      </View>
      <FromButton
        label="Registrar"
        disabled={isSubmitting}
        onPress={handleRegister}
      />
      <FromButton label="Registar otra persona" onPress={onBack} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  row: {
    fontSize: 16,
    marginBottom: 8,
    color: 'black',
  }
})
