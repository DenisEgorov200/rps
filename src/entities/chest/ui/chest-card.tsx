export const ChestCard = () => {
  return (
    <div className="flex flex-col items-center py-2 px-3 bg-white/35 shadow-chest border-3px border-black rounded-lg text-white gap-2.5">
      <span className="text-sm leading-none">Закрыто</span>
      <span className="text-lg leading-none">4 ч.</span>
      <div className="relative">
        <img src="/images/chest.png" alt="chest" />
        <div className="absolute -z-10 left-0 top-0 w-full h-full bg-[#FFC80AB0] rounded-full blur-xl" />
      </div>
      <h4 className="text-xl capitalize">Арена 2</h4>
    </div>
  )
}
