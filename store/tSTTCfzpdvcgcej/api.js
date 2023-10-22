import axios from "axios"
import {
  TST_TC1047FZPDVCGCEJ_USERNAME,
  TST_TC1047FZPDVCGCEJ_PASSWORD
} from "react-native-dotenv"
const tSTTCfzpdvcgcej = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047FZPDVCGCEJ_USERNAME,
    password: TST_TC1047FZPDVCGCEJ_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
