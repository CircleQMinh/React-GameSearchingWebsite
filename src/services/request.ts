import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { APIKEY } from "../constants/apikey";


const config: AxiosRequestConfig = {
  baseURL: "https://v9nqiu3kpb.execute-api.us-west-2.amazonaws.com/production/v4/",
  headers: {
    "x-api-key": APIKEY,
  },
};

class RequestService {
  public axios: AxiosInstance;

  constructor(base?: AxiosRequestConfig) {
    if(base){
      this.axios = axios.create(base);
      this.setCORSHeader()
    }
    else{
      this.axios = axios.create(config);
      this.setCORSHeader()
    }

  }

  public setAuthentication(accessToken: string) {
    this.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

  }

  setCORSHeader(){

  }

  public setClientID(id:string){

  }
}

export default new RequestService();
