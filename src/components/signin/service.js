// 1. 유저 목록 불러오고
// 2. 불러온 유저목록에서 입력받은 값 매칭

export const fetchLogin = async (loginInfo) => {
  const response = await fetch('http://localhost:8000/users');

  if (response.ok) {
    const users = await response.json();
    const user = users.find((user) => user.email === loginInfo.email);

    if (!user || user.password !== loginInfo.password) {
      return null;
    }

    const { email, name } = user;
    return {
      email,
      name,
    };
  }

  return null;
};
