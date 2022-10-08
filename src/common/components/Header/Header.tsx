import React, { VFC } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/svg/logoIG.svg";
import { SearchHeader } from "./SearchHeader";
import { NavigationBarHeader } from "./NavigationBarHeader";

export const Header: VFC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo className={styles.logo} />
      </div>
      <SearchHeader />
      <NavigationBarHeader />
    </header>
  );
};
