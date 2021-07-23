import axios from "axios"

export default class CandidateJobExperienceService {

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences/add", values)
    }

    delete(candJobExpId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences/delete/byId?candJobExpId=${candJobExpId}`)
    }

}