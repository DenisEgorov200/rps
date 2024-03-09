const NAV_MENU_ITEMS = ['сундуки', 'арены', 'скины', 'бонусы']

export const NavMenu = () => {
  return (
    <nav className="fixed bottom-0 w-full sm:relative">
      <ul className="flex items-center sm:px-32">
        {NAV_MENU_ITEMS.map((item) => (
          <li
            key={item}
            className="w-full p-6 bg-gradient-blue shadow-nav-menu rounded-t text-sm text-white text-center capitalize cursor-pointer sm:rounded-lg transition-all duration-300 hover:bg-gradient-blue-active hover:shadow-nav-menu-active"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}
