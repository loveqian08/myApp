export const type = {
    SWITCH_MENU: 'SWITCH_MENU',
  }
  
  // 菜单点击切换修改面包屑名称
  export function changeMenu(menuName) {
    return {
      type: type.SWITCH_MENU,
      menuName,
    }
  }
  export function addGun () {
    return {type: 'add'}
  }
  export function removeGun () {
    return {type: 'less'}
  }
  export function addGunAsync () {
    // 处理异步的话 就可以传递一个函数
    return dispatch => {
      setTimeout(() => {
        dispatch(addGun())
       
        // console.error(dispatch)
      }, 2000)
    }
  }