
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
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // Flora custom colors
        flora: {
          gold: '#D4B98C',
          charcoal: '#222222',
          cream: '#F8F4EC',
          wood: '#8B6E4E',
          black: '#1A1A1A',
          lightgold: '#E5D4B3',
          darkwood: '#634E38',
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'image-reveal': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8) rotateX(45deg)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(0.9) rotateX(22deg)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) rotateX(0deg)'
          }
        },
        'slide-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'table-glow': {
          '0%': {
            box-shadow: '0 0 5px rgba(212, 185, 140, 0.3)'
          },
          '50%': {
            box-shadow: '0 0 20px rgba(212, 185, 140, 0.6)'
          },
          '100%': {
            box-shadow: '0 0 5px rgba(212, 185, 140, 0.3)'
          }
        },
        'input-glow': {
          '0%': {
            box-shadow: '0 0 0 0 rgba(212, 185, 140, 0.4)'
          },
          '70%': {
            box-shadow: '0 0 0 10px rgba(212, 185, 140, 0)'
          },
          '100%': {
            box-shadow: '0 0 0 0 rgba(212, 185, 140, 0)'
          }
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(-5px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        // New advanced animations
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px) rotateX(45deg) scale(0.6)'
          },
          '70%': {
            opacity: '0.8',
            transform: 'translateX(10px) rotateX(-5deg) scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotateX(0deg) scale(1)'
          }
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px) rotateX(-45deg) scale(0.6)'
          },
          '70%': {
            opacity: '0.8',
            transform: 'translateX(-10px) rotateX(5deg) scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotateX(0deg) scale(1)'
          }
        },
        'stack-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-200px) rotateY(45deg) scale(0.7)'
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateX(-20px) rotateY(15deg) scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotateY(0deg) scale(1)'
          }
        },
        'stack-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(200px) rotateY(-45deg) scale(0.7)'
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateX(20px) rotateY(-15deg) scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotateY(0deg) scale(1)'
          }
        },
        'stack-center': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px) scale(0.8)'
          },
          '60%': {
            opacity: '0.8',
            transform: 'translateY(10px) scale(1.05)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        },
        'reveal-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-150px) rotateY(90deg) scale(0.5)'
          },
          '60%': {
            opacity: '0.9',
            transform: 'translateX(15px) rotateY(-10deg) scale(1.1)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotateY(0deg) scale(1)'
          }
        },
        'reveal-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(150px) rotateY(-90deg) scale(0.5)'
          },
          '60%': {
            opacity: '0.9',
            transform: 'translateX(-15px) rotateY(10deg) scale(1.1)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) rotateY(0deg) scale(1)'
          }
        },
        'float-dynamic': {
          '0%, 100%': {
            transform: 'translateY(0px) rotateZ(0deg)'
          },
          '25%': {
            transform: 'translateY(-15px) rotateZ(1deg)'
          },
          '50%': {
            transform: 'translateY(-8px) rotateZ(0deg)'
          },
          '75%': {
            transform: 'translateY(-20px) rotateZ(-1deg)'
          }
        },
        'float-reverse': {
          '0%, 100%': {
            transform: 'translateY(0px) rotateZ(0deg)'
          },
          '33%': {
            transform: 'translateY(12px) rotateZ(-1deg)'
          },
          '66%': {
            transform: 'translateY(-5px) rotateZ(1deg)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 185, 140, 0.3)',
            transform: 'scale(1)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(212, 185, 140, 0.6)',
            transform: 'scale(1.02)'
          }
        },
        'pulse-glow-intense': {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(212, 185, 140, 0.5)',
            filter: 'brightness(1)'
          },
          '50%': {
            boxShadow: '0 0 60px rgba(212, 185, 140, 0.8)',
            filter: 'brightness(1.1)'
          }
        },
        'matrix-reveal': {
          '0%': {
            opacity: '0',
            transform: 'matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 50, 0, 1)'
          },
          '50%': {
            opacity: '0.8',
            transform: 'matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, -10, 0, 1)'
          },
          '100%': {
            opacity: '1',
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
          }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
        'scale-up': 'scale-up 0.5s ease-out forwards',
        'image-reveal': 'image-reveal 1s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.8s ease-out forwards',
        'table-glow': 'table-glow 2s ease-in-out infinite',
        'input-glow': 'input-glow 0.6s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        // New advanced animations
        'slide-in-left': 'slide-in-left 1.2s ease-out forwards',
        'slide-in-right': 'slide-in-right 1.2s ease-out forwards',
        'stack-left': 'stack-left 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'stack-right': 'stack-right 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'stack-center': 'stack-center 1.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'reveal-left': 'reveal-left 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'reveal-right': 'reveal-right 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'float-dynamic': 'float-dynamic 4s ease-in-out infinite',
        'float-reverse': 'float-reverse 3.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-glow-intense': 'pulse-glow-intense 2s ease-in-out infinite',
        'matrix-reveal': 'matrix-reveal 2s ease-out forwards'
			},
      scale: {
        '102': '1.02',
        '105': '1.05'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
