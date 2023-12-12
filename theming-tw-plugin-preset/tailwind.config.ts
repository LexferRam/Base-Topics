import { shadcnPreset } from './src/lib/shadcn-preset'
// import type { Config } from 'tailwindcss'


const config = {
  presets: [shadcnPreset], // permite empaquetar y reusar funcionalidades que traigamos al config, pero en lugar de solo traer el plugin te permite traer la configuracion y hacerle merge con la configuracion existente.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ]
}

export default config
