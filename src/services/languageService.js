import axios from "axios"

export default class LanguageService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/languages/get/all");
    }

    add(languageName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/languages/add?languageName=${languageName}`)
    }

}