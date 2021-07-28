import Axios from "./Axios";
import { MEMBER_ALL,  } from "./GetUrl";

const GET = "get";

export default {
    allMember() {
        return Axios({ url: MEMBER_ALL, method: GET });
    },
}