import { ADMIN, MEMBER } from "../constants/data";
import { getAppData } from "./app";

export function getUsers() {
  let users = getAppData()?.users;

  return users;
}

export function getMembers() {
  let users = getUsers();
  let members = users
    .filter(user => user.role === MEMBER);

  return members;
}

export function getAdmins() {
  let users = getUsers();
  let admins = users.filter(user => user.role === ADMIN);

  return admins;
}

export function addMember(data) {

}

export function getMemberById(id) {

}

export function updateMemberById(id, data) {

}

export function deleteMemberById(id) {

}
