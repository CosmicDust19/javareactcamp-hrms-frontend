import axios from "axios"

export default class LanguageService {
    getLanguages() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/languages/getAll");
    }
}