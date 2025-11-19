import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type FromButtonProps = TouchableOpacityProps & {
  label: string;
}
export const FromButton = ({ label, style, ...props }: FromButtonProps) => {
  return (
    <TouchableOpacity {...props} style={[style]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}

