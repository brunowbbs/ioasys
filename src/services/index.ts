import api from "./Api";

export async function signIn(email: string, password: string) {
  const responseFetchSignin = await api.post("users/auth/sign_in", {
    email,
    password,
  });
  return responseFetchSignin;
}

/*
        email: 'testeapple@ioasys.com.br',
        password: '12341234',
*/
