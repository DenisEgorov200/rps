import { Button } from '@shared/ui/button'
import { IconButton } from '@shared/ui/icon-button'
import { Progress } from '@shared/ui/progress'

export const Header = () => {
  return (
    <header className="py-9 sm:py-9">
      <div className="container px-5 mx-auto flex items-center justify-between gap-2">
        <IconButton src="/icons/avatar.svg" alt="avatar" />
        <div className="w-full flex items-center justify-between py-2 px-3 bg-blue-400/60 rounded-1px gap-7">
          <div className="w-full text-white">
            <h2 className="text-xs">user_name</h2>
            <div className="flex items-center">
              <Progress progress="50%" />
              <span className="text-sm ml-3">7 lvl.</span>
            </div>
          </div>
          <div className="relative h-full flex flex-col justify-center">
            <div className="relative p-0.5 min-w-20 bg-gray rounded text-xs text-white text-center">
              250000
              <img
                src="/icons/coin.svg"
                alt="star"
                className="absolute top-1/2 -right-4 -translate-y-1/2 w-8"
              />
            </div>
            <Button
              label="пополнить"
              className="absolute -bottom-8"
              intent="secondary"
              size="small"
            />
          </div>
        </div>
        <IconButton src="/icons/settings.svg" alt="settings" />
      </div>
    </header>
  )
}
