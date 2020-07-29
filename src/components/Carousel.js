import React from 'react'
import Carousel from './reusable/Carousel'

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */

// dummy data
const slides1 = [
  {
    title: '1',
    image: 'https://f4.bcbits.com/img/a1012855547_16.jpg'
  },
  {
    title: '2',
    image: 'https://f4.bcbits.com/img/a0953099894_10.jpg'
  },
  {
    title: '3',
    image: 'https://f4.bcbits.com/img/a4002538098_10.jpg'
  },
  {
    title: '13',
    image: 'https://f4.bcbits.com/img/a1174936089_10.jpg'
  }
]

const slides2 = [
  {
    title: '4',
    image: 'https://f4.bcbits.com/img/a1807035745_10.jpg'
  },
  {
    title: '5',
    image: 'https://f4.bcbits.com/img/a1104600288_16.jpg'
  },
  {
    title: '6',
    image: 'https://f4.bcbits.com/img/a1006880036_16.jpg'
  },
  {
    title: '7',
    image: 'https://f4.bcbits.com/img/a0898739411_16.jpg'
  },
  {
    title: '8',
    image: 'https://f4.bcbits.com/img/a1655308465_16.jpg'
  },
  {
    title: '9',
    image: 'https://f4.bcbits.com/img/a3549988168_10.jpg'
  },
  {
    title: '10',
    image: 'https://f4.bcbits.com/img/a0140465996_10.jpg'
  },
  {
    title: '11',
    image: 'https://f4.bcbits.com/img/a0015365024_10.jpg'
  },
  {
    title: '18',
    image: 'https://f4.bcbits.com/img/a1174936089_10.jpg'
  }
]

const size1 = 900
const size2 = 250
const speed = 4000

export const Slider = () => {
  return (
    <div className='slider'>
      <Carousel slides={slides1} speed={speed} size={size1} multi={false}/>
      <Carousel slides={slides2} speed={false} size={size2} multi={true}/>
    </div>
  )
}
