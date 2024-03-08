interface Props {
  src: string
  alt: string
}

export const Icon = ({ src, alt }: Props) => {
  return (
    <div className="relative p-2 bg-[rgba(5,37,69,0.24)] border-[1px] border-white rounded-[8.23px] shadow-[0px_4.7px_4.7px_0px_rgba(0,0,0,0.37)] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-1/2 after:bg-white after:opacity-15 after:rounded-[7px] after:blur-[1.64px]">
      <div className="p-1 bg-[rgb(3,47,86)] rounded-[2.35px] shadow-[0px_4.7px_4.7px_0px_rgba(4,4,4,0.4)]">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
