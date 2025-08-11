// made by AI
const EmptyWishlistSVG = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="200"
        height="160"
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-26 md:w-40 md:h-32"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="wishlistGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Background decorative circles */}
        <circle cx="30" cy="30" r="4" fill="#d1d5db" opacity="0.6" />
        <circle cx="170" cy="40" r="6" fill="#fbbf24" opacity="0.7" />
        <circle cx="180" cy="130" r="5" fill="#f97316" opacity="0.6" />

        {/* Decorative zigzag lines */}
        <path
          d="M20 80 L25 75 L30 80 L35 75 L40 80"
          stroke="#fbbf24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        <path
          d="M160 100 L165 95 L170 100 L175 95 L180 100"
          stroke="#f97316"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Main document/list */}
        <rect
          x="60"
          y="45"
          width="80"
          height="100"
          rx="8"
          ry="8"
          fill="#f9fafb"
          stroke="#d1d5db"
          strokeWidth="2"
        />

        {/* Document shadow */}
        <rect
          x="65"
          y="50"
          width="80"
          height="100"
          rx="8"
          ry="8"
          fill="#f3f4f6"
          opacity="0.5"
        />

        {/* Heart icon on document */}
        <path
          d="M120 25 C115 20, 105 20, 100 30 C95 20, 85 20, 80 25 C75 30, 75 40, 100 55 C125 40, 125 30, 120 25 Z"
          fill="url(#heartGradient)"
        />

        {/* X marks on the list */}
        <g stroke="url(#wishlistGradient)" strokeWidth="3" strokeLinecap="round">
          {/* First X */}
          <line x1="75" y1="70" x2="85" y2="80" />
          <line x1="85" y1="70" x2="75" y2="80" />
          
          {/* Second X */}
          <line x1="95" y1="70" x2="105" y2="80" />
          <line x1="105" y1="70" x2="95" y2="80" />
        </g>

        {/* Sad face on document */}
        <circle cx="90" cy="100" r="2" fill="url(#wishlistGradient)" />
        <circle cx="110" cy="100" r="2" fill="url(#wishlistGradient)" />
        <path
          d="M85 115 Q100 105 115 115"
          stroke="url(#wishlistGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* List lines */}
        <line x1="75" y1="125" x2="95" y2="125" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />
        <line x1="75" y1="135" x2="110" y2="135" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" />

        {/* Decorative stars */}
        <polygon
          points="25,120 27,125 32,125 28,129 30,134 25,131 20,134 22,129 18,125 23,125"
          fill="#fbbf24"
        />
        
        <polygon
          points="155,65 157,70 162,70 158,74 160,79 155,76 150,79 152,74 148,70 153,70"
          fill="#f97316"
        />

        {/* Small decorative elements */}
        <circle cx="165" cy="25" r="2" fill="#d1d5db" />
        <circle cx="45" cy="140" r="3" fill="#fbbf24" opacity="0.7" />
      </svg>
    </div>
  );
};

export default EmptyWishlistSVG;