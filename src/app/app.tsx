import { Button } from '@shared/ui/button'
import { Header } from '@widgets/header'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container px-5 mx-auto flex flex-col items-center">
          <div className="w-full max-w-md p-2.5 flex items-center justify-between bg-blue-400/60 rounded-lg mb-2.5">
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
      </main>
    </>
  )
}
