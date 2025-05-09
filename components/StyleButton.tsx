// Define color maps at the top
const textColorMap: Record<string, string> = {
  indigo: "text-indigo-400",
  pink: "text-pink-400",
  fuchsia: "text-fuchsia-400",
  violet: "text-violet-400",
};

const fullColorMap: Record<string, string> = {
  fillIndigo: "fill-indigo-400",
  fillPink: "fill-pink-400",
  fillFuchsia: "fill-fuchsia-400",
  fillViolet: "fill-violet-400",
};

// Component below
export default function StyleButton({
  title,
  bgColor,
  bgBorderColor,
  svgTextColor,
  svgFullColor,
}: {
  title: string;
  bgColor: string;
  bgBorderColor: string;
  svgTextColor: keyof typeof textColorMap;
  svgFullColor: keyof typeof fullColorMap;
}) {
  return (
    <div className="w-full pb-3 flex justify-center">
      <div
        className={`flex py-1 px-3 ${bgColor} text-indigo-100 border ${bgBorderColor} items-center gap-1 rounded-full text-sm`}
      >
        <svg
          className={`lucide lucide-star w-4 h-4 ${textColorMap[svgTextColor]} ${fullColorMap[svgFullColor]}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
        <span className="dark:text-white text-black/70">{title}</span>
      </div>
    </div>
  );
}
