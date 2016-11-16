
# @params  Comp:{src/component}
_Component = (Comp) !->
  
  Comp::initMain = !->
    _this = @; @action type: 'INIT_MAIN'
    
    @main = @props.main
    
    (require 'src/component/main/editor')    Comp
    (require 'src/component/main/file')      Comp
    (require 'src/component/main/ext')       Comp
    (require 'src/component/main/mode')      Comp
    
    (require 'src/component/main/frame')     Comp
    (require 'src/component/main/urlhash')   Comp
    (require 'src/component/main/result')    Comp
    (require 'src/component/main/lint')      Comp
    
    (require 'src/component/main/input')     Comp
    (require 'src/component/main/output')    Comp
    
    (require 'src/component/main/script')    Comp
    (require 'src/component/main/include')   Comp
    (require 'src/component/main/require')   Comp
    (require 'src/component/main/increment') Comp
    
    (require 'src/component/main/run')       Comp
    (require 'src/component/main/save')      Comp
    (require 'src/component/main/load')      Comp
    
    @initEditor!
    @initFile!
    @initExt!
    @initMode!
    
    @initResult!
    @initFrame!
    @initUrlhash!
    @initLint!
    
    @initInput!
    @initOutput!
    
    @initScript!
    @initInclude!
    @initRequire!
    @initIncrement!
    
    @initRun!
    @initSave!
    @initLoad!

module.exports = _Component
