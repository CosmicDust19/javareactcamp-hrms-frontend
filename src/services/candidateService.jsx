import axios from "axios"

export default class CandidateService {
    getCandidates() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getAll")
    }
}