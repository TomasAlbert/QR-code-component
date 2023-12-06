/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},

		colors: {
			White: "hsl(0, 0%, 100%)",
			LightGray: "hsl(212, 45%, 89%)",
			GrayishBlue: "hsl(220, 15%, 55%)",
			DarkBlue: "hsl(218, 44%, 22%)",
		},
		fontFamily: {
			outfit: ["Outfit", "sans-serif"],
		},
	},
	plugins: [],
};
