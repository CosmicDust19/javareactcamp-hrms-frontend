import axios from "axios"

export default class CandidateSkillService {

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills/add", values)
    }

    delete(candSkillId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills/delete/byId?candSkillId=${candSkillId}`)
    }

}