/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
   
      sidebar:"601px",
    
      sm:"640px",
      md: "768px",
      lmd:"950px",
      lg: "1024px",
   
      xl: "1280px",
    

      "2xl": "1536px",
      hideNav: '951px',
     modal:{min:"1px", max:"500px"},
      dashboardNav:{min:"1px" , max:"950px"}
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
