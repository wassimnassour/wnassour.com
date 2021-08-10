import * as React from 'react'

export function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={21}
      fill="#ffffff"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.354 10.004l7.163-7.148A1.673 1.673 0 0017.152.49l-7.147 7.164L2.858.49A1.673 1.673 0 10.493 2.856l7.163 7.148L.493 17.15a1.666 1.666 0 000 2.366 1.667 1.667 0 002.365 0l7.147-7.164 7.147 7.164a1.666 1.666 0 002.365 0 1.666 1.666 0 000-2.366l-7.163-7.147z"
        fill="#ffffff"
      />
    </svg>
  )
}
