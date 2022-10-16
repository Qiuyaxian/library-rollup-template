import { shallowMount } from '@vue/test-utils'
import Tabbar from '@/src/components/tabbar.vue'

describe('<Tabbar/>', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(Tabbar)
    expect(wrapper.find('.tabbar').text()).toEqual('设个是demo组件')
  })
})
