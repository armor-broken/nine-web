// 真实环境中，如果使用firebase这种第三方auth服务，本文件不要开发者开发
export interface Admin {
  username: string;
  password: string;
}

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const login = (data: Admin) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      console.log("login response", response);
    }
  });
};

export const register = (data: Admin) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      console.log("register response", response);
    }
  });
};

export const logout = () => window.localStorage.removeItem(localStorageKey);
