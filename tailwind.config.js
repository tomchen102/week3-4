/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.ejs",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Noto Sans TC", "sans-serif"],
    },
    container: {
      center: true, // 将容器居中
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      backgroundImage: {
        "sm-banner":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header-sm.png?raw=true')",
        banner:
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-header.png?raw=true')",
        "sm-glasses":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg-sm.png?raw=true')",
        glasses:
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/index-bg.png?raw=true')",
        "sm-product-left":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-1.png?raw=true')",
        "product-left":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-1.png?raw=true')",
        "sm-product-right":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-2.png?raw=true')",
        "product-right":
          "url('https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-2.png?raw=true')",
      },
      colors: {
        primary: "#AA0601",
        secondary: "#FBF2F2",
        "primary-dark": "#650300",
        "glasses-dark-brown": "#5F3E2D",
        "glasses-brown": "#B75929",
      },
    },
  },
};
