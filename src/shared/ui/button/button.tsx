import { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: ReactNode
}

export const Button = ({ label }: Props) => {
  return (
    <button className="inline-flex py-7 px-14 bg-[url('/images/button-bg.svg')] bg-cover bg-no-repeat bg-center shadow-button rounded-2xl border-2 border-[rgb(51,51,51)] overflow-hidden transition duration-300 active:bg-[url('/images/active-button-bg.svg')]">
      <span className="text-4xl text-button uppercase [-webkit-text-stroke:1.2px_#583600] drop-shadow-button-text">
        {label}
      </span>
    </button>
  )
}
