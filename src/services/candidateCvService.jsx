import axios from "axios"

export default class CandidateCvService {
    getById(id){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/getById?id=" + id)
    }
}