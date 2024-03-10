import { Button } from '@shared/ui/button'

export const Arena = () => {
  return (
    <div className="flex flex-col items-center sm:py-12">
      <div className="mb-3.5">
        <div className="max-w-52 sm:max-w-72">
          <img src="https://placehold.co/400x300" alt="arena" />
        </div>
        <div></div>
      </div>
      <h2 className="text-2xl text-white text-center uppercase mb-2">
        Арена 1
      </h2>
      <div className="w-full max-w-md p-2.5 sm:px-16 flex items-center justify-between sm:gap-12 bg-blue-400/60 rounded-lg mb-2.5">
        <div className="text-center text-3xl text-white">
          <h3 className="text-xs opacity-80">Ставка</h3>
          <span>50</span>
        </div>
        <img src="/icons/arrows.svg" alt="arrows" />
        <div className="text-center text-3xl text-white">
          <h3 className="text-xs text-white/80">Награда</h3>
          <span>100</span>
        </div>
      </div>
      <Button label="играть" intent="primary" size="large" />
    </div>
  )
}
