import NavLink from './NavLink'
import { SignOut } from './SignOut'

export function NavBar() {
  return (
    <div className="w-fit h-full md:block">
      <NavLink>
        <SignOut />
      </NavLink>

      {/* <SignOut /> */}
    </div>
  )
}
