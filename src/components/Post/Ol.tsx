import React from 'react'

export const Ol = ({ children }: { children: React.ReactNode }) => {
  return <ol className="inline pb-5 text-lg leading-7 text-gray-200 md:leading-9 ">{children}</ol>
}
