import styles from './Main.module.css'
import { FirstBlock } from './FirstBlock/FirstBlock'
import { SecondBlock } from './SecondBlock/SecondBlock'
import {Reviews} from './Reviews/Reviews'

export const Main = () => {
  return (
    <main>
        <FirstBlock/>
        <SecondBlock/>
        <Reviews/>
        <div className={styles.white}></div>
    </main>
  )
}
