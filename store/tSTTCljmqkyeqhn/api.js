import axios from "axios"
import {
  TST_TC1047LJMQKYEQHN_PASSWORD,
  TST_TC1047LJMQKYEQHN_USERNAME
} from "react-native-dotenv"
const tSTTCljmqkyeqhn = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047LJMQKYEQHN_PASSWORD,
    password: TST_TC1047LJMQKYEQHN_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
