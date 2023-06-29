/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// colors:{
			// 	frz:'#45d65f'
			// }
			fontFamily: {
				body: ['Nunito'],
				bigelow: ['Bigelow Rules'],
			},
		},
	},
	plugins: [],
};
