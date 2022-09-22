import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

import useIsloading from "@/stores/modules/isLoading/isloading";

const isLoadingStore = useIsloading();
class myRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.request.use(
      (config) => {
        //发送网络请求前显示
        isLoadingStore.isLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        //发送成功的时候 消失
        isLoadingStore.isLoading = false;
        return res;
      },
      (err) => {
        // 发送失败不显示
        isLoadingStore.isLoading = false;
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new myRequest(BASE_URL, TIMEOUT);
