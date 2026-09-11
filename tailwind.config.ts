import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { paper: '#F5F2EB', ink: '#171717', line: '#D8D2C7', exoraBlue: '#1E80D8' } } },
  plugins: [],
}
export default config
