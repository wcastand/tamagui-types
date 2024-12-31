import { createMedia } from "@tamagui/react-native-media-driver"
import { shorthands } from "@tamagui/shorthands"
import type { CreateTamaguiProps } from "@tamagui/web"
import { createTamagui } from "tamagui"
import { bevietnamFont } from "./theme/font"
import { color, dark_color, tokens } from "./theme/tokens"

const media = createMedia({
	xl: { maxWidth: 1650 },
	lg: { maxWidth: 1280 },
	md: { maxWidth: 1020 },
	sm: { maxWidth: 800 },
	xs: { maxWidth: 660 },
	xxs: { maxWidth: 390 },
	gtXs: { minWidth: 660 + 1 },
	gtSm: { minWidth: 800 + 1 },
	gtMd: { minWidth: 1020 + 1 },
	gtLg: { minWidth: 1280 + 1 },
	gtXl: { minWidth: 1650 + 1 },
})

// note all the non "gt" ones should be true to start to match mobile-first
// were aiming for "xs" to be the default to "gtXs" true too
export const mediaQueryDefaultActive = {
	xl: true,
	lg: true,
	md: true,
	sm: true,
	xs: true,
	// false
	xxs: false,
}

export const tamaguiConfig = createTamagui({
	media,
	tokens,
	shorthands,
	defaultFont: "body",
	shouldAddPrefersColorThemes: true,
	themes: { light: color, dark: dark_color },
	fonts: { heading: bevietnamFont, body: bevietnamFont },
	settings: {
		allowedStyleValues: "somewhat-strict",
		autocompleteSpecificTokens: true,
		mediaPropOrder: false,
		mediaQueryDefaultActive,
	},
} satisfies CreateTamaguiProps)

export default tamaguiConfig

export type AppConfig = typeof tamaguiConfig
export type BaseTheme = typeof color

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}
}
