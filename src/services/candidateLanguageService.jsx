import axios from "axios"

export default class CandidateLanguageService {
    add(values) {
        return axios.post("https://javareactcamp-hrms-frontend.herokuapp.com/api/cvsLanguages/add", values)
    }

    delete(id) {
        return axios.delete(`https://javareactcamp-hrms-frontend.herokuapp.com/api/cvsLanguages/deleteById?id=${id}`)
    }
}