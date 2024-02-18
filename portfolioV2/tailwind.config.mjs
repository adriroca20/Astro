/** @type {import('tailwindcss').Config} */
import animated from "@adrian_rocafull/tailwind-animations"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:"class",
	theme: {
		extend: {},
	},
	plugins: [animated],
}
