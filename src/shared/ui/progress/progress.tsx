interface Props {
  progress: string
}

export const Progress = ({ progress }: Props) => {
  return (
    <div className="relative flex items-center justify-center w-1/2 max-w-40 bg-gray rounded-1px text-[7px] font-medium text-white text-center">
      <div
        className="absolute z-20 top-0 left-0 h-full max-w-full bg-blue-300 rounded-1px"
        style={{ width: progress }}
      />
      <span className="relative z-20 py-0.5 leading-none">100/200</span>
      <img
        src="/icons/star.svg"
        alt="star"
        className="absolute top-1/2 -right-2 -translate-y-1/2 z-10"
      />
    </div>
  )
}
