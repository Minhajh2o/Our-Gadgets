// made by AI
const EmptyCartSVG = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 md:w-32 md:h-32"
      >
        {/* Define gradient */}
        <defs>
          <linearGradient id="cartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" /> {/* purple-700 */}
            <stop offset="100%" stopColor="#c026d3" /> {/* fuchsia-600 */}
          </linearGradient>
        </defs>

        {/* Shopping cart body */}
        <path
          d="M20 25 L25 25 L35 75 L85 75 L95 45 L30 45"
          stroke="url(#cartGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cart handle */}
        <path
          d="M35 75 L35 85 L85 85 L85 75"
          stroke="url(#cartGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left wheel */}
        <circle
          cx="45"
          cy="95"
          r="6"
          stroke="url(#cartGradient)"
          strokeWidth="4"
          fill="none"
        />

        {/* Right wheel */}
        <circle
          cx="75"
          cy="95"
          r="6"
          stroke="url(#cartGradient)"
          strokeWidth="4"
          fill="none"
        />

        {/* Percentage symbol in cart */}
        <circle
          cx="60"
          cy="60"
          r="12"
          stroke="url(#cartGradient)"
          strokeWidth="3"
          fill="none"
        />

        {/* Percentage % symbol */}
        <circle cx="56" cy="56" r="2" fill="url(#cartGradient)" />
        <circle cx="64" cy="64" r="2" fill="url(#cartGradient)" />
        <line
          x1="56"
          y1="66"
          x2="64"
          y2="54"
          stroke="url(#cartGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default EmptyCartSVG;
