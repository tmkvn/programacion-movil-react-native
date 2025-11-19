import { Text, View } from "react-native"
import { Person } from "../models/person"

type SummaryScreenProps = {
  person: Person
}
export const SummaryScreen = ({ person }: SummaryScreenProps) => {
  return (
    <View>
      <Text>Resumen</Text>
      <View>
        <Text>Nombre: {person.firstName}</Text>
        <Text>Apellido: {person.lastName}</Text>
        <Text>Correo: {person.email}</Text>
        <Text>Telefono: {person.phone}</Text>
      </View>
    </View>
  )
}

