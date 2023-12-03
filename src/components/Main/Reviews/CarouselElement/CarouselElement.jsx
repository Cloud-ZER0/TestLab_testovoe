import styles from './CarouseElement.module.css'

export const CarouselElement = ({elements}) => {
  return (
    <div className={styles.carousel_elem}>
        {elements.map(el => {return (
            <div className={styles.main_wrapper}>
                <div className={styles.user_info}>
                    <img src={el.img} alt='user-icon' className={styles.user_icon}/>
                    <div className={styles.user_credentials}>
                        <span className={styles.user_name}>{el.name}</span>
                        <span className={styles.user_location}>{el.location}</span>
                    </div>
                </div>
                <div className={styles.user_review}>{el.review}</div>
            </div>
        )})}
    </div>
  )
}
