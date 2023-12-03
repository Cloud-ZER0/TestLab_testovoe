import { useState } from 'react'
import styles from './Menu.module.css'
import menuArrow from '../../../assets/imgs/icons/menuArrow.svg'
import right from '../../../assets/imgs/icons/elipse_2.svg'
import left from '../../../assets/imgs/icons/elipse_1.svg'


export const Menu = ({active, setUnActive}) => {

const [links, setLinks] = useState([
    {label: 'Как это работает', img: menuArrow, href:'#'},
    {label: '3-й блок', img: menuArrow, href: '#third_block'},
    {label: 'Вопросы и ответы', img: menuArrow, href:'#'},
    {label: 'Форма', img: menuArrow, href:'#'},
])

  return (
    <section className={active?styles.menu:styles.menu_disabled}>
        <div className={styles.label}>
            <div className={styles.label_icon}>
                <div className={styles.logo_wrapper}>
                    <img className={styles.left_img} src={left} alt="brand logo" />
                    <img className={styles.right_img} src={right} alt="brand logo" />
                </div>
                <div className={styles.label_name}>testLab</div>
            </div>
            <button onClick={setUnActive} className={styles.close_btn}>
                <div className={styles.rotate_left}></div>
                <div className={styles.rotate_right}></div>
            </button>
        </div>
       {links.map(({label, img, href}) => <a key={label} href={href} className={styles.links_wrapper}>
            <span className={styles.link_label}>{label}</span>
            <img src={img} alt="label" />
        </a >)}
    </section>
  )
}
