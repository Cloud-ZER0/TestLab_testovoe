import styles from './MyHeader.module.css'
import { elipse_1, elipse_2 } from '../../utils/mockIcon'
import { menu_icon } from '../../utils/mockIcon'

export const MyHeader = ({setMenu,active}) => {

  const setMenuAndHideHeader = () => {
    setMenu();
  }


  return (
    <header className={active? styles.header: styles.header_none}>
      <div className={styles.container__header}>
          <div className={styles.logo_wrapper}>
              <div className={styles.logo}>
                  <img className={styles.elipse_1}src={elipse_1} alt="primary" />
                  <img className={styles.elipse_2} src={elipse_2} alt="secondary" />
              </div>
              <h5 className={styles.label}>testLab</h5>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navigation_list}>
              <li>
                <a href='#!' className={styles.link}>Как это работает</a>
              </li>
              <li>
                <a href='#third_block' className={styles.link}>3-й блок</a>
              </li>
              <li>
                <a href='#!' className={styles.link}>Вопросы и ответы</a>
              </li>
              <li>
                <a href='#!' className={styles.link}>Форма</a>
              </li>
            </ul>
          </nav>
          <img onClick={setMenuAndHideHeader} className={styles.menu_icon} src={menu_icon} alt="menu" />
      </div>
    </header>
  )
}
