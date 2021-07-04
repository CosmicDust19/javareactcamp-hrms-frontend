import axios from "axios"

export default class CandidateSchoolService {
    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools/add", values)
    }

    delete(id) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools/deleteById?id=${id}`)
    }
}