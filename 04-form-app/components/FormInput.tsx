import { Text, TextInput, TextInputProps, View } from "react-native"

type FormInputProps = TextInputProps & {
  label: string;
}

export const FormInput = ({ label, style, ...props }: FormInputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        {...props}
        style={style}
      />
    </View>
  )
}

