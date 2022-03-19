import s from "./SearchHeader.module.scss";
import { ReactComponent as Search } from "../../../.././assets/svg/searching.svg";

export const SearchHeader = () => {
  return (
    <div className={s.searchWrapper}>
      <input
        aria-label="Ввод поискового запроса"
        autoCapitalize="none"
        className={s.searchInput}
        type="text"
        placeholder="Поиск"
        value=""
      />
      <div role="button" className={s.divBtn}>
        <div className={s.wrapper}>
          <div className={s.searchIcon}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
