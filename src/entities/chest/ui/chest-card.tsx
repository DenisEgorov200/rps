export const ChestCard = () => {
  return (
    <div className="flex flex-col items-center p-2.5 bg-white/35 shadow-chest border-3px border-black rounded-lg text-white leading-none">
      <span className="text-xss">Закрыто</span>
      <span className="text-sm">4 ч.</span>
      <div className="relative">
        <img src="/images/chest.png" alt="chest" />
        <div className="absolute -z-10 left-0 top-0 w-full h-full bg-[#FFC80AB0] rounded-full blur-xl" />
      </div>
      <h4 className="text-xs text-center capitalize">Арена 2</h4>
    </div>
  )
}
