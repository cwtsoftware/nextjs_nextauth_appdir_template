/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'navBar':'#F8F5F1',
        'nav-blur':'#C2C0BC',
        'nav-focus':'#636363',
        'selectedNav':'#0CFFF0',
        'hoverNav':'#d757de',
        'ordinalNumber':'#E1EFFF',
        'navBarFocus':'#DB3C3C',
        'navBarHover':'#69f364',
        'indexResults':'#272D30'
      },
      height: {
        '168px': '168px',
        '278px': '278px',
        '410px': '410px',
      },
      width: {
        '184px': '184px',
        '109px': '109px',
      },
      maxWidth: {
        '300px': '300px',
        '250px': '250px',
      },
      backgroundImage: {
        'tools-sepparator': "linear-gradient(90deg, #F8F5F1 10%, #C2C0BC 10%, #C2C0BC 90%, #F8F5F1 90%)",
        'tools-sepparator-mobile': "linear-gradient(90deg, #F8F5F1 5%, #C2C0BC 5%, #C2C0BC 95%, #F8F5F1 95%)",
        'buy-credits-button': "linear-gradient(90deg, rgba(242,204,103,1) 0%, rgba(243,130,100,1) 100%)",
      },
      borderWidth: {
        '12px': '12px',
      },
      minWidth: {
        '1/2': '50%',
        '1/3': '33%',
        '2/3': '66%',
      },
      minHeight: {
        '80px': '80px',
      },
      gridTemplateColumns: {
        'mainbody': '89px 1fr',
      },
      gridTemplateRows: {
        'index-layout': 'auto 1fr auto',
      },
      boxShadow: {
        'costum-sm': '2px 2px 6px 0px rgba(0,0,0,0.75)',
        'costum-md': '4px 4px 6px 0px rgba(0,0,0,0.75)',
        'costum-lg': '8px 8px 6px 0px rgba(0,0,0,0.75)',
      },
      padding: {
        '27px':'27px'
      }
    },
  },
  plugins: [],
}
