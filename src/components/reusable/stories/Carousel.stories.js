import React from 'react'
import Carousel from '@/components/reusable/Carousel'
import slideData from '@/data/slideData'

export default {
  title: 'Carousel',
  component: Carousel,
}

const Template = (args) => <Carousel {...args} />

export const Primary = Template.bind({})
Primary.args = {
  slides: slideData,
  speed: false,
  size: 250,
  multi: true,
}
