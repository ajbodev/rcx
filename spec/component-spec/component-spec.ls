
Component = !->

(require 'src/component/lib/action') Component
(require 'src/component/main/mode')  Component

#component = new Component!

describe 'Mode', (...) !->
  it 'Calls action', !->
    spyOn Component::, 'action'
    Component::action type: 'something'
    expect Component::action .toHaveBeenCalled!
  it 'Gets the right mode from the ext (prototype)', !->
    expect (Component::modeGetFromExt ext: 'js') .toBe 'text/javascript'
