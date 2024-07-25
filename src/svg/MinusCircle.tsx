import * as React from 'react'
import type { SVGProps } from 'react'
const SvgMinusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5 7.25h-.75v1.5h7.5v-1.5z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgMinusCircle