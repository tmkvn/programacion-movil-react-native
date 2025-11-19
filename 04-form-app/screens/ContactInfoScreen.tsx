import { Text, View } from "react-native";
import { Person } from "../models/person"
import { FormInput } from "../components/FormInput";
import { FromButton } from "../components/FromButton";

type ContactInfoScreenProps = {
  person: Person,
  onChange: (field: keyof Person, value: string) => void;
  onNext: () => void
}

export const ContactInfoScreen = ({ person, onChange, onNext }: ContactInfoScreenProps) => {
  return (
    <View>
      <Text>Contacto</Text>
      <FormInput
        label="Correo"
        placeholder="example@example.com"
        value={person.email}
        onChangeText={value => onChange('email', value)}
      />
      <FormInput
        label="Teléfono"
        placeholder="593 123 456 789"
        value={person.phone}
        onChangeText={value => onChange('phone', value)}
      />
      <FromButton label="Siguiente" onPress={onNext} />
    </View>
  )
}

