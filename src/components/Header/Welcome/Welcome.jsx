import styles from './Welcome.module.css'
import { MyHeader } from '../../Header/MyHeader';
import { Menu } from '../../Header/Menu/Menu';
import { useState } from 'react';

export const Welcome = () => {


  const [menuActive, setMenuActive] = useState({menu: false, header: true});

  const setMenu = () => {
    setMenuActive({menu: !menuActive.menu, header: !menuActive.header});
  }

  return (
    <section>
        <div className={styles.img_wrapper}>
            <MyHeader active={menuActive.header} setMenu={setMenu}/>
            <div className={styles.blue_cover}>
            </div>
                <div className={styles.main_info_wrapper}>
                    <h1 className={styles.title}>Говорят, никогда не поздно <br/> сменить профессию</h1>
                    <h5 className={styles.sub_title}>Сделай круто тестовое задание и у тебя получится</h5>
                    <button className={styles.btn}><span className={styles.typography}>Проще простого!</span></button>
                </div>
                <Menu setUnActive={setMenu} active={menuActive.menu} />
        </div>
    </section>
  )
}
