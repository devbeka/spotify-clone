import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import { logo } from '../assets'
import { links } from '../assets/constants'

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const NavLinks = () => (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row justify-start items-center text-sm my-8 font-medium text-green-400 hover:text-green-600"
          onClick={() => handleClick && handleClick()}
        >
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}
    </div>
  )

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <Link to="/">
          <img className="w-full h-14 object-contain" src={logo} alt="logo" />
        </Link>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483b8b] backdrop-blur-lg z-10 p-6 mb:hidden ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img className="w-full h-14 object-contain" src={logo} alt="logo" />
        <NavLinks onClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar
