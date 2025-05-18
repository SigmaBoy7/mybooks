import HeaderLogo from "./HeaderLogo";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderUi from "./HeaderUi";

export default function Header() {
  return (
    <header>
      <HeaderUi>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderNavMenu />
      </HeaderUi>
    </header>
  );
}
