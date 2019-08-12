import axios from "axios";
import { errorInterceptor } from "../interceptors/error";
import { preRequestInterceptor } from "../interceptors/pre-request";

export class BaseApi {
  /*
   * Base Url
   * Sample : http://example.com
   * */
  baseUrl = "";

  /*
   * Addtional Base Url
   * Base Url will be appended to baseUrl
   * Sample : users
   * */
  addtionalBaseUrl = "";

  /*
   * Axios Instance
   */
  axiosInstance = null;

  /*
   * Constructor(string)
   * - Set base url
   * - Add unauthorized interceptors
   * - Set addtional base url
   */
  constructor(addtionalBaseUrl = "") {
    this.baseUrl = process.env.API_URL || "";

    this.addtionalBaseUrl = addtionalBaseUrl;

    this.axiosInstance = axios.create();
    this.axiosInstance.interceptors.request.use(preRequestInterceptor, err =>
      Promise.reject(err)
    );

    this.axiosInstance.interceptors.response.use(
      response => response,
      errorInterceptor
    );
  }

  /*
   * make(string, string, object, object
   * Return : Promise <resolve, reject>
   * */
  make(method, url, data = {}, addtionalConfig = {}) {
    if (method === "" || url === "") {
      throw "Error : please fill method and url";
    }

    if (typeof method !== "string" && typeof url !== "string") {
      throw "Error : method and url must be string";
    }

    const config = {
      baseURL: this.baseUrl,
      method,
      url: `${this.addtionalBaseUrl}${url}`,
      headers: {
        "Content-Type": "application/json"
      },
      ...addtionalConfig
    };

    if (method === "GET") {
      Object.keys(data).forEach(key => {
        if (data[key] === null || data[key] === "") {
          delete data[key];
        }
      });
      config.params = data;
    } else {
      config.data = data;
    }

    return this.axiosInstance.request(config);
  }
}
