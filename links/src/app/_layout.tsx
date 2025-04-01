// navegação em pilha
// estrategia de navegação
import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function Layout(){
    const backgroundColor = colors.gray[950];

    return (
        <Stack 
            screenOptions={{
                headerShown: false,// faz sumir o cabeçalho
                contentStyle: {backgroundColor}  // bg da nossa tela
            }}
        />
    )
}