export const TOKEN_KEY = "jwt_token";
export const API_URL = "http://localhost:8080";

export const isAuthenticated = () => {
  if (sessionStorage.getItem(TOKEN_KEY) !== null) {
    return true;
  }
  return false;
};

export const getToken = sessionStorage.getItem(TOKEN_KEY);