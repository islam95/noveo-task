export const saveToken = (accessToken) => {
  if (typeof localStorage !== 'undefined') {
    localStorage['accessToken'] = accessToken;
  }
}

export const getToken = () => {
  const { accessToken } = localStorage;
  if (!accessToken) return;
  return accessToken;
}