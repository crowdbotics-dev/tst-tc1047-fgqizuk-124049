import axios from "axios"
import {
  TST_TC1047OWHHZZEUVN_PASSWORD,
  TST_TC1047OWHHZZEUVN_USERNAME
} from "react-native-dotenv"
const tSTTCowhhzzeuvn = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047OWHHZZEUVN_PASSWORD,
    password: TST_TC1047OWHHZZEUVN_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
