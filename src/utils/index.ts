export function getUserRole() {
  const userInfo: any = sessionStorage.getItem("userInfo");
  return JSON.parse(userInfo);
}

