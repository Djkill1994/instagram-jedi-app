import styles from "./SearchHeader.module.scss";
import { ReactComponent as Search } from "../../../.././assets/svg/searching.svg";

export const SearchHeader = () => {
  return (
    <div className={styles.searchWrapper}>
      <input
        aria-label="Ввод поискового запроса"
        autoCapitalize="none"
        className={styles.searchInput}
        type="text"
        placeholder="Поиск"
        value=""
        readOnly={true}
      />
      <div role="button" className={styles.divBtn}>
        <div className={styles.wrapper}>
          <div className={styles.searchIcon}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
