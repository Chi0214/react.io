// 这里存放状态
import * as actions from './actionType';

// eslint-disable-next-line import/prefer-default-export
export function userinfor() {
  return {type: actions.GETUSERINFOR};
}

export function selshop(id) {
  return {type: actions.SELSHOPDETAIL, id};
}
export function allshop() {
  return {type: actions.ALLSHOP};
}

export function islogin() {
  return {type: actions.ISLOGIN};
}
export function login(i) {
  return {type: actions.LOGIN,i};
}
export function addshop(id) {
  return {type: actions.ADDSHOP,id};
}
export function shoucang() {
  return {type: actions.SHOUCANG};
}
export function qxshoucang(qxid) {
  return {type: actions.QXSHOUCANG,qxid};
}

