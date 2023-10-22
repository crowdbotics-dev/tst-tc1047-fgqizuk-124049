import axios from "axios"
import {
  TST_TC1047LBLXZDUCUN_USERNAME,
  TST_TC1047LBLXZDUCUN_PASSWORD
} from "react-native-dotenv"
const tSTTClblxzducun = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047LBLXZDUCUN_USERNAME,
    password: TST_TC1047LBLXZDUCUN_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
