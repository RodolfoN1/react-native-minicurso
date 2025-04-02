import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Category } from "@/components/category";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={ styles.header }>
        <Image 
          source={require("@/assets/logo.png")}
          style={styles.logo} 
        />
        {/* 
          Componente de toque (como se fosse cursor pointer com efeito de opacity ao clicar)  
          existe a props de activeOpacity={0.3} que define a opacidade
        */}
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>


      <Category />
    </View>
  );
} 