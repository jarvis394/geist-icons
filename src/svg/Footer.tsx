import * as React from 'react'
import type { SVGProps } from 'react'
const SvgFooter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    width={16}
    height={16}
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.5 2.5h13v7.255h-13zm0 8.505V12.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1.495zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgFooter
