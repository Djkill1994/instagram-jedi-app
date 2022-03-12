import s from './header.module.scss';
import logo from '../../assets/icon/1b47f9d0e595.png';

const Header = () => {
  return (
    <header className={ s.header }>
      <div className={ s.logo }>
        <img src={ logo }/>
      </div>
      <div className={ s.searchWrapper }>
        <input aria-label="Ввод поискового запроса" autoCapitalize="none" className={ s.searchInput }
               placeholder="Поиск" type="text" value=""/>
        <div role={ 'button' }>
          <div className={ s.wrapper }>
            <div className={ s.searchIcon }>
              <svg aria-label="Поиск" className="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="16" role="img"
                   viewBox="0 0 24 24" width="16">
                <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      x1="16.511" x2="22" y1="16.511" y2="22"></line>
              </svg>
            </div>
            <span className={ s.searchTitle }>Поиск</span>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
