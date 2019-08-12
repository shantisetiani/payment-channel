import { getCookies } from "../utils/cookies";
import { CONFIG_COOKIES } from "../config/cookies";

export const preRequestInterceptor = config => {
  const token = getCookies(CONFIG_COOKIES.TOKEN);
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    };
  }
  return config;
};
