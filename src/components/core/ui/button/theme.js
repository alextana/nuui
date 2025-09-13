export default {
	base: {
		root: `
				relative
				flex items-center gap-1
				rounded-full
				px-4 py-2
				font-regular
				cursor-pointer
			`,
		variants: {
			primary: `
				focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-pink-600
				focus-visible:outline-offset-2
				active:outline
				active:outline-3
				active:outline-pink-500
				active:outline-offset-4
				after:content-['']
				text-shadow-xs
				before:content-['']
				backdrop-blur-md
				bg-gradient-to-r
				from-indigo-600
				to-pink-600
				style-[background:linear-gradient(var(--gradient-angle,45deg),theme(colors.indigo.600),theme(colors.pink.600))]
				after:absolute
				after:inset-0
				before:absolute
				before:inset-0
				text-white
				before:z-[2]
				after:rounded-full
				before:rounded-full
				after:pointer-events-none
			`,
			secondary: `
				focus-visible:outline
        focus-visible:outline-3
        focus-visible:outline-white
				focus-visible:outline-offset-2
				shadow-[inset_var(--shadow-x,0px)_var(--shadow-y,-2px)_8px_1px_rgba(255,_255,_255,_0.2),0_2px_8px_rgba(0,0,0,0.1)]
				active:shadow-[inset_0px_2px_8px_2px_rgba(255,_255,_255,_0.2)]
				active:outline
				active:outline-2
				active:outline-white
				active:outline-offset-4
				after:content-['']
				text-shadow-xs
				before:content-['']
				backdrop-blur-md
				bg-gradient-to-r
				from-black/60
				to-black/30
				style-[background:linear-gradient(var(--gradient-angle,45deg),theme(colors.black/60),theme(colors.black/30))]
				after:absolute
				after:inset-0
				before:absolute
				before:inset-0
				text-white
				before:z-[2]
				after:rounded-full
				before:rounded-full
				after:pointer-events-none
			`,
			tertiary: {},
		},
		icon: `
			text-2xl
		`,
	},
}
