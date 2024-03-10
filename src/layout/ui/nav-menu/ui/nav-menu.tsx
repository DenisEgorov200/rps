const NAV_MENU_ITEMS = ['сундуки', 'арены', 'скины', 'бонусы']

export const NavMenu = () => {
  return (
    <nav className="fixed bottom-0 w-full sm:relative">
      <ul className="container mx-auto flex items-center sm:px-24">
        {NAV_MENU_ITEMS.map((item) => (
          <li
            key={item}
            className="w-full py-5 sm:p-6 bg-gradient-blue shadow-nav-menu rounded-t sm:rounded-lg text-sm sm:text-lg text-white text-center capitalize cursor-pointer transition-all duration-300 hover:bg-gradient-blue-active hover:shadow-nav-menu-active hover:scale-y-105"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}
