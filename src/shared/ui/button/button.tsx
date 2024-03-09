import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const button = cva('inline-flex', {
  variants: {
    intent: {
      primary: [
        'bg-[url("/images/button-bg.svg")]',
        'bg-cover',
        'bg-no-repeat',
        'bg-center',
        'text-yellow',
        'drop-shadow-secondary-text',
        'uppercase',
        'rounded-2xl',
        'border-2',
        'border-[rgb(51,51,51)]',
        'overflow-hidden',
        'transition',
        'duration-300',
        'active:bg-[url("/images/active-button-bg.svg")]',
      ],
      secondary: [
        'bg-[#4ECE00]',
        'text-white',
        'capitalize',
        'rounded',
        'drop-shadow-thirdly-text',
      ],
    },
    size: {
      small: ['text-sm', 'p-1'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-4xl', 'py-7', 'px-14'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label: ReactNode
}

export const Button = ({ label, intent, size }: Props) => {
  return (
    <button className={button({ intent, size })}>
      <span className="[-webkit-text-stroke:1.2px_#583600]">{label}</span>
    </button>
  )
}
