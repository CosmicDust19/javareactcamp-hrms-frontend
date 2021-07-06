import axios from "axios"

export default class UserService {
    existsByEmail(email){
        return axios.get(`https://javareactcamp-hrms-frontend.herokuapp.com/api/users/existsByEmail?email=${email}`)
    }
}