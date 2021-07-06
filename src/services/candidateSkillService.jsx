import axios from "axios"

export default class CandidateSkillService {
    add(values) {
        return axios.post("https://javareactcamp-hrms-frontend.herokuapp.com/api/candidateSkills/add", values)
    }

    delete(id) {
        return axios.delete(`https://javareactcamp-hrms-frontend.herokuapp.com/api/candidateSkills/deleteById?id=${id}`)
    }
}