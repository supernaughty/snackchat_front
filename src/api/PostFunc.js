import Axios from "./Axios";
import {
    LOGIN, LOGOUT,
} from "./PostUrl";


const POST = "post";

export default {
    login(email, password) {
        let data = { email, password };
        return Axios({ url: LOGIN, method: POST, data: data });
    },
    logout(userId) {
        let data = { userId }
        return Axios({ url: LOGOUT, method: POST, data: data });
    },
}