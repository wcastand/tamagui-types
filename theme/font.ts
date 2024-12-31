import { createFont } from "tamagui"

export const bevietnamFont = createFont({
	family: "bevietnam",
	size: { 1: 12, 2: 14, 3: 16, 4: 22, 5: 24, 6: 26, 7: 30, 8: 36, 9: 40 },
	lineHeight: { 1: 16, 2: 18, 3: 22, 4: 28.6, 5: 31.2, 6: 31.2, 7: 36, 8: 39.6, 9: 44 },
	weight: { thin: 100, regular: 400, md: 500, bold: 700 },
	letterSpacing: { 1: 0 },
	face: {
		100: { normal: "bevietnamThin", italic: "bevietnamThin-Italic" },
		400: { normal: "bevietnam", italic: "bevietnam-Italic" },
		500: { normal: "bevietnamMedium", italic: "bevietnamMedium-Italic" },
		700: { normal: "bevietnamBold", italic: "bevietnamBold-Italic" },
	},
})
