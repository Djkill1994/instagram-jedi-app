import s from "./Header.module.scss";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import { SearchHeader } from "./SearchHeader/SearchHeader";
import { NavigationBarHeader } from "./NavigationBarHeader/NavigationBarHeader";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img alt={"Logo"} src={logo} />
      </div>
      <SearchHeader />
      <NavigationBarHeader />
    </header>
  );
}
