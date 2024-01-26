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
        createTask: '1px 1px 3px 0px rgba(0,0,0,0.25)',
      },
      colors: {
        'grey-1XX': '#D9D9D9',
        'grey-2XX': '#9A9A9A',
        'grey-3XX': '#F0F2F5',
        'grey-4XX': '#50656E',
      },
    },
  },
  plugins: [],
}
export default config
