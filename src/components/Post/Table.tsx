export const Table = (props: any) => {
  return (
    <table className="text-white border-collapse p-2 text-center  [&_th]:min-w-[200px]  [&_th]:p-2 [&_th]:border [&_th]:border-white  [&_td]:p-2 [&_td]:border [&_td]:border-white  ">
      {props?.children?.map((item: any) => item)}
    </table>
  )
}
