/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#FF6A3D", // Naranja Energía
                    glow: "rgba(255, 106, 61, 0.4)",
                },
                secondary: {
                    DEFAULT: "#7B3FE4", // Morado Innovación
                    glow: "rgba(123, 63, 228, 0.4)",
                },
                navy: {
                    DEFAULT: "#1F2A44", // Azul Marino Autoridad
                    light: "#2D3B5A",
                },
                accent: {
                    yellow: "#FFC247", // Amarillo Cálido
                },
                gray: {
                    dark: "#4A4A4A",
                    light: "#F5F5F7",
                    custom: "#94A3B8",
                },
                dark: "#171717",
            },
            fontFamily: {
                sans: ["var(--font-outfit)", "sans-serif"],
                heading: ["var(--font-outfit)", "sans-serif"],
            },
            animation: {
                "fade-up": "fadeUp 0.6s ease-out forwards",
                "fade-in": "fadeIn 0.8s ease-out forwards",
                float: "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                glow: {
                    "0%": { boxShadow: "0 0 5px rgba(250,204,21,0.2), 0 0 10px rgba(250,204,21,0.2)" },
                    "100%": { boxShadow: "0 0 20px rgba(250,204,21,0.6), 0 0 40px rgba(250,204,21,0.4)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
