import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

// O Pressable é um componente que tem as propriedades/métodos de um TouchableOpacity
type Props = PressableProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap; // glyphMap é onde estão os ícones
}

export function Category( { name, icon, ...rest }: Props ) {
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={colors.gray[400]} />
      <Text style={styles.name}>{ name }</Text>
    </Pressable>
  );
}
