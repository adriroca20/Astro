/** @type {import('tailwindcss').Config} */
import animated from "@adrian_rocafull/tailwind-animations"
import flowbite from "flowbite/plugin"
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
	darkMode:"class",
	theme: {
		extend: {},
	},
	plugins: [animated, flowbite],
}
