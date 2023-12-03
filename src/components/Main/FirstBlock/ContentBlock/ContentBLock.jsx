import styles from './ContentBlock.module.css'

export const ContentBLock = ({title, subTitle, icon}) => {
  return (
    <div className={styles.card}>
        <img className={styles.card_icon} src={icon} alt="targer-icon" />
        <div className={styles.info_wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{subTitle}</p>
        </div>
     </div>
  )
}
