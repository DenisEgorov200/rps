import { ChestCardList } from '@entities/chest'
import { Layout } from '@layout'
import { Button } from '@shared/ui/button'

export const App = () => {
  return (
    <Layout>
      <div>
        <h2 className="text-2xl text-white uppercase mb-2">Арена 1</h2>
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
      <ChestCardList />
    </Layout>
  )
}
