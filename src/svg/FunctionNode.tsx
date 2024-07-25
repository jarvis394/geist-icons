import * as React from 'react'
import type { SVGProps } from 'react'
const SvgFunctionNode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    strokeLinejoin="round"
    data-testid="geist-icon"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#function-node_svg__clip0_1534_28976)">
      <path
        fill="transparent"
        stroke="#fff"
        strokeWidth={1.5}
        d="M15.25 8V2.25a1.5 1.5 0 0 0-1.5-1.5H2.25a1.5 1.5 0 0 0-1.5 1.5v11.5a1.5 1.5 0 0 0 1.5 1.5H8"
      />
      <path
        stroke="#fff"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.246 4.25v0A2.246 2.246 0 0 0 7 6.496v3.008a2.246 2.246 0 0 1-2.246 2.246v0m.496-4h3.5"
      />
      <path
        fill="color(display-p3 .2745 .6549 .3451)"
        d="m13 9 3 1.75v3.5L13 16l-3-1.75v-3.5z"
      />
    </g>
  </svg>
)
export default SvgFunctionNode