import { Text, View } from "react-native"
import { FormInput } from "../components/FormInput"
import { Person } from "../models/person"


type PersonalInfoScreenProps = {
  person: Person,
  onChange: (field: keyof Person, value: string) => void;
}

export const PersonalInfoScreen = ({ person, onChange }: PersonalInfoScreenProps) => {
  return (
    <View>
      <Text>Datos Personales</Text>
      <FormInput
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={person.firstName}
        onChangeText={value => onChange('firstName', value)}
      />
      <FormInput
        label="Apellido"
        placeholder="Ingresa tu apellido"
        value={person.lastName}
        onChangeText={value => onChange('lastName', value)}
      />
    </View>
  )
}
