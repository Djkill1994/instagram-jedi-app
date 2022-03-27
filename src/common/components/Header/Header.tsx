import s from "./Header.module.scss";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import { SearchHeader } from "./SearchHeader";
import { NavigationBarHeader } from "./NavigationBarHeader";

export const Header = () => {
  console.log("Header Load");
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img alt={"Logo"} src={logo} />
      </div>
      <SearchHeader />
      <NavigationBarHeader />
    </header>
  );
};
