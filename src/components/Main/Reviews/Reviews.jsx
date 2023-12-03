import { CarouselSlider } from './CarouselSlider/CarouselSlider'
import styles from './Reviews.module.css'

export const Reviews = () => {

  return (
    <section className={styles.reviews_section}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Отзывы</h1>
           <CarouselSlider/>
        </div>
    </section>
  )
}
