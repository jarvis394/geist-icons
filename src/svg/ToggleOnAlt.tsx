import * as React from 'react'
import type { SVGProps } from 'react'
const SvgToggleOnAlt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 3.5h4a4.5 4.5 0 1 1 0 9H6a4.5 4.5 0 1 1 0-9M0 8a6 6 0 0 1 6-6h4a6 6 0 0 1 0 12H6a6 6 0 0 1-6-6m10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgToggleOnAlt