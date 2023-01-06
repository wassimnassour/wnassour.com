import { MdxComponent } from 'types'

export const Paragraph = ({ children }: MdxComponent) => {
  return (
    <div>
      <p
      // sx={{ color: 'white', fontSize: [15, 17], ...styles }}
      >
        {children}
      </p>
    </div>
  )
}
