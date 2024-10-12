import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		'lawn-green': '#7af42a',
  		turquoise: '#2ae8c4',
  		gunmetal: '#050505',
  		'french-gray': '#abb2bf',
  		white: '#ffffff',
  		transparent: 'transparent'
  	},
  	extend: {
  		fontFamily: {
  			incompleeta: ['Incompleeta', 'sans-serif']
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
		transitionDelay: {
        '1100': '1100ms',
        '1200': '1200ms',
        // Puedes seguir añadiendo más valores si es necesario
      	},
		colors: {
		border: "hsl(var(--border))",
		input: "hsl(var(--input))",
		ring: "hsl(var(--ring))",
		background: "hsl(var(--background))",
		foreground: "hsl(var(--foreground))",
		primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		},
		secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		},
		destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		},
		muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		},
		accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		},
		popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		},
		card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		},
		},
		borderRadius: {
		lg: "var(--radius)",
		md: "calc(var(--radius) - 2px)",
		sm: "calc(var(--radius) - 4px)",
		},
		animation: {
		"accordion-down": "accordion-down 0.2s ease-out",
		"accordion-up": "accordion-up 0.2s ease-out",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
