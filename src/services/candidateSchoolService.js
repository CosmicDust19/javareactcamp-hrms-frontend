import axios from "axios"

export default class CandidateSchoolService {

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools/add", values)
    }

    delete(candSchId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools/delete/byId?candSchId=${candSchId}`)
    }

}
