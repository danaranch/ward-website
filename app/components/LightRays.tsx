type LightRaysProps = {
  color: string;
};

export default function LightRays({ color }: LightRaysProps) {
  return (
    <svg
      id="lightRays"
      height="100%"
      viewBox="0 0 34 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="0%" y1="50%" y2="50%" id="a">
          <stop
            stopColor={`var(--theme-page-header-nav-bg, ${color})`}
            stopOpacity=".6"
            offset="0%"
          >
          </stop>
          <stop
            stopColor={`var(--theme-page-header-nav-bg, ${color})`}
            stopOpacity=".25"
            offset="100%"
          >
          </stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" y2="50%" id="b">
          <stop
            stopColor={`var(--theme-page-header-nav-bg, ${color})`}
            stopOpacity=".35"
            offset="0%"
          >
          </stop>
          <stop
            stopColor={`var(--theme-page-header-nav-bg, ${color})`}
            stopOpacity=".15"
            offset="100%"
          >
          </stop>
        </linearGradient>
        <linearGradient x1="0%" y1="50%" x2="98.607%" y2="50%" id="c">
          <stop
            stopColor={`var(--theme-page-header-nav-bg, ${color})`}
            stopOpacity=".6"
            offset="0%"
          >
          </stop>
          <stop
            stopColor={`var(--theme-page-header-nav-bg, ${color})`}
            stopOpacity=".35"
            offset="100%"
          >
          </stop>
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <path fill="url(#a)" d="M8 40V0h10.34l-7.755 40z"></path>
        <path fill="url(#b)" d="M8 40V3.93L33.984 40z"></path>
        <path fill="url(#a)" d="M8 40V0l15.64 40z"></path>
        <path fill="url(#c)" d="M10.598 40H7V0h3.598z"></path>
        <path
          fill={`var(--theme-page-header-nav-bg, ${color})`}
          d="M0 0h8v40H0z"
        >
        </path>
      </g>
    </svg>
  );
}
