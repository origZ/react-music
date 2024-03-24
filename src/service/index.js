import Request from "./request"
import {BASE_URL, TIMEOUT} from "./request/config"

const WyyRequest = new Request(BASE_URL,TIMEOUT )

export default WyyRequest