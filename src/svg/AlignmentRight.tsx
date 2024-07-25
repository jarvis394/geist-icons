import * as React from 'react'
import type { SVGProps } from 'react'
const SvgAlignmentRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.75 2H1v1.5h14V2zM6 7.25h9v1.5H6zM4 12.5h11V14H4z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAlignmentRight
