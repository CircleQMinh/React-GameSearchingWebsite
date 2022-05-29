import { AxiosRequestConfig, AxiosResponse } from "axios";
import IGame from "../../../interface/IGame";
import IGameInfo from "../../../interface/IGameInfo";
import TwitchAuthResponse from "../../../interface/interface";

import RequestService from "../../../services/request";


export function getRamdomGameRequest(query:string): Promise<AxiosResponse<IGame[]>> {
  return RequestService.axios.post(`games`, query);
}

export function getGameRequest(
  query: string
): Promise<AxiosResponse<IGameInfo[]>> {
  return RequestService.axios.post(`games`, query);
}

export function getSearchGameRequest(
  query: string
): Promise<AxiosResponse<IGame[]>> {
  return RequestService.axios.post(`games`, query);
}