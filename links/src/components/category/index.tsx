import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { styles } from "./styles";

// O Pressable é um componente que tem as propriedades/métodos de um TouchableOpacity
type Props = PressableProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof MaterialIcons.glyphMap; // glyphMap é onde estão os ícones
}

export function Category( { name, icon, isSelected, ...rest }: Props ) {
  const color = isSelected ? colors.green[300] : colors.gray[400];
  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      {/* [], {} o que está dentro do obj sobreescreve o que está fora */}
      <Text style={[styles.name, {color}]}>{ name }</Text>
    </Pressable>
  );
}
