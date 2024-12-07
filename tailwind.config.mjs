/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		"./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
	],
	plugins: [
		require('flowbite/plugin'),
	],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					'50': '#f2f6fc',
					'100': '#e1ebf8',
					'200': '#cbdcf2',
					'300': '#a7c5e9',
					'400': '#7ca7de',
					'500': '#5e89d3',
					'600': '#4a70c6',
					'700': '#3e5bb1',
					'800': '#394d94',
					'900': '#324376',
					'950': '#222b49',
				},

			},
		},
	}
}
