import { AxiosResponse } from "axios";
import TwitchAuthResponse from "../../../interface/interface";

import RequestService from '../../../services/request';

const clientID = "1vhp3f9reo8q5ozp52ueknlthid7cw"
const client_secret = "5evwkefwqhtigrrp5eerz1ejf72y9z"
const grant_type="client_credentials"

export function authRequest(): Promise<AxiosResponse<TwitchAuthResponse>> {
    return RequestService.axios.post(`https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${client_secret}&grant_type=${grant_type}`);
}
