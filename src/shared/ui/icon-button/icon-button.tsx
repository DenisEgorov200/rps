interface Props {
  src: string
  alt: string
}

export const IconButton = ({ src, alt }: Props) => {
  return (
    <div className="relative p-2 bg-blue-400/20 border border-white rounded-lg shadow-[0px_4.7px_4.7px_0px_rgba(0,0,0,0.37)] after:absolute after:-z-10 after:top-0 after:left-0 after:w-full after:h-1/2 after:bg-white/15 after:rounded-lg after:blur-[2px]">
      <div className="p-1 bg-blue-400 rounded-sm shadow-[0px_4.7px_4.7px_0px_rgba(4,4,4,0.4)]">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}
