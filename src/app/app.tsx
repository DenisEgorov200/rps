import { ChestCardList } from '@entities/chest'
import { Layout } from '@layout'
import { Arena } from '@widgets/arena'

export const App = () => {
  return (
    <Layout>
      <Arena />
      <ChestCardList />
    </Layout>
  )
}
