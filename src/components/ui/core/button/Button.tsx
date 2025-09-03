import { twMerge } from "tailwind-merge";

const VARIANTS = {
	primary: `
    transition-all
    bg-white/5 border border-white/50
    shadow-[0_2px_8px_2px_rgba(255,255,255,0.3)_inset]
    text-white
    hover:bg-white/15
    hover:border-white/70
    hover:shadow-[-2px_2px_8px_-2px_rgba(255,255,255,0.8)_inset]
    focus-visible:outline-2
    focus-visible:outline-white
    active:bg-white/20
    active:shadow-[0_2px_8px_2px_rgba(255,255,255,0.6)_inset]
    active:border-white
  `,
	secondary: "bg-gray-500 text-white hover:bg-gray-600",
	tertiary: "bg-transparent text-blue-500 hover:bg-blue-100",
};

export default function Button({
	children,
	variant,
	label,
}: {
	children?: React.ReactNode;
	variant: "primary" | "secondary" | "tertiary";
	label?: string;
}) {
	const theme = {
		root: {
			class: twMerge(
				`
          before:content-[''] before:bg-black/80
          before:left-0 before:top-0 before:z-[-1]
          before:w-full before:h-full before:absolute
        `,
				"px-4 py-2 rounded-full font-semibold overflow-hidden cursor-pointer relative",
				VARIANTS[variant],
			),
		},
	};

	return (
		<button type="button" className={theme.root.class}>
			{label ? label : children}
		</button>
	);
}
