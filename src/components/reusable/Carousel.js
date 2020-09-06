import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components'
import useIncrementor from '../../hooks/useIncrementor.js'

// logic to decide how big to make the carousel and slides
const CarouselWrapper = styled.div`
  color: #eee;
  height: ${(props) => props.size}px;
  width: ${(props) => parseFloat(props.multi ? props.size * 4 : props.size)}px;
  background-color: #ccc;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
`

const SlideContainer = styled.div`
  position: absolute;
  transition: transform 350ms;
  height: 100%;
  display: flex;
`
const Slide = styled.div`
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: opacity 350ms;
    background-image: url('${(props) => props.background}');
    background-size: contain;
`
const NavArrows = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  padding: ${(props) => (props.multi ? '10px' : '30px')};
  box-sizing: border-box;
  border-top: ${(props) => (props.multi ? '5px' : '20px')} solid white;
  border-right: ${(props) => (props.multi ? '5px' : '20px')} solid black;
  cursor: pointer;
  display: none;
  transition: 6s;
  top: 0;
  bottom: 0;
  margin: auto 0;

  ${/* sc-selector */ CarouselWrapper}:hover & {
    display: block;
  }
`

const NavArrowLeft = styled(NavArrows)`
  transform: rotate(-135deg);
  left: 20px;
  z-index: 2;
`

const NavArrowRight = styled(NavArrows)`
  transform: rotate(45deg);
  right: 20px;
  z-index: 2;
`

const Carousel = ({ slides, speed, size, multi }) => {
  const [moveSlide, setMoveSlide] = useState(0)
  const [auto, setAuto] = useState(true)
  const [totalSlides] = useState(slides.length)
  const [multiMaybe, setMultiMaybe] = useState(1)
  const [speedTime, setSpeedTime] = useState(4000)

  // custom hook for moving the slides automatically
  const { offset } = useIncrementor({
    total: totalSlides,
    enabled: auto,
    speed: speedTime,
    multi: multi
  })

  useEffect(() => {
    setMoveSlide(offset)
  }, [offset])

  // DRY
  const multiOrNot = () => {
    if (multi) {
      setMultiMaybe(4)
    }
  }

  const changeSpeed = (foo) => {
    if (speed > 0) {
      setSpeedTime(foo)
    } else {
      setSpeedTime(4000)
    }
  }

  // initial render check for layout properties
  useLayoutEffect(() => {
    multiOrNot()
    changeSpeed(speed)
  }, [])

  // logic for moving the slides
  const move = (input) => {
    if (input === 1 && moveSlide < totalSlides - multiMaybe) {
      setMoveSlide(moveSlide + 1)
      return
    }
    if (input === -1 && moveSlide > 0) {
      setMoveSlide(moveSlide - 1)
      return
    }
    if (input === -1 && moveSlide === 0) {
      setMoveSlide(totalSlides - multiMaybe)
      return
    }
    if (input === 1 && moveSlide === totalSlides - multiMaybe) {
      setMoveSlide(0)
      return
    }

    // if nothing above triggers we start the carousel again
    setAuto(true)
  }

  return (
    <CarouselWrapper
      multi={multi}
      size={size}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <NavArrowLeft
        aria-label="previous slide"
        multi={multi}
        onClick={() => {
          move(-1)
        }}
      />

      <SlideContainer
        style={{
          transform: `translate3d(-${moveSlide * size}px,0,0)`
        }}
      >
        {slides.map((slide) => (
          <Slide size={size} background={slide.image} key={slide.title} />
        ))}
      </SlideContainer>
      <NavArrowRight
        aria-label="next slide"
        multi={multi}
        onClick={() => {
          move(1)
        }}
      />
    </CarouselWrapper>
  )
}

export default Carousel
