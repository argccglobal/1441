/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", // <--- Add this line
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "834px",
      md: "1044px",
      lg: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        lg: "55px",
      },
    },
    extend: {
      spacing: {
        "section-y-padding": "5rem", // 80px //
        "hero-title-b-margin": "4rem", // 64px //
        "subtitle-b-margin": "2rem", // 32px //
        "para-space": "1.75rem", // 28px //
        "card-x-space": "2rem", // 32px
        "card-x-sm-space": "3rem", // 16px
        "card-inside-padding": "2rem", // 32px
        "card-y-margin": "3rem", // 48px
        "card-title-b-margin": "1.25rem", // 20px //
        "section-heading-b-margin": "3rem", // 48px //
        "card-inside-padding": "2rem", // 32px
        "card-title-b-margin": "1.25rem", // 20px //
        "blog-image-b-margin": "2rem", // 32px

        "section-footer-link-space": "3rem", // 48px //
        "page-banner-y-padding": "7rem", // 80px //
        "line-space": "1.75rem", // 28px //
        "blog-column-negative-margin": "2rem", // 32px

        "tow-column-x-space": "2rem", // 32px
        "blog-column-negative-margin": "4rem", // 64px //
        "blog-list-b-margin": "2rem", // 32px
      },
      colors: {
        strategy: {
          50: "#EDFFFD",
          100: "#C2FFFA",
          200: "#85FFF7",
          300: "#40FFF3",
          400: "#09F8E7",
          500: "#00DBCE",
          600: "#00B1AA",
          700: "#008C89",
          800: "#006F6D",
          900: "#065B5A",
          950: "#003638",
        },
        coaching: {
          50: "#F3F2FF",
          100: "#E8E8FF",
          200: "#D5D4FF ",
          300: "#B6B2FF ",
          400: "#887BFF ",
          500: "#6E55FD ",
          600: "#5C32F5 ",
          700: "#5C32F5 ",
          800: "#411ABD ",
          900: "#37189A ",
          950: "#1F0C69",
        },
        productLicensing: {
          50: "#EDFEFD",
          100: "#D2FBFB",
          200: "#ABF6F6",
          300: "#88F1F2",
          400: "#2FDCE1",
          500: "#13BFC7",
          600: "#139AA7",
          700: "#177B87",
          800: "#1B646F",
          900: "#1B535E",
          950: "#0C3740",
        },
        hexCode: {
          50: "#FCF5FF",
          100: "#F8E7FF",
          200: "#F1D3FF",
          300: "#E7B1FF ",
          400: "#BE38F3 ",
          500: "#CA4EFE ",
          600: "#A31AD6  ",
          700: "#900fbc",
          800: "#881BAE",
          900: "#6F178C",
          950: "#4E0368",
        },
        success: {
          50: "#eeffef",
          100: "#d7ffdb",
          200: "#b2ffba",
          300: "#76ff85",
          400: "#33f54a",
          500: "#09de23",
          600: "#00c318",
          700: "#049116",
          800: "#0a7118",
          900: "#0a5d17",
          950: "#003408",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee6e5",
          200: "#fccfcf",
          300: "#f9a8a8",
          400: "#f57779",
          500: "#ec474f",
          600: "#dc3545",
          700: "#b7192c",
          800: "#99182c",
          900: "#83182c",
          950: "#490812",
        },
        warning: {
          50: "#ffffea",
          100: "#fffbc5",
          200: "#fff885",
          300: "#ffee46",
          400: "#ffdf1b",
          500: "#ffc107",
          600: "#e29400",
          700: "#bb6902",
          800: "#985108",
          900: "#7c420b",
          950: "#482200",
        },
        primary: "#2FDCE1",
        successPrimary: "#1ACD7E",
        dangerPrimary: "#DC3545",
        warningPrimary: "#FFC107",
        neutralDark: "#363636",
        placeholder: "#ACABAC",

        properties: "#88F1F2",
        propertiesMain: "#139AA7",

        team: "#00CFE6",
        services: "#A082FF",
        contact: "#7F69FF",
        // neutralDark: "#637381",
        neutral: "#606060",
        neutralLight: "#ACABAC",
        background: "#F5F5F5",
        border: "#D1D1D1",
      },
      fontSize: {
        exl: "80px",
        highlight: "48px",
        highlight_3: "32px",
        h1: "60px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "18px",
        body_1: "16px",
        body_2: "14px",
        body_3: "12px",
        body_4: "10px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        width: "width",
      },
    },
  },
  plugins: [],
};
