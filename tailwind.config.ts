import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      colors: {
        border: "#e5e7eb",
        input: "#e5e7eb",
        ring: "#4f46e5",
        background: "#ffffff",
        foreground: "#111827",
        primary: {
          DEFAULT: "#4f46e5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f3f4f6",
          foreground: "#1f2937",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f9fafb",
          foreground: "#6b7280",
        },
        accent: {
          DEFAULT: "#d1d5db",
          foreground: "#111827",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        rose: {
          50: "#fdf2f8",
          300: "#fda4af",
          400: "#fb7185",
        },
        purple: {
          200: "#e9d5ff",
        },
        emerald: {
          200: "#a7f3d0",
        },
        slate: {
          600: "#475569",
          800: "#1e293b",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

// // import type { Config } from "tailwindcss";
// // import defaultConfig from "shadcn/ui/tailwind.config";

// // const config: Config = {
// //   ...defaultConfig,
// //   content: [
// //     ...defaultConfig.content,
// //     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./components/**/*.{js,ts,jsx,tsx,mdx}",
// //     "./app/**/*.{js,ts,jsx,tsx,mdx}",
// //     "*.{js,ts,jsx,tsx,mdx}",
// //   ],
// //   theme: {
// //     ...defaultConfig.theme,
// //     extend: {
// //       ...defaultConfig.theme.extend,
// //       colors: {
// //         ...defaultConfig.theme.extend.colors,
// //         rose: {
// //           50: "#fdf2f8",
// //           300: "#fda4af",
// //           400: "#fb7185",
// //         },
// //         purple: {
// //           200: "#e9d5ff",
// //         },
// //         emerald: {
// //           200: "#a7f3d0",
// //         },
// //         slate: {
// //           600: "#475569",
// //           800: "#1e293b",
// //         },
// //       },
// //       fontFamily: {
// //         playfair: ["var(--font-playfair)"],
// //         inter: ["var(--font-inter)"],
// //       },
// //       borderRadius: {
// //         lg: "var(--radius)",
// //         md: "calc(var(--radius) - 2px)",
// //         sm: "calc(var(--radius) - 4px)",
// //       },
// //     },
// //   },
// //   plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
// // };

// // export default config;
// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./app/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./pages/**/*.{ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       fontFamily: {
//         inter: ["var(--font-inter)"],
//         playfair: ["var(--font-playfair)"],
//       },
//       colors: {
//     border: "hsl(var(--border))",
//     input: "hsl(var(--input))",
//     ring: "hsl(var(--ring))",
//     background: "hsl(var(--background))",
//     foreground: "hsl(var(--foreground))",
//     rose: {
//       50: "#fdf2f8",
//       300: "#fda4af",
//       400: "#fb7185",
//     },
//     purple: {
//       200: "#e9d5ff",
//     },
//     emerald: {
//       200: "#a7f3d0",
//     },
//     slate: {
//       600: "#475569",
//       800: "#1e293b",
//     },
//   },
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };

// export default config;
