import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        header: '0px 1px 7px 0px rgba(149,149,149,0.25)',
      },
      colors: {
        'grey-1XX': '#D9D9D9',
        'grey-2XX': '#9A9A9A',
      },
    },
  },
  plugins: [],
}
export default config
