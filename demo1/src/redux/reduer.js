import * as actions from './actionType';

import data from './data';

export function GetUserinfor(state, action) {
  switch (action.type) {
    case actions.GETUSERINFOR:
      state = data.userinfo
      return state;
    default:
      return new Error(`Unknown filter: ${action.type}`);
  }
}
var obj = data.shoucang;
var seldata = [];
// selshop
var findIt = false;
var findIt1 = false;
export function objcetc(state = data, action) {
  switch (action.type) {
    case actions.SELSHOPDETAIL:
      // let 
      try {
        (data.datalist).forEach((el, index) => {
          console.log(el)
          if (el.id == action.id) {
            findIt = true;
            state.seldata1 = el;
            throw new Error("EndIterative");
          }
        });
      } catch {
        if (findIt) {
          findIt = false;
          return state;
        } else {
          findIt = false;
          return { 'code': 400 };
        }
      }
    case actions.ADDSHOP:
      // obj
      try {
        (data.datalist).forEach((el, index) => {
          console.log(action.id)
          if (obj.length <= 0) {
            if(action.id == el.id){
              findIt = true;
              seldata = el;
              throw new Error("EndIterative");
            }
            
          } else {
            obj.forEach((item, index) => {
              if (item.id != el.id && action.id == el.id) {
                findIt = true;
                seldata = el;
          throw new Error("EndIterative");
                console.log(el)
              } else {
                findIt1 = false;
              }
            });
          }
        });
      
      } catch {
        if (findIt) {
          obj.push(seldata)
          state.addshop = obj;
          findIt = false;
          alert('收藏成功')
          console.log(state.addshop, action.id, data.shoucang)
          return state;
        } else {
          console.log(state.addshop, action.id, data.shoucang)
          findIt = false;
          return state;
        }
      }
    case actions.SHOUCANG:
      return state;
    case actions.ALLSHOP:
      console.log(data.datalist)
      state.allshop = data.datalist;
      return state;
    case actions.ISLOGIN:
      console.log(data)
      if (data.userinfo.name != undefined) {
        state.code = 200;
        return state;
      } else {
        state.code = undefined;
        return state;
      }
    case actions.LOGIN:
      console.log(data.userinfo, data.userinfo.name)
      if (action.i == 2 && data.userinfo.name == undefined) {
        state.userinfo = {
          name: '张三',
          age: 12,
          sex: '男'
        };
        data.userinfo = {
          name: '张三',
          age: 12,
          sex: '男'
        };
        alert('登录成功');
        return state;
      } else if (action.i == 2 && data.userinfo.name != undefined) {
        alert('请勿重复登录')
      }
    case actions.QXSHOUCANG:
      obj.forEach((el, index) => {
        if (el.id == action.qxid) {
          obj.splice(index, 1);
          alert('取消成功')
          return false;
        }
      });
      state.addshop = obj;
      return state;
    default:
      return new Error(`Unknown filter: ${action.type}`);
  }
}
