import Axios from "./Axios";
import {
    LOGIN, LOGOUT,
} from "./PostUrl";


const POST = "post";

export default {
    login(username, password) {
        let data = { username, password };
        return Axios({ url: LOGIN, method: POST, data: data });
    },
    logout(userId) {
        let data = { userId }
        return Axios({ url: LOGOUT, method: POST, data: data });
    },
}