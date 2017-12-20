import LRNViewLayout from './basic_component/LRNViewLayout.js'
import LRNComponentValidationAndDefaultProps from './basic_component/LRNComponentValidationAndDefaultProps.js'
import LRNText from './basic_component/LRNText.js'
import LRNImage from './basic_component/LRNImage.js'
import LRNTextInput from './basic_component/LRNTextInput.js'
import LRNScrollView from './basic_component/LRNScrollView.js'
import LRNPureComponent from './basic_component/LRNPureComponent.js'
import LRNFlatList from './list_view/LRNFlatList.js'
import LRNSectionList from './list_view/LRNSectionList.js'
import LRNButton from './user_interface/LRNButton.js'
import LRNPicker from './user_interface/LRNPicker.js'
import LRNPresenting from './user_interface/LRNPresenting.js'
import LRNSlider from './user_interface/LRNSlider.js'
import LRNAlert from './others/LRNAlert.js'

// animations
import LRNBasicAnimation from './animation/LRNBasicAnimation.js'

import AppMenuList from './AppMenu.js'

class AppMenuItem{
  constructor(menuId,title,screenClass,subMenus){
    this.menuId = menuId;
    this.title = title;
    this.screenClass = screenClass;
    this.subMenus = subMenus;
  }
}

class AppMenuComponent extends AppMenuItem
{
  constructor(menuId,title,screenClass,sourcePath){
    super(menuId,title,screenClass);
    this.sourcePath = sourcePath;
  }
}

var AppConfiguration = {
  menus:[
    new AppMenuItem("menu_basic_component","Basic Components",AppMenuList,[
      new AppMenuComponent("menu_basic_component_1","Component Validation & Default Props",LRNComponentValidationAndDefaultProps),
      new AppMenuComponent("menu_basic_component_2","View Layout",LRNViewLayout),
      new AppMenuComponent("menu_basic_component_3","Text",LRNText),
      new AppMenuComponent("menu_basic_component_4","Image",LRNImage),
      new AppMenuComponent("menu_basic_component_5","Text Input",LRNTextInput),
      new AppMenuComponent("menu_basic_component_6","Scroll View",LRNScrollView),
      new AppMenuComponent("menu_basic_component_7","Pure Component",LRNPureComponent)
    ]),
    new AppMenuItem("menu_user_interface","User Interface",AppMenuList,[
      new AppMenuComponent("menu_user_interface_1","Button",LRNButton),
      new AppMenuComponent("menu_user_interface_2","Picker",LRNPicker),
      new AppMenuComponent("menu_user_interface_3","Presenting",LRNPresenting),
      new AppMenuComponent("menu_user_interface_4","Slider",LRNSlider),
    ]),
    new AppMenuItem("menu_list_view","List View",AppMenuList,[
      new AppMenuComponent("menu_list_view_1","Flat List",LRNFlatList),
      new AppMenuComponent("menu_list_view_2","Section List",LRNSectionList)
    ]),
    new AppMenuItem("menu_others","Others",AppMenuList,[
      new AppMenuComponent("menu_others_1","Others",LRNAlert)
    ]),
    new AppMenuItem("menu_animation","Animation",AppMenuList,[
      new AppMenuComponent("menu_animation_1","Basic",LRNBasicAnimation),
    ])
  ]
};

module.exports = AppConfiguration;
