import axios from "axios"

export default class CandidateLanguageService {

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages/add", values)
    }

    delete(candLangId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages/delete/byId?CandLangId=${candLangId}`)
    }

}