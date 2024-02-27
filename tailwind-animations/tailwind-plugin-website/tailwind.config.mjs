/** @type {import('tailwindcss').Config} */
import animations from "@adrian_rocafull/tailwind-animations"
import theme from "./src/plugin-theme/theme.js";

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
