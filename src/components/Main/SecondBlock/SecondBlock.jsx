import styles from './SecondBlock.module.css'
import { first_layer, second_layer } from '../../../utils/mockImgs'

export const SecondBlock = () => {
  return (
    <section id='third_block' className={styles.second_section}>
        <div className={styles.container}>
            <div className={styles.main_info}>
                <h3 className={styles.title}>Круто, ты дошел до третьего блока</h3>
                <p className={styles.descr_1}>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
                <p className={styles.descr_2}>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
            </div>
            <div className={styles.img_wrapper}>
                <img className={styles.second_layer} src={second_layer} alt="second-layer"/>
                <img className={styles.first_layer} src={first_layer} alt="add-img" />
            </div>
        </div>
    </section>
  )
}
