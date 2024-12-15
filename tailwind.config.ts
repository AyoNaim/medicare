import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
		backgroundImage: {
			'bg-img-1': "url('/img1.jpg')",
			'bg-img-2': "url('/img2.jpg')",
			'bg-img-3': "url('/img3.jpg')",
			'bg-img-4': "url('/img4.jpg')",
			'bg-img-5': "url('/img5.jpg')",
			'bg-img-6': "url('/img6.jpg')",
			'bg-img-7': "url('/img7.jpg')",
			'bg-img-8': "url('/img8.jpg')",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
