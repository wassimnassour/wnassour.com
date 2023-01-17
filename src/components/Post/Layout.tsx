type Props = {
  children: React.ReactNode
  pageTitle?: string
}

export const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <>
      <div>
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  )
}
