import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.18.172:3333'
});