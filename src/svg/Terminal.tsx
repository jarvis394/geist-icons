import * as React from 'react'
import type { SVGProps } from 'react'
const SvgTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m1.53 12.78-.53.53-1.06-1.06.53-.53L4.19 8 .47 4.28l-.53-.53L1 2.69l.53.53 4.074 4.073a1 1 0 0 1 0 1.414zm7.22-.28H8V14h8v-1.5z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgTerminal
