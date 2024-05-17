import Link from 'next/link'
// import { SignIn } from './sign-in'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { SignOut } from './sign-out'

export default function NavLink() {
  return (
    <nav className="bg-gray-800 text-white w-fit h-full md:p-10 lg:p20">
      <div className="w-fit h-full hidden md:block">
        <ul className="mt-4">
          <li>
            <Link href="/" className="font-bold text-xs md:text-base">
              Introduction
            </Link>
          </li>
          <li>
            <Link href="/product" className="font-bold text-xs md:text-base">
              Product Demo
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-bold text-xs md:text-base">
              Contact
            </Link>
          </li>
          <li>
            <SignOut />
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <Menu>
          <div className="p-4">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
          </div>
          <MenuList>
            <div className="bg-gray-600">
              <MenuItem>
                <Text className="text-white p-4">Introduction</Text>
              </MenuItem>
              <MenuItem>
                <Text className="text-white p-4">Product Demo</Text>
              </MenuItem>
              <MenuItem>
                <Text className="text-white p-4">Contact</Text>
              </MenuItem>
            </div>
          </MenuList>
        </Menu>
      </div>
    </nav>
  )
}

// export default NavBar;
