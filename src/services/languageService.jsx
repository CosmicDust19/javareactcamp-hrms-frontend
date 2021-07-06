import axios from "axios"

export default class LanguageService {
    getLanguages() {
        return axios.get("https://javareactcamp-hrms-frontend.herokuapp.com/api/languages/getAll");
    }
}