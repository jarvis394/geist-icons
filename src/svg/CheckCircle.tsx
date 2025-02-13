import * as React from 'react'
import type { SVGProps } from 'react'
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.47-1.47.53-.53L11 4.94l-.53.53L6.5 9.44l-.97-.97L5 7.94 3.94 9l.53.53 1.5 1.5a.75.75 0 0 0 1.06 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCheckCircle
