import { useState } from 'react'
import { CarouselElement } from '../CarouselElement/CarouselElement'
import {Dots} from '../Dots/Dots'
import { leftArrow, rightArrow } from '../../../../utils/mockIcon';
import { ReviewsArr } from '../../../../utils/mockData';
import styles from './CarouselSlider.module.css'

export const CarouselSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        if(currentIndex === 0) {
            setCurrentIndex(ReviewsArr.length -1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const goToNextSlide = () => {
        if(currentIndex === ReviewsArr.length -1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const switchSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    const isCurrent = (slideIndex) => {
        return slideIndex === currentIndex; 
    }

  return (
    <div className={styles.carousel}>
        <div className={styles.inner_wrapper}>
            <img className={styles.arrow} src={leftArrow} alt='left-arrow'  onClick={goToPrevSlide} />
            <div id='slider' className={styles.inner_carousel}>
                <CarouselElement elements={ReviewsArr[currentIndex].arr}/>
            </div>
            <img className={styles.arrow} src={rightArrow} alt='rigth-arrow'  onClick={goToNextSlide} />
        </div>
        <div className={styles.quick_btns}>
            {ReviewsArr.map(({arr, slideIndex}) => <Dots key={slideIndex} slideIndex={slideIndex} switchSlide={switchSlide} isCurrent={isCurrent(slideIndex)}/>)}
        </div>
    </div>
  )
}
