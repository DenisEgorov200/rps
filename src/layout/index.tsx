import { ReactNode } from 'react'
import { Header } from './ui/header'
import { NavMenu } from './ui/nav-menu'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <NavMenu />
      <main>
        <div className="container px-5 mx-auto flex flex-col items-center">
          {children}
        </div>
      </main>
    </>
  )
}
