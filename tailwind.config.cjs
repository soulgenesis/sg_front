module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#2C2C2C",
        "gray": "#3E3E3E",
        "gray-light": "#B1B3BB",
        "mint": "#44CB9B",
        "red": "#E1424B",
      },
      fontFamily: {
        'vertigo': 'vertigo',
        'brygada': ['"Brygada 1918"', 'serif'],
      },
      backgroundImage: {
        'sky': "url('/img/bg/desktop-bg-1.jpg')",
        'sky-pink': "url('/img/bg/desktop-bg-2.jpg')",
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '2.5%': { transform: 'scale(1.06)' },
          '5%': { transform: 'scale(1)' },
          '7.5%': { transform: 'scale(1.06)' },
          '10%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        heartbeat: "heartbeat 6s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
