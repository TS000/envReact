import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Button from '../Button'

configure({ adapter: new Adapter() })
describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })
})
