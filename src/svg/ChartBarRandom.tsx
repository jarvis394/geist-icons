import * as React from 'react'
import type { SVGProps } from 'react'
const SvgChartBarRandom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 1v14h-1.5V1zM8.75 6v9h-1.5V6zM3.5 4.75V4H2v11h1.5z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChartBarRandom
