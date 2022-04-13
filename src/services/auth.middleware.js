export async function checkUserToken(store) {
  await store.dispatch('auth/checkUserToken')
  .then(res =>  {
    return res
  })
}
