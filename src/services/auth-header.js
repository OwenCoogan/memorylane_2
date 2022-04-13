export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('MemoryLaneCookie'));
  if (user) {
    return { 'x-access-token': user };
  } else {
    return {};
  }
}
