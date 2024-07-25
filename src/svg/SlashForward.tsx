import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSlashForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m4.015 15.394.296-.69 6-14 .295-.689 1.379.591-.296.69-6 14-.295.689z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSlashForward
