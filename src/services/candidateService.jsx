import axios from "axios"

export default class CandidateService {

    existsByEmailAndPassword(email, password){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/existsByEmailAndPassword?email=" + email + "&password=" + password)
    }

    existsByNationalityId(nationalityId){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/existsByNationalityId?nationalityId=" + nationalityId)
    }

    getCandidates() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getAll")
    }

    getById(id){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getById?id=" + id)
    }

    getByEmailAndPassword(email, password){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getByEmailAndPassword?email=" + email +  "&password=" + password)
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/add",values)
    }
}