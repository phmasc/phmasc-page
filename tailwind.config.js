/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ph-bg': '#0A0A1A',
        'ph-surface': '#12122A',
        'ph-surface-hover': '#1A1A3A',
        'ph-blue': '#0099FF',
        'ph-purple': '#7B2FF7',
        'ph-magenta': '#E5007F',
        'ph-text': '#FFFFFF',
        'ph-muted': '#B0B0C8',
        'ph-border': '#22224A',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(0,153,255,0.15) 0%, rgba(123,47,247,0.15) 50%, rgba(229,0,127,0.15) 100%)',
        'btn-gradient': 'linear-gradient(135deg, #0099FF 0%, #7B2FF7 50%, #E5007F 100%)',
        'logo-gradient': 'linear-gradient(135deg, #E5007F 0%, #7B2FF7 50%, #0099FF 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(0, 153, 255, 0.35)',
        'glow-accent': '0 0 25px rgba(229, 0, 127, 0.35)',
      }
    },
  },
  plugins: [],
};
