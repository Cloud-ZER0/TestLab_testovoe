import styles from './Dots.module.css'

export const Dots = ({slideIndex, switchSlide, isCurrent}) => {
  return (
    <button className={isCurrent?styles.dot_current: styles.dot} onClick={()=>switchSlide(slideIndex)}>•</button>
  )
}
