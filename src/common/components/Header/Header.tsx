import styles from "./Header.module.scss";
import logo from "../../../assets/icon/1b47f9d0e595.png";
import { SearchHeader } from "./SearchHeader";
import { NavigationBarHeader } from "./NavigationBarHeader";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img alt={"Logo"} src={logo} />
      </div>
      <SearchHeader />
      <NavigationBarHeader />
    </header>
  );
};
