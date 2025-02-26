export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        fontFamily: {
         'pt-sans': ['PT Sans', 'sans-serif']
        },
        colors: {
            'purple': '#3D348B',
            'blue': '#5DB7DE',
        }
      }
    },
    plugins: []
  }