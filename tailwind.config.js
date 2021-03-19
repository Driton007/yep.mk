module.exports = {
  purge: ["./src/**/*.njk", "./src/**/*.svg", "./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      fontFamily: {
        'sans': 'Archivo, -apple-system, BlinkMacSystemFont',
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'primary':'#372b7d'
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      gridGutterWidth: "32px",
      containerMaxWidths: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
