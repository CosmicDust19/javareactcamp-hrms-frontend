import axios from "axios"

export default class UserService {
    existsByEmail(email){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/users/existsByEmail?email=${email}`)
    }
}