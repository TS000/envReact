import React from 'react'
import { shallow } from 'enzyme'
import Carousel from '../Carousel'
import data from '../../../data/slideData'

describe('Carousel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Carousel slides={data} />)
    expect(wrapper).toMatchSnapshot()
  })
})
