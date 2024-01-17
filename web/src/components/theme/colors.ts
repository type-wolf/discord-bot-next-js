/**
 * rBlack - A color palette optimized for black and gray shades in both light and dark modes.
 * Provides a range of shades from light gray to black, with lighter shades for light mode
 * and darker shades for dark mode, ensuring high contrast and readability in both modes.
 */
export const rBlack = {
	50: { light: '#E0E0E0', dark: '#9E9E9E' }, // Light Gray to Medium Gray for Dark Mode
	100: { light: '#BDBDBD', dark: '#757575' },
	200: { light: '#9E9E9E', dark: '#616161' },
	300: { light: '#757575', dark: '#424242' },
	400: { light: '#616161', dark: '#303030' },
	500: { light: '#424242', dark: '#212121' }, // Standard Black to Darker Gray for Dark Mode
	600: { light: '#303030', dark: '#181818' },
	700: { light: '#212121', dark: '#121212' },
	800: { light: '#181818', dark: '#0B0B0B' },
	900: { light: '#000000', dark: '#000000' }, // True Black for both modes
	A100: { light: '#F5F5F5', dark: '#757575' },
	A200: { light: '#EEEEEE', dark: '#616161' },
	A400: { light: '#E0E0E0', dark: '#424242' },
	A700: { light: '#616161', dark: '#303030' },
} as const;

/**
 * rWhite - A color palette optimized for white and light gray shades in both light and dark modes.
 * Provides a range of shades from white to light gray for light mode,
 * and a gradient of grays for dark mode, ensuring high contrast and readability.
 */
export const rWhite = {
	50: { light: '#FFFFFF', dark: '#E0E0E0' }, // White to Light Gray for Dark Mode
	100: { light: '#FFFFFF', dark: '#C2C2C2' },
	200: { light: '#FFFFFF', dark: '#A3A3A3' },
	300: { light: '#FFFFFF', dark: '#858585' },
	400: { light: '#FFFFFF', dark: '#666666' },
	500: { light: '#FFFFFF', dark: '#4D4D4D' }, // Standard White to Medium Gray for Dark Mode
	600: { light: '#F2F2F2', dark: '#343434' },
	700: { light: '#E5E5E5', dark: '#1B1B1B' },
	800: { light: '#D8D8D8', dark: '#121212' },
	900: { light: '#CCCCCC', dark: '#000000' }, // Lighter Gray to Black for Dark Mode
	A100: { light: '#FFFFFF', dark: '#E0E0E0' },
	A200: { light: '#FFFFFF', dark: '#C2C2C2' },
	A400: { light: '#FFFFFF', dark: '#A3A3A3' },
	A700: { light: '#F2F2F2', dark: '#343434' },
} as const;

/**
 * rPink - A color palette optimized for pink shades in both light and dark modes.
 * Provides a range of pink shades for light mode,
 * and deeper, more subdued pink tones for dark mode, ensuring aesthetic appeal and readability.
 */
export const rPink = {
	50: { light: '#fce4ec', dark: '#d9a6af' }, // Light Pink to Soft Pink
	100: { light: '#f8bbd0', dark: '#bf8690' },
	200: { light: '#f48fb1', dark: '#a56a73' },
	300: { light: '#f06292', dark: '#8c4e5a' },
	400: { light: '#ec407a', dark: '#743c48' },
	500: { light: '#e91e63', dark: '#5d2a35' }, // Standard Pink to Rich Pink
	600: { light: '#d81b60', dark: '#4a2130' },
	700: { light: '#c2185b', dark: '#391923' },
	800: { light: '#ad1457', dark: '#2b111a' },
	900: { light: '#880e4f', dark: '#1e0c13' }, // Dark Pink to Warmer Dark Pink
	A100: { light: '#ff80ab', dark: '#c97a86' },
	A200: { light: '#ff4081', dark: '#a3545d' },
	A400: { light: '#f50057', dark: '#7c3943' },
	A700: { light: '#c51162', dark: '#56262f' },
} as const;

/**
 * rRed - A color palette optimized for red shades in both light and dark modes.
 * Provides a range of red shades for light mode,
 * and deeper, more subdued red tones for dark mode, ensuring aesthetic appeal and readability.
 */
export const rRed = {
	50: { light: '#ffebee', dark: '#d9a6a7' }, // Light Red to Soft Red
	100: { light: '#ffcdd2', dark: '#bf8688' },
	200: { light: '#ef9a9a', dark: '#a56a6d' },
	300: { light: '#e57373', dark: '#8c4e51' },
	400: { light: '#ef5350', dark: '#743c3e' },
	500: { light: '#f44336', dark: '#5d2a2c' }, // Standard Red to Rich Red
	600: { light: '#e53935', dark: '#4a2123' },
	700: { light: '#d32f2f', dark: '#391919' },
	800: { light: '#c62828', dark: '#2b1111' },
	900: { light: '#b71c1c', dark: '#1e0c0d' }, // Dark Red to Warmer Dark Red
	A100: { light: '#ff8a80', dark: '#c97a7a' },
	A200: { light: '#ff5252', dark: '#a35454' },
	A400: { light: '#ff1744', dark: '#7c3939' },
	A700: { light: '#d50000', dark: '#562626' },
} as const;

/**
 * rPurple - A color palette optimized for purple shades in both light and dark modes.
 * Provides a range of purple shades for light mode,
 * and deeper, more subdued purple tones for dark mode, ensuring aesthetic appeal and readability.
 */
export const rPurple = {
	50: { light: '#f3e5f5', dark: '#cba6cd' }, // Light Purple to Darker Purple
	100: { light: '#e1bee7', dark: '#aa85ad' },
	200: { light: '#ce93d8', dark: '#946b94' },
	300: { light: '#ba68c8', dark: '#7c4d75' },
	400: { light: '#ab47bc', dark: '#653553' },
	500: { light: '#9c27b0', dark: '#501c4a' }, // Standard Purple to Deep Purple
	600: { light: '#8e24aa', dark: '#451740' },
	700: { light: '#7b1fa2', dark: '#3a1433' },
	800: { light: '#6a1b9a', dark: '#2e0f29' },
	900: { light: '#4a148c', dark: '#1f0b1e' }, // Dark Purple to Very Dark Purple
	A100: { light: '#ea80fc', dark: '#b266b2' },
	A200: { light: '#e040fb', dark: '#934f93' },
	A400: { light: '#d500f9', dark: '#740a74' },
	A700: { light: '#aa00ff', dark: '#520052' },
} as const;

/**
 * rDeepPurple - A color palette optimized for deep purple shades in both light and dark modes.
 * Provides a range of deep purple shades for light mode,
 * and deeper, more subdued deep purple tones for dark mode, ensuring aesthetic appeal and readability.
 */
export const rDeepPurple = {
	50: { light: '#ede7f6', dark: '#d3b8da' }, // Light Deep Purple to Softer Deep Purple
	100: { light: '#d1c4e9', dark: '#b8a0bc' },
	200: { light: '#b39ddb', dark: '#9e7ca1' },
	300: { light: '#9575cd', dark: '#84618a' },
	400: { light: '#7e57c2', dark: '#6b4d74' },
	500: { light: '#673ab7', dark: '#5d3a5d' }, // Standard Deep Purple to Rich Deep Purple
	600: { light: '#5e35b1', dark: '#503550' },
	700: { light: '#512da8', dark: '#442b45' },
	800: { light: '#4527a0', dark: '#38213b' },
	900: { light: '#311b92', dark: '#2b1b2b' }, // Dark Deep Purple to Warmer Dark Deep Purple
	A100: { light: '#b388ff', dark: '#9274c0' },
	A200: { light: '#7c4dff', dark: '#7558a3' },
	A400: { light: '#651fff', dark: '#593c86' },
	A700: { light: '#6200ea', dark: '#4e0090' },
} as const;

/**
 * rIndigo - A color palette optimized for indigo shades in both light and dark modes.
 * Provides a range of indigo shades for light mode,
 * and deeper, more subdued indigo tones for dark mode, ensuring aesthetic appeal and readability.
 */
export const rIndigo = {
	50: { light: '#e8eaf6', dark: '#d1d4ed' }, // Light Indigo to Softer Indigo
	100: { light: '#c5cae9', dark: '#b0b5d1' },
	200: { light: '#9fa8da', dark: '#8f95bf' },
	300: { light: '#7986cb', dark: '#6e73a8' },
	400: { light: '#5c6bc0', dark: '#555d92' },
	500: { light: '#3f51b5', dark: '#3b4171' }, // Standard Indigo to Rich Indigo
	600: { light: '#3949ab', dark: '#333766' },
	700: { light: '#303f9f', dark: '#2b305f' },
	800: { light: '#283593', dark: '#232856' },
	900: { light: '#1a237e', dark: '#1c1c48' }, // Dark Indigo to Warmer Dark Indigo
	A100: { light: '#8c9eff', dark: '#7a85cc' },
	A200: { light: '#536dfe', dark: '#4a5ab2' },
	A400: { light: '#3d5afe', dark: '#3a4aa0' },
	A700: { light: '#304ffe', dark: '#2c38c8' },
} as const;

/**
 * rBlue - A color palette optimized for blue shades in both light and dark modes.
 * Provides a range of blue shades for light mode,
 * and deeper, more subdued blue tones for dark mode, ensuring aesthetic appeal and readability.
 */
export const rBlue = {
	50: { light: '#e3f2fd', dark: '#c4d8e8' }, // Light Blue to Softer Blue
	100: { light: '#bbdefb', dark: '#9cbdd6' },
	200: { light: '#90caf9', dark: '#7aa1c4' },
	300: { light: '#64b5f6', dark: '#598cb2' },
	400: { light: '#42a5f5', dark: '#4671a3' },
	500: { light: '#2196f3', dark: '#2c468a' }, // Standard Blue to Rich Blue
	600: { light: '#1e88e5', dark: '#29407a' },
	700: { light: '#1976d2', dark: '#23356a' },
	800: { light: '#1565c0', dark: '#1e2c5a' },
	900: { light: '#0d47a1', dark: '#1c2248' }, // Dark Blue to Warmer Dark Blue
	A100: { light: '#82b1ff', dark: '#7091e6' },
	A200: { light: '#448aff', dark: '#4a69d3' },
	A400: { light: '#2979ff', dark: '#3557bf' },
	A700: { light: '#2962ff', dark: '#304ca8' },
} as const;

/**
 * rLightBlue - A color palette optimized for light blue shades in both light and dark modes.
 * Provides a range of light blue shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rLightBlue = {
	50: { light: '#e1f5fe', dark: '#c4dae6' }, // Light Light Blue to Softer Light Blue
	100: { light: '#b3e5fc', dark: '#9cbce0' },
	200: { light: '#81d4fa', dark: '#7aa4da' },
	300: { light: '#4fc3f7', dark: '#598cc4' },
	400: { light: '#29b6f6', dark: '#4674ae' },
	500: { light: '#03a9f4', dark: '#2c5c98' }, // Standard Light Blue to Rich Light Blue
	600: { light: '#039be5', dark: '#294b88' },
	700: { light: '#0288d1', dark: '#233a78' },
	800: { light: '#0277bd', dark: '#1e2968' },
	900: { light: '#01579b', dark: '#1c1958' }, // Dark Light Blue to Warmer Dark Light Blue
	A100: { light: '#80d8ff', dark: '#7091d8' },
	A200: { light: '#40c4ff', dark: '#4a92c2' },
	A400: { light: '#00b0ff', dark: '#3578ac' },
	A700: { light: '#0091ea', dark: '#306798' },
} as const;

/**
 * rCyan - A color palette optimized for cyan shades in both light and dark modes.
 * Provides a range of cyan shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rCyan = {
	50: { light: '#e0f7fa', dark: '#c4d8d8' }, // Light Cyan to Softer Cyan
	100: { light: '#b2ebf2', dark: '#9cbcbc' },
	200: { light: '#80deea', dark: '#7aa0a0' },
	300: { light: '#4dd0e1', dark: '#598484' },
	400: { light: '#26c6da', dark: '#467068' },
	500: { light: '#00bcd4', dark: '#2c4c4c' }, // Standard Cyan to Rich Cyan
	600: { light: '#00acc1', dark: '#294040' },
	700: { light: '#0097a7', dark: '#233434' },
	800: { light: '#00838f', dark: '#1e2828' },
	900: { light: '#006064', dark: '#1c1c1c' }, // Dark Cyan to Warmer Dark Cyan
	A100: { light: '#84ffff', dark: '#70d8d8' },
	A200: { light: '#18ffff', dark: '#4abcbc' },
	A400: { light: '#00e5ff', dark: '#358c8c' },
	A700: { light: '#00b8d4', dark: '#306666' },
} as const;

/**
 * rTeal - A color palette optimized for teal shades in both light and dark modes.
 * Provides a range of teal shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rTeal = {
	50: { light: '#e0f2f1', dark: '#c4cdcd' }, // Light Teal to Softer Teal
	100: { light: '#b2dfdb', dark: '#9cb0b0' },
	200: { light: '#80cbc4', dark: '#7a9393' },
	300: { light: '#4db6ac', dark: '#597676' },
	400: { light: '#26a69a', dark: '#467a5a' },
	500: { light: '#009688', dark: '#2c4c4c' }, // Standard Teal to Rich Teal
	600: { light: '#00897b', dark: '#294040' },
	700: { light: '#00796b', dark: '#233434' },
	800: { light: '#00695c', dark: '#1e2828' },
	900: { light: '#004d40', dark: '#1c1c1c' }, // Dark Teal to Warmer Dark Teal
	A100: { light: '#a7ffeb', dark: '#70d8d8' },
	A200: { light: '#64ffda', dark: '#4abcbc' },
	A400: { light: '#1de9b6', dark: '#358c8c' },
	A700: { light: '#00bfa5', dark: '#306666' },
} as const;

/**
 * rGreen - A color palette optimized for green shades in both light and dark modes.
 * Provides a range of green shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rGreen = {
	50: { light: '#e8f5e9', dark: '#c4c8b5' }, // Light Green to Softer Green
	100: { light: '#c8e6c9', dark: '#9caa8d' },
	200: { light: '#a5d6a7', dark: '#7a9365' },
	300: { light: '#81c784', dark: '#5a7d3e' },
	400: { light: '#66bb6a', dark: '#467030' },
	500: { light: '#4caf50', dark: '#2c4c1f' }, // Standard Green to Rich Green
	600: { light: '#43a047', dark: '#294028' },
	700: { light: '#388e3c', dark: '#23342d' },
	800: { light: '#2e7d32', dark: '#1e282e' },
	900: { light: '#1b5e20', dark: '#1c1c1a' }, // Dark Green to Warmer Dark Green
	A100: { light: '#b9f6ca', dark: '#70d8a4' },
	A200: { light: '#69f0ae', dark: '#4ab48a' },
	A400: { light: '#00e676', dark: '#358c6a' },
	A700: { light: '#00c853', dark: '#306650' },
} as const;

/**
 * rLightGreen - A color palette optimized for light green shades in both light and dark modes.
 * Provides a range of light green shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rLightGreen = {
	50: { light: '#f1f8e9', dark: '#c4d4c2' }, // Light Light Green to Softer Light Green
	100: { light: '#dcedc8', dark: '#9eb79e' },
	200: { light: '#c5e1a5', dark: '#7a9a7a' },
	300: { light: '#aed581', dark: '#567a56' },
	400: { light: '#9ccc65', dark: '#467f3b' },
	500: { light: '#8bc34a', dark: '#2d4f2d' }, // Standard Light Green to Rich Light Green
	600: { light: '#7cb342', dark: '#294127' },
	700: { light: '#689f38', dark: '#23371f' },
	800: { light: '#558b2f', dark: '#1e2e19' },
	900: { light: '#33691e', dark: '#1c2111' }, // Dark Light Green to Warmer Dark Light Green
	A100: { light: '#ccff90', dark: '#70b98e' },
	A200: { light: '#b2ff59', dark: '#4eaa6e' },
	A400: { light: '#76ff03', dark: '#357a4e' },
	A700: { light: '#64dd17', dark: '#3c5f3d' },
} as const;

/**
 * rLime - A color palette optimized for lime shades in both light and dark modes.
 * Provides a range of lime shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rLime = {
	50: { light: '#f9fbe7', dark: '#c4c5a2' }, // Light Lime to Softer Lime
	100: { light: '#f0f4c3', dark: '#9ea386' },
	200: { light: '#e6ee9c', dark: '#7a816a' },
	300: { light: '#dce775', dark: '#56634e' },
	400: { light: '#d4e157', dark: '#467a32' },
	500: { light: '#cddc39', dark: '#2d3a1f' }, // Standard Lime to Rich Lime
	600: { light: '#c0ca33', dark: '#294030' },
	700: { light: '#afb42b', dark: '#233415' },
	800: { light: '#9e9d24', dark: '#1e1d10' },
	900: { light: '#827717', dark: '#1c160b' }, // Dark Lime to Warmer Dark Lime
	A100: { light: '#f4ff81', dark: '#70b76b' },
	A200: { light: '#eeff41', dark: '#4c8d48' },
	A400: { light: '#c6ff00', dark: '#35672e' },
	A700: { light: '#aeea00', dark: '#305224' },
} as const;

/**
 * rYellow - A color palette optimized for yellow shades in both light and dark modes.
 * Provides a range of yellow shades for light mode,
 * and maintains readability and aesthetics with corresponding shades for dark mode.
 */
export const rYellow = {
	50: { light: '#fffde7', dark: '#d4c7a1' }, // Light Yellow to Softer Yellow
	100: { light: '#fff9c4', dark: '#b8a876' },
	200: { light: '#fff59d', dark: '#9e8a4c' },
	300: { light: '#fff176', dark: '#847122' },
	400: { light: '#ffee58', dark: '#6a5900' },
	500: { light: '#ffeb3b', dark: '#514300' }, // Standard Yellow to Rich Yellow
	600: { light: '#fdd835', dark: '#453900' },
	700: { light: '#fbc02d', dark: '#3a2f00' },
	800: { light: '#f9a825', dark: '#302500' },
	900: { light: '#f57f17', dark: '#261b00' }, // Dark Yellow to Warmer Dark Yellow
	A100: { light: '#ffff8d', dark: '#c7c466' },
	A200: { light: '#ffff00', dark: '#9e9e00' },
	A400: { light: '#ffea00', dark: '#757500' },
	A700: { light: '#ffd600', dark: '#5d5d00' },
} as const;

/**
 * rAmber - A color palette optimized for amber shades in both light and dark modes.
 * Provides a range of amber shades for light mode,
 * ensuring a warm and vibrant look, while in dark mode,
 * the shades are adjusted to maintain readability and aesthetics.
 * The palette is designed to offer a variety of amber tones,
 * from light and soft to deep and rich, suitable for different UI elements and themes.
 */
export const rAmber = {
	50: { light: '#fff8e1', dark: '#d4bba1' }, // Light Amber to Softer Amber
	100: { light: '#ffecb3', dark: '#b8a076' },
	200: { light: '#ffe082', dark: '#9e854c' },
	300: { light: '#ffd54f', dark: '#847322' },
	400: { light: '#ffca28', dark: '#6a5a00' },
	500: { light: '#ffc107', dark: '#514300' }, // Standard Amber to Rich Amber
	600: { light: '#ffb300', dark: '#453900' },
	700: { light: '#ffa000', dark: '#3a2f00' },
	800: { light: '#ff8f00', dark: '#302500' },
	900: { light: '#ff6f00', dark: '#261b00' }, // Dark Amber to Warmer Dark Amber
	A100: { light: '#ffe57f', dark: '#c7b366' },
	A200: { light: '#ffd740', dark: '#9e9300' },
	A400: { light: '#ffc400', dark: '#757300' },
	A700: { light: '#ffab00', dark: '#5d5800' },
} as const;

/**
 * rOrange - A color palette optimized for orange shades in both light and dark modes.
 * Offers a range of orange shades in light mode that are bright and vibrant,
 * while in dark mode, the shades are carefully adjusted to ensure readability and visual appeal.
 * This palette caters to a variety of UI elements, providing shades ranging from soft and subtle to deep and vivid.
 */
export const rOrange = {
	50: { light: '#fff3e0', dark: '#e0c8a2' }, // Light Orange to Softer Orange in Dark Mode
	100: { light: '#ffe0b2', dark: '#c9a576' },
	200: { light: '#ffcc80', dark: '#b18a4c' },
	300: { light: '#ffb74d', dark: '#987222' },
	400: { light: '#ffa726', dark: '#806500' },
	500: { light: '#ff9800', dark: '#674300' }, // Standard Orange to Rich Orange in Dark Mode
	600: { light: '#fb8c00', dark: '#593900' },
	700: { light: '#f57c00', dark: '#4f2f00' },
	800: { light: '#ef6c00', dark: '#432500' },
	900: { light: '#e65100', dark: '#361b00' }, // Dark Orange to Darker Tone in Dark Mode
	A100: { light: '#ffd180', dark: '#d2a666' },
	A200: { light: '#ffab40', dark: '#b08300' },
	A400: { light: '#ff9100', dark: '#956500' },
	A700: { light: '#ff6d00', dark: '#7a5800' },
} as const;

/**
 * rDeepOrange - A color palette optimized for deep orange shades in both light and dark modes.
 * This palette provides a vibrant range of deep orange shades for light mode,
 * offering a bold and energetic aesthetic. In dark mode,
 * the shades are adapted to ensure readability and visual comfort,
 * with a focus on maintaining the depth and warmth of deep orange while being easy on the eyes.
 * Suitable for a variety of UI elements, this palette ranges from subtle and muted to rich and intense deep orange tones.
 */
export const rDeepOrange = {
	50: { light: '#fbe9e7', dark: '#e0b2a0' }, // Light Deep Orange to Softer Deep Orange in Dark Mode
	100: { light: '#ffccbc', dark: '#c9a275' },
	200: { light: '#ffab91', dark: '#b17a4c' },
	300: { light: '#ff8a65', dark: '#987052' },
	400: { light: '#ff7043', dark: '#806550' },
	500: { light: '#ff5722', dark: '#674530' }, // Standard Deep Orange to Rich Deep Orange in Dark Mode
	600: { light: '#f4511e', dark: '#593920' },
	700: { light: '#e64a19', dark: '#4f2e00' },
	800: { light: '#d84315', dark: '#432600' },
	900: { light: '#bf360c', dark: '#361610' }, // Dark Deep Orange to Darker Tone in Dark Mode
	A100: { light: '#ff9e80', dark: '#d27a66' },
	A200: { light: '#ff6e40', dark: '#b15300' },
	A400: { light: '#ff3d00', dark: '#955600' },
	A700: { light: '#dd2c00', dark: '#7a4c00' },
} as const;

/**
 * rBrown - A color palette for brown shades, optimized for both light and dark modes.
 * This constant provides a range of brown shades that are lighter in light mode and darker in dark mode.
 * Each shade is defined with two hex color codes: one for light mode and one for dark mode.
 */
export const rBrown = {
	50: { light: '#efebe9', dark: '#d1c0b8' }, // Light Brown to Softer Brown in Dark Mode
	100: { light: '#d7ccc8', dark: '#b8a79d' },
	200: { light: '#bcaaa4', dark: '#9d8275' },
	300: { light: '#a1887f', dark: '#82665a' },
	400: { light: '#8d6e63', dark: '#6a5047' },
	500: { light: '#795548', dark: '#523831' }, // Standard Brown to Rich Brown in Dark Mode
	600: { light: '#6d4c41', dark: '#46342a' },
	700: { light: '#5d4037', dark: '#3a2620' },
	800: { light: '#4e342e', dark: '#2e1c16' },
	900: { light: '#3e2723', dark: '#231211' }, // Dark Brown to Darker Tone in Dark Mode
	A100: { light: '#d7ccc8', dark: '#b8a79d' },
	A200: { light: '#bcaaa4', dark: '#9d8275' },
	A400: { light: '#8d6e63', dark: '#6a5047' },
	A700: { light: '#5d4037', dark: '#3a2620' },
} as const;

/**
 * rGray - A color palette for gray shades, optimized for both light and dark modes.
 * This constant provides a range of gray shades that are lighter in light mode and darker in dark mode.
 * Each shade is defined with two hex color codes: one for light mode and one for dark mode.
 */
export const rGray = {
	50: { light: '#fafafa', dark: '#d0d0d0' }, // Light Gray to Softer Gray in Dark Mode
	100: { light: '#f5f5f5', dark: '#b5b5b5' },
	200: { light: '#eeeeee', dark: '#9a9a9a' },
	300: { light: '#e0e0e0', dark: '#7f7f7f' },
	400: { light: '#bdbdbd', dark: '#646464' },
	500: { light: '#9e9e9e', dark: '#494949' }, // Standard Gray to Rich Gray in Dark Mode
	600: { light: '#757575', dark: '#2e2e2e' },
	700: { light: '#616161', dark: '#232323' },
	800: { light: '#424242', dark: '#181818' },
	900: { light: '#212121', dark: '#0e0e0e' }, // Dark Gray to Darker Tone in Dark Mode
	A100: { light: '#f5f5f5', dark: '#b5b5b5' },
	A200: { light: '#eeeeee', dark: '#9a9a9a' },
	A400: { light: '#bdbdbd', dark: '#646464' },
	A700: { light: '#616161', dark: '#232323' },
} as const;

/**
 * rBlueGray - A color palette optimized for blue-gray shades in both light and dark modes.
 * This palette offers a range of blue-gray shades, providing a modern and sleek look in light mode,
 * while ensuring a calm and sophisticated appearance in dark mode.
 * The shades vary from light and airy to deep and intense, suitable for various UI elements and contexts,
 * maintaining a balanced and harmonious aesthetic throughout the application.
 */
export const rBlueGray = {
	50: { light: '#eceff1', dark: '#CFD8DC' }, // Light Blue-Gray to Softer Blue-Gray in Dark Mode
	100: { light: '#cfd8dc', dark: '#B0BEC5' },
	200: { light: '#b0bec5', dark: '#90A4AE' },
	300: { light: '#90a4ae', dark: '#78909C' },
	400: { light: '#78909c', dark: '#607D8B' },
	500: { light: '#607d8b', dark: '#546E7A' }, // Standard Blue-Gray to Rich Blue-Gray in Dark Mode
	600: { light: '#546e7a', dark: '#455A64' },
	700: { light: '#455a64', dark: '#37474F' },
	800: { light: '#37474f', dark: '#263238' },
	900: { light: '#263238', dark: '#1B2D35' }, // Dark Blue-Gray to Darker Tone in Dark Mode
	A100: { light: '#cfd8dc', dark: '#B0BEC5' },
	A200: { light: '#b0bec5', dark: '#90A4AE' },
	A400: { light: '#78909c', dark: '#607D8B' },
	A700: { light: '#455a64', dark: '#37474F' },
} as const;

/**
 * rPrimary - A color palette optimized for primary blue shades in both light and dark modes.
 * This palette offers a range of blue shades, providing a classic and clean look in light mode,
 * while ensuring a consistent and harmonious appearance in dark mode.
 * The shades are designed to be visually appealing and accessible in various lighting conditions,
 * making them suitable for a wide range of UI elements and design contexts.
 */
export const rPrimary = {
	50: { light: '#E3F2FD', dark: '#BBDEFB' }, // Light Blue to Slightly Darker Blue in Dark Mode
	100: { light: '#BBDEFB', dark: '#90CAF9' },
	200: { light: '#90CAF9', dark: '#64B5F6' },
	300: { light: '#64B5F6', dark: '#42A5F5' },
	400: { light: '#42A5F5', dark: '#2196F3' },
	500: { light: '#2196F3', dark: '#1E88E5' },
	600: { light: '#1E88E5', dark: '#1976D2' },
	700: { light: '#1976D2', dark: '#1565C0' },
	800: { light: '#1565C0', dark: '#0D47A1' },
	900: { light: '#0D47A1', dark: '#0D47A1' }, // Keeping the same shade for darkest tone
	A100: { light: '#82B1FF', dark: '#448AFF' },
	A200: { light: '#448AFF', dark: '#2979FF' },
	A400: { light: '#2979FF', dark: '#2962FF' },
	A700: { light: '#2962FF', dark: '#2962FF' },
} as const;

/**
 * rError - A color palette optimized for error shades in both light and dark modes.
 * This palette provides a range of red shades, ideal for signaling errors or important warnings in light mode,
 * while in dark mode, the shades are adjusted to be noticeable yet not overly bright.
 * The shades range from light and soft to deep and intense, making them suitable for conveying urgency or caution.
 */
export const rError = {
	50: { light: '#FFEBEE', dark: '#FFCDD2' }, // Light Red to Slightly Darker Red in Dark Mode
	100: { light: '#FFCDD2', dark: '#EF9A9A' },
	200: { light: '#EF9A9A', dark: '#E57373' },
	300: { light: '#E57373', dark: '#EF5350' },
	400: { light: '#EF5350', dark: '#F44336' },
	500: { light: '#F44336', dark: '#E53935' },
	600: { light: '#E53935', dark: '#D32F2F' },
	700: { light: '#D32F2F', dark: '#C62828' },
	800: { light: '#C62828', dark: '#B71C1C' },
	900: { light: '#B71C1C', dark: '#B71C1C' }, // Keeping the same shade for darkest tone
	A100: { light: '#FF8A80', dark: '#FF5252' },
	A200: { light: '#FF5252', dark: '#FF1744' },
	A400: { light: '#FF1744', dark: '#D50000' },
	A700: { light: '#D50000', dark: '#D50000' },
} as const;

/**
 * rWarning - A color palette optimized for warning shades in both light and dark modes.
 * Provides a range of orange and amber shades in light mode to convey caution and alertness,
 * while in dark mode, the shades are adjusted to maintain readability and visual impact.
 * The palette transitions from light and subtle to deep and prominent,
 * ensuring that warning signals are effectively communicated across different UI elements.
 */
export const rWarning = {
	50: { light: '#FFF3E0', dark: '#FFCCBC' }, // Light Warning to Softer Warning in Dark Mode
	100: { light: '#FFE0B2', dark: '#FFAB91' },
	200: { light: '#FFCC80', dark: '#FF8A65' },
	300: { light: '#FFB74D', dark: '#FF7043' },
	400: { light: '#FFA726', dark: '#FF5722' },
	500: { light: '#FF9800', dark: '#F4511E' }, // Standard Warning to Rich Warning in Dark Mode
	600: { light: '#FB8C00', dark: '#E64A19' },
	700: { light: '#F57C00', dark: '#D84315' },
	800: { light: '#EF6C00', dark: '#BF360C' },
	900: { light: '#E65100', dark: '#3E2723' }, // Dark Warning to Darker Tone in Dark Mode
	A100: { light: '#FFD180', dark: '#FFAB40' },
	A200: { light: '#FFAB40', dark: '#FF6E40' },
	A400: { light: '#FF9100', dark: '#FF3D00' },
	A700: { light: '#FF6D00', dark: '#DD2C00' },
} as const;

/**
 * rSuccess - A color palette optimized for success shades in both light and dark modes.
 * Provides a range of green shades in light mode to represent success, achievement, or positive action,
 * while in dark mode, the shades are adjusted to ensure they remain visually impactful and easily distinguishable.
 * The palette varies from light and refreshing to deep and reassuring, suitable for conveying success in various UI contexts.
 */
export const rSuccess = {
	50: { light: '#E8F5E9', dark: '#C8E6C9' },
	100: { light: '#C8E6C9', dark: '#A5D6A7' },
	200: { light: '#A5D6A7', dark: '#81C784' },
	300: { light: '#81C784', dark: '#66BB6A' },
	400: { light: '#66BB6A', dark: '#4CAF50' },
	500: { light: '#4CAF50', dark: '#43A047' },
	600: { light: '#43A047', dark: '#388E3C' },
	700: { light: '#388E3C', dark: '#2E7D32' },
	800: { light: '#2E7D32', dark: '#1B5E20' },
	900: { light: '#1B5E20', dark: '#1B5E20' },
	A100: { light: '#B9F6CA', dark: '#69F0AE' },
	A200: { light: '#69F0AE', dark: '#00E676' },
	A400: { light: '#00E676', dark: '#00C853' },
	A700: { light: '#00C853', dark: '#00C853' },
} as const;

/**
 * rSecondary - A color palette optimized for secondary shades in both light and dark modes.
 * Provides a range of subtle and neutral shades in light mode, ideal for secondary elements or backgrounds,
 * while in dark mode, the shades are fine-tuned to complement the primary colors without overpowering them.
 * This palette is designed to offer a balanced and muted color scheme, enhancing the overall aesthetic of the UI.
 */
export const rSecondary = {
	50: { light: '#ECEFF1', dark: '#CFD8DC' },
	100: { light: '#CFD8DC', dark: '#B0BEC5' },
	200: { light: '#B0BEC5', dark: '#90A4AE' },
	300: { light: '#90A4AE', dark: '#78909C' },
	400: { light: '#78909C', dark: '#607D8B' },
	500: { light: '#607D8B', dark: '#546E7A' },
	600: { light: '#546E7A', dark: '#455A64' },
	700: { light: '#455A64', dark: '#37474F' },
	800: { light: '#37474F', dark: '#263238' },
	900: { light: '#263238', dark: '#263238' },
	A100: { light: '#B0BEC5', dark: '#78909C' },
	A200: { light: '#90A4AE', dark: '#607D8B' },
	A400: { light: '#78909C', dark: '#546E7A' },
	A700: { light: '#455A64', dark: '#37474F' },
} as const;

export const rBackGroundColor = {};

export const rBorderColor = {};

export const transparent = 'transparent' as const;

const COLOR_PALLETS = {
	rWhite,
	rBlack,
	rRed,
	rBlue,
	rCyan,
	rGray,
	rLime,
	rPink,
	rTeal,
	rAmber,
	rBrown,
	rGreen,
	rIndigo,
	rOrange,
	rPurple,
	rYellow,
	rBlueGray,
	rLightBlue,
	rDeepOrange,
	rDeepPurple,
	rLightGreen,
	rBackGround: rBackGroundColor,
	rBorderColor,
	transparent,
} as const;

export default COLOR_PALLETS;
