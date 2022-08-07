import styled from "./SearchHeader.module.scss";
import { ReactComponent as Search } from "../../../.././assets/svg/searching.svg";

export const SearchHeader = () => {
  return (
    <div className={styled.searchWrapper}>
      <input
        aria-label="Ввод поискового запроса"
        autoCapitalize="none"
        className={styled.searchInput}
        type="text"
        placeholder="Поиск"
        value=""
        readOnly={true}
      />
      <div role="button" className={styled.divBtn}>
        <div className={styled.wrapper}>
          <div className={styled.searchIcon}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};
