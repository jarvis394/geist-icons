import * as React from 'react'
import type { SVGProps } from 'react'
const SvgChevronCircleUpFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.72 8.47 4.19 9l1.06 1.06.53-.53L8 7.31l2.22 2.22.53.53L11.81 9l-.53-.53-2.573-2.574a1 1 0 0 0-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgChevronCircleUpFill
