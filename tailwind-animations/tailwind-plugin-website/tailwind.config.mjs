/** @type {import('tailwindcss').Config} */
import animations from "../tailwind-animations-plugin/src/index.js"
import theme from "../tailwind-animations-plugin/src/theme.js";

const { animation } = theme;
const safelist = Object.keys(animation).map((key)=>{
	return `animate-${key}`
})
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [animations],
	safelist
}
