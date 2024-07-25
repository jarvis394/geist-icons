import * as React from 'react'
import type { SVGProps } from 'react'
const SvgTextFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m2.72 11.504-.5 1.71-.085.29H.572l.208-.71 3-10.255h1.44l3 10.255.208.71H6.865l-.085-.29-.5-1.71zm.498-1.7h2.564L4.5 5.421zm7.541-3.764c.482-.345 1.103-.536 1.908-.536 1.078 0 1.877.342 2.402.907.509.548.681 1.223.681 1.76v5.333h-1.5v-.393c-.457.234-1.034.393-1.75.393-.72 0-1.401-.218-1.916-.658a2.38 2.38 0 0 1-.834-1.842c0-1.45 1.172-2.75 2.75-2.75h1.75v-.083c0-.24-.08-.524-.28-.74-.186-.2-.554-.427-1.303-.427-.56 0-.857.129-1.035.256-.189.135-.323.325-.472.601l-1.32-.713c.182-.337.449-.771.92-1.108zm3.491 3.714H12.5c-.708 0-1.25.586-1.25 1.25 0 .31.119.54.309.702.2.17.518.298.941.298.793 0 1.232-.283 1.475-.521.128-.126.212-.251.263-.34l.012-.022z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgTextFormat
