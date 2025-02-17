import { SVGProps } from "react"

interface ColorIcon {
  color?: string
}

const Icon = ({color = '#67808E', ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill={color}
          d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8ZM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4Zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
  export default Icon