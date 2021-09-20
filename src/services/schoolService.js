import axios from "axios"

export default class SchoolService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/schools/get/all");
    }

    add(schoolName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/schools/add?schoolName=${schoolName}`)
    }

}