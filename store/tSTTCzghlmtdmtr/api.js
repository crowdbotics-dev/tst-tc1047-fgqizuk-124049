import axios from "axios"
import {
  TST_TC1047ZGHLMTDMTR_USERNAME,
  TST_TC1047ZGHLMTDMTR_PASSWORD
} from "react-native-dotenv"
const tSTTCzghlmtdmtr = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ZGHLMTDMTR_USERNAME,
    password: TST_TC1047ZGHLMTDMTR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
