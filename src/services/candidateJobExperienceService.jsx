import axios from "axios"

export default class CandidateJobExperienceService {
    add(values) {
        return axios.post("https://javareactcamp-hrms-frontend.herokuapp.com/api/jobExperiences/add", values)
    }

    delete(id) {
        return axios.delete(`https://javareactcamp-hrms-frontend.herokuapp.com/api/jobExperiences/deleteById?id=${id}`)
    }
}