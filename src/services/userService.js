import axios from "axios"

export default class UserService {

    existsByEmail(email){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/users/exists/byEmail?email=${email}`)
    }

    existsByEmailAndPW(email, password){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/users/exists/byEmailAndPW?email=${email}&password=${password}`)
    }

    deleteById(userId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/users/delete/byId?userId=${userId}`)
    }

    updateEmail(userId, email){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/users/update/email?email=${email}&userId=${userId}`)
    }

    updatePassword(userId, password, oldPassword){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/users/update/pw?oldPassword=${oldPassword}&password=${password}&userId=${userId}`)
    }

}