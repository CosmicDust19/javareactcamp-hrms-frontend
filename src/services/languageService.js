import axios from "axios"

export default class LanguageService {

    getLanguages() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/languages/get/all");
    }

    addLanguage(languageName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/languages/add?languageName=${languageName}`)
    }

}