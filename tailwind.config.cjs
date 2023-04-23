/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                primary: '#02A54F',
                antracite: '#262626'
            },
            screens: {
                '3xl': '1920px',
            }
        },
        fontFamily: {
            body: ['Work Sans'],
            heading: ['Poppins'],
            native: ["Native"]
        },
        container: {
            center: true,
            screens: {
              sm: '600px',
              md: '728px',
              lg: '984px',
              xl: '1096px',
              '2xl': '1536px'
            },
          },
	},
	plugins: [],
}
