import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm-0': { min: '450px' },
      'sm-1': { min: '600px' },
      'sm-2': { min: '730px' },
      'md-0': { min: '1040px' },
      'md-0.1': { min: '1120px' },
      'md-1': { min: '1440px' },
    },
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
        'grey-5XX': '#464646',
        'orange-1XX': '#FFE3B3',
      },
    },
  },
  plugins: [],
}
export default config
