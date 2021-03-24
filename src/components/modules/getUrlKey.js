/* eslint-disable import/no-anonymous-default-export */
export default (users) => {
  const getId = () => {
    let keys = {}
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => keys[key] = value);
    return keys;
  }

  let id = Number(getId()["id"]);
  if (!id) return id;
  let usr = users.find((user) => user.id === id)

  return usr
}