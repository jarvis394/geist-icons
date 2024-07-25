import * as React from 'react'
import type { SVGProps } from 'react'
const SvgArrowUpRightSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6.75 4H6v1.5h3.44L5.47 9.47l-.53.53L6 11.06l.53-.53 3.97-3.968V10H12V5a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgArrowUpRightSmall
