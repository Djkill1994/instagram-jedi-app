import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={s.nav}>
      <div>
        nav 1
      </div>
      <div>
        nav 2
      </div>
      <div>
        nav 3
      </div>
        <input placeholder={'Поиск'}/>
    </div>
  )
}

export default Navbar
