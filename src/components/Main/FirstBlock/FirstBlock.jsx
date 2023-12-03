import styles from './FirstBlock.module.css'
import { ContentBLock } from './ContentBlock/ContentBLock'
import { firstBlockContent } from '../../../utils/mockData'

export const FirstBlock = () => {

  return (
    <section id='first_block' className={styles.about}>
        <div className={styles.container}>
            <h1 className={styles.section_title}>Как это работает</h1>
            <div className={styles.content_wrapper}>
                {firstBlockContent.map(el=><ContentBLock key={el.title} {...el}/>)}
            </div>
        </div>
    </section>
  )
}
