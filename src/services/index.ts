import api from "./Api";

export async function signIn(email: string, password: string) {
  const responseFetchSignin = await api.post("users/auth/sign_in", {
    email,
    password,
  }, {
    timeout: 10000
  });
  return responseFetchSignin;
}


export function findAllEntreprises(credentials: any) {
  return new Promise((resolve, reject) => {
    api.get("/enterprises", {
      headers: {
        "access-token": credentials.accessToken,
        client: credentials.client,
        uid: credentials.uid,
      },
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function findEntrepriseByNameAndCategory(credentials: any, type: string) {
  const url = `/enterprises?enterprise_types=${type}`;

  return new Promise((resolve, reject) => {
    api.get(url, {
      headers: {
        "access-token": credentials.accessToken,
        client: credentials.client,
        uid: credentials.uid,
      },
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export function findEntrepriseById(credentials: any, id: number) {
  const url = `/enterprises/${id}`;

  return new Promise((resolve, reject) => {
    api.get(url, {
      headers: {
        "access-token": credentials.accessToken,
        client: credentials.client,
        uid: credentials.uid,
      },
    }).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}








/*
        email: 'testeapple@ioasys.com.br',
        password: '12341234',
*/
