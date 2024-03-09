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
      <main>{children}</main>
    </>
  )
}
