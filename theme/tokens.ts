import { createTokens } from "tamagui"

export const color = {
	transparent: "transparent",
	black: "#000000",
	white: "#ffffff",
	sand: "#FAF5EF",
	primary100: "#EDF7F6",
	primary300: "#9ED4CF",
	primary400: "#0D9488",
	primary900: "#134E4A",
	neutral100: "#F9F8F6",
	neutral200: "#E5E2DF",
	neutral400: "#8A8886",
	neutral900: "#3D3C3B",
	error100: "#FFF1F1",
	error200: "#FFB2B2",
	error400: "#F87171",
	error900: "#923232",
	success100: "#EEFFF9",
	success200: "#A1FFDC",
	success400: "#34D399",
	success900: "#1AA06F",
	warning100: "#FFF6EE",
	warning200: "#FFCFA1",
	warning400: "#FFA855",
	warning900: "#995A1F",
	impact1: "#49A1B2",
	impact2: "#5B5176",
	impact3: "#B6F8AB",
}

export const dark_color = {
	transparent: "transparent",
	black: "#ffffff",
	white: "#0B1215",
	sand: "#11181c",
	primary100: "#134E4A",
	primary300: "#0D9488",
	primary400: "#9ED4CF",
	primary900: "#EDF7F6",
	neutral100: "#3D3C3B",
	neutral200: "#8A8886",
	neutral400: "#E5E2DF",
	neutral900: "#F9F8F6",
	error100: "#923232",
	error200: "#F87171",
	error400: "#FFB2B2",
	error900: "#FFF1F1",
	success100: "#1AA06F",
	success200: "#34D399",
	success400: "#A1FFDC",
	success900: "#EEFFF9",
	warning100: "#995A1F",
	warning200: "#FFA855",
	warning400: "#FFCFA1",
	warning900: "#FFF6EE",
	impact1: "#49A1B2",
	impact2: "#5B5176",
	impact3: "#B6F8AB",
}

export const size = {
	none: 0,
	xxsm: 4,
	xsm: 8,
	sm: 12,
	base: 16,
	true: 16,
	md: 24,
	lg: 32,
	xl: 40,
	"2xl": 48,
	"3xl": 64,
}

export const tokens = createTokens({
	size,
	space: size,
	radius: { none: 0, superLightRounded: 4, lightRounded: 12, rounded: 24 },
	zIndex: size,
	color,
})

export type ColorTokens = `\$${keyof typeof color}`
export type SizeTokens = `\$${keyof typeof size}`
