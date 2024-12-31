import tamaguiConfig from "@/tamagui.config";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={"light"}>
			<ThemeProvider value={DefaultTheme}><Stack /></ThemeProvider>
		</TamaguiProvider>
  )
}
