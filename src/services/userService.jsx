import axios from "axios"
import {toast} from "react-toastify";

export default class UserService {
    existsByEmail(email){
        let x = axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/users/existsByEmail?email=" + email)
        toast.warning(x)
        return x
    }
}