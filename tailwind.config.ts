
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				// Custom crypto theme colors
				'crypto-green': {
					100: '#e8f5e9',
					200: '#c8e6c9',
					300: '#a5d6a7',
					400: '#81c784',
					500: '#4caf50',
					600: '#43a047',
					700: '#388e3c',
					800: '#2e7d32',
					900: '#1b5e20',
				},
				'crypto-gold': {
					100: '#fff9c4',
					200: '#fff59d',
					300: '#fff176',
					400: '#ffee58',
					500: '#ffeb3b',
					600: '#fdd835',
					700: '#fbc02d',
					800: '#f9a825',
					900: '#f57f17',
				},
				'crypto-gray': {
					100: '#f5f5f5',
					200: '#eeeeee',
					300: '#e0e0e0',
					400: '#bdbdbd',
					500: '#9e9e9e',
					600: '#757575',
					700: '#616161',
					800: '#424242',
					900: '#212121',
				},
				'crypto-red': {
					100: '#ffebee',
					200: '#ffcdd2',
					300: '#ef9a9a',
					400: '#e57373',
					500: '#f44336',
					600: '#e53935',
					700: '#d32f2f',
					800: '#c62828',
					900: '#b71c1c',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-green': {
					'0%, 100%': { backgroundColor: 'rgba(76, 175, 80, 0)' },
					'50%': { backgroundColor: 'rgba(76, 175, 80, 0.2)' }
				},
				'pulse-red': {
					'0%, 100%': { backgroundColor: 'rgba(244, 67, 54, 0)' },
					'50%': { backgroundColor: 'rgba(244, 67, 54, 0.2)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-green': 'pulse-green 2s infinite',
				'pulse-red': 'pulse-red 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
